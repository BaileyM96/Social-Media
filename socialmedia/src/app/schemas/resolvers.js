const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/auth');

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
        }
    },
  };

  module.exports = resolvers;
  