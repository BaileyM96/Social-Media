const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/auth');
const jwt = require('jsonwebtoken')

const resolvers = {
    Query: {
      // Resolver for 'user' query
      user: async (_, args, context) => {
        // Fetch the user based on the ID from your data source (e.g., database)
        const user = await context.db.findUserById(args.id);
        return user;
      },
    },
  
    Mutation: {
        createUser: async(_, { input }) => {
          const { username, email, password } = input;
          const user = await User.create({ email, password, username });
          console.log(user);
          const token = signToken({ email: user.email, id: user.id, username: user.username });
          return { token, user };
        },
        login: async (_, { email, password }) => {
          const user = await User.findOne({ email });
          console.log(user)
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
    },
  };

  module.exports = resolvers;
  