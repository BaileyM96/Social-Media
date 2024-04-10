const { User, FriendRequest, Post } = require('../models');
const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/auth');
const jwt = require('jsonwebtoken');
const { create } = require('../models/friendRequest');

const emailValidation = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(String(email).toLowerCase());
};

const passwordValidation = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password);

}
const resolvers = {
    Query: {
      user: async (_, { email }, context) => {
  
        const user = await User.findOne({ email: email }).populate('sentFriendRequest');
        return user;
      },
      friendsPosts: async (_, { userId }) => {
        const user = await User.findById(userId).populate('friends');
        const friendsPosts = await Post.find({ author: { $in: user.friends } })
                                        .populate('author', '_id username'); 
    
        const convertedPosts = friendsPosts.map(post => {
            let postObject = post.toObject({ virtuals: true }); 
            postObject.id = postObject._id.toString(); 
            delete postObject._id;
            delete postObject.__v; 
    
            postObject.likes = postObject.likes.map(like => like.toString());
            return postObject;
        });
        return convertedPosts;
    },
    userPosts: async (_, { userId }) => {
      try {
        const posts = await Post.find({ author: userId }).populate('author');
        console.log('posts', posts);
        return posts;
      } catch (error) {
        console.error('Error fetching user posts', error);
        throw new ApolloError('Failed to fetch user posts');
      }
    },
  },
    Mutation: {
        createUser: async(_, { input }) => {
          const { username, email, password } = input;
          const existingUser = await User.findOne({username});

          if (existingUser) {
            throw new UserInputError('A user with that username already exists!');
          }
         
          if (!emailValidation(email)) {
            throw new UserInputError('Must provide valid email address');
          }

          if (!passwordValidation(password)) {
            throw new UserInputError('Must provide an uppercase and lowercase charcter with a special symbol that is 8 characters long');
          }

          let user;
          try {
            user = await User.create({ email, password, username });
          } catch (error) {
            console.error('Error creating user', error)
            throw new Error('Failed to create user')
          }
          const token = signToken({ email: user.email, id: user.id, username: user.username });
          console.log('user', user);
          return user;
        },

        login: async (_, { email, password }) => {
          const user = await User.findOne({ email });

          if (!emailValidation(email)) {
            throw new UserInputError('Must provide valid email adress!')
          }

          if (!user) {
            throw new AuthenticationError('No user found with that username!')
          }
          const correctPW = await bcrypt.compare(password, user.password);
          if (!correctPW) {
            throw new AuthenticationError('Invalid password');
          }
          const token = jwt.sign({ email: user.email, id: user.id, username: user.username }, process.env.JWT_SECRET);
          return { token, user}
        },

        sendFriendRequest: async (_, { fromUserName, toUserName }) => { 
          const fromUser = await User.findOne({ username: fromUserName });
          const toUser = await User.findOne({ username: toUserName });

          if (!toUser || !fromUser) {
            throw new UserInputError('You must provide both from and to username')
          }

          if (!toUser) {
            throw new UserInputError('That user does not exsist')
          }
          
          if (fromUser === toUser) {
            throw new AuthenticationError('You cannot send yourself a friend request!')
          }

          const newFriendRequest = await FriendRequest.create({
            from: fromUser.id,
            to: toUser.id,
            status: 'PENDING',
          });
        
          await User.findByIdAndUpdate(toUser.id, {
            $push: { receivedFriendRequest: newFriendRequest.id }
          });

          await User.findByIdAndUpdate(fromUser.id, {
            $push: { sentFriendRequest: newFriendRequest.id }
          });
  
          return newFriendRequest;
        },

        acceptFriendRequest: async (_, { requestId }) => {
         const pendingRequests = await FriendRequest.findById(requestId);

         if (!pendingRequests) {
          throw new Error('No pending requests have been found!')
         }

         if (pendingRequests.status === 'ACCEPTED') {
          throw new Error('You have already accepted the request!');
         }
       
         pendingRequests.status = 'ACCEPTED';
         await pendingRequests.save();

         await User.findByIdAndUpdate(pendingRequests.from, { $addToSet: { friends: pendingRequests.to }});
         await User.findByIdAndUpdate(pendingRequests.to, { $addToSet: { friends: pendingRequests.from }})
         
         return pendingRequests
        },

        rejectFriendRequest: async (_, { requestId }) => {
          const deniedRequests = await FriendRequest.findById(requestId);

          if (!deniedRequests) {
            throw new Error('There is no PENDING requests');
          }

          deniedRequests.status = 'DENIED';
          await deniedRequests.save();

          return deniedRequests;
        },
        createPost: async (_, { content, authorId }) => {
          const author = await User.findById(authorId);

          if (!author) {
            throw new Error('The author can not be found!');
          }

          const newPost = await Post.create({
            content,
            author: authorId
          });

          await User.findByIdAndUpdate(authorId, {
            $push: { posts: newPost.id }
          })

          if (!newPost) {
            throw new Error('Post can not be created!');
          }
          
          return newPost;
        },
        likedPost: async (_, { postId, userId }) => {
          const post = await Post.findById(postId);
          const user = await User.findById(userId);
           
          if(!post) {
            throw new Error('Cannot find post');
          }

          await Post.findByIdAndUpdate(post, {
            $push: { likes: user }
          });
          return post;
        },
        unlikePost: async (_,{ postId, userId }) => {
          const post = await Post.findById(postId);
          const user = await User.findById(userId);
        
          if (!post) {
            throw new Error('Cannot find post')
          };

          await Post.findByIdAndUpdate(postId, {
            $pull: { likes: userId }
          });

          await post.save();
          return post;
        } 
    },
  };

  module.exports = { resolvers, emailValidation };
  