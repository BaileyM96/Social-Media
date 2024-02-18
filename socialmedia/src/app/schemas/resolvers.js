const { User, FriendRequest } = require('../models');
const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/auth');
const jwt = require('jsonwebtoken')

const resolvers = {
    Query: {
      // Resolver for 'user' query
      user: async (_, { email }, context) => {
        // Fetch the user based on the ID from your data source (e.g., database)
        const user = await User.findOne({ email: email }).populate('sentFriendRequest');
        console.log('QUERY USER', user);
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
          // console.log('fromUser', fromUser);
          // console.log('toUser', toUser);
          await User.findByIdAndUpdate(toUser.id, {
            $push: { receivedFriendRequest: newFriendRequest.id }
          });

          await User.findByIdAndUpdate(fromUser.id, {
            $push: { sentFriendRequest: newFriendRequest.id }
          });
  
          // console.log('new friend request', newFriendRequest)
          return newFriendRequest;
        },

        acceptFriendRequest: async (_, { requestId }) => {
         //DEFINE friendRequests and find it by its id from the User schema
         const pendingRequests = await FriendRequest.findById(requestId);

         if (!pendingRequests) {
          throw new Error('No pending requests have been found!')
         }

         if (pendingRequests.status === 'ACCEPTED') {
          throw new Error('You have already accepted the request!');
         }
       
         pendingRequests.status = 'ACCEPTED';
         await pendingRequests.save();

         console.log(`Adding Friend: ${pendingRequests.to} to user ${pendingRequests.from}`)
         await User.findByIdAndUpdate(pendingRequests.from, { $addToSet: { friends: pendingRequests.to }});
         console.log(`Adding Friend: ${pendingRequests.from} from user ${pendingRequests.to}`)
         await User.findByIdAndUpdate(pendingRequests.to, { $addToSet: { friends: pendingRequests.from }})
         
         return pendingRequests
        },

        rejectFriendRequest: async () => {

        },
    },
  };

  module.exports = resolvers;
  