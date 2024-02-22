const { User, FriendRequest, Post } = require('../models');
const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/auth');
const { create } = require('../models/friendRequest');

const resolvers = {
    Query: {
      user: async (_, { email }, context) => {
  
        const user = await User.findOne({ email: email }).populate('sentFriendRequest');
        return user;
      },
    },
  
    Mutation: {
        createUser: async(_, { input }) => {
          const { username, email, password } = input;
          const user = await User.create({ email, password, username });
          const token = signToken({ email: user.email, id: user.id, username: user.username });
          return { token, user };
        },

        login: async (_, { email, password }) => {
          const user = await User.findOne({ email });
          if (!user) {
            throw new AuthenticationError('No user found with that username!')
          }
          const correctPW = await bcrypt.compare(password, user.password);
          if (!correctPW) {
            throw new AuthenticationError('Invalid password');
          }
          const token = signToken({ email: user.email, id: user.id, username: user.username });
          console.log('token resolver', token)
          console.log('user', user)
          return { token, user}
        },

        sendFriendRequest: async (_, { fromUserName, toUserName }, context) => {
          console.log('Context', context.user) 
          if (!context.user) {
            throw new AuthenticationError('You need to be logged in!');
          }
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

  module.exports = resolvers;
  