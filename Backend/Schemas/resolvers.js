//NEED To create funtions
    //TURN Query & Mutations into data JSON
const bcrypt = require('bcryptjs');
const { userProfile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async(_,args, context) => {
            const user = await context.db.findByUserId(args.id);
            return user;
        }
    },

    //  Need to sign the token to authenticate the created user
    Mutation: {
        createUser: async(_, { input }) => {
            const { email, password, userName } = input;

            if (!password) {
                throw new Error('Password is required')
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            const user = await userProfile.create({ email, password: hashedPassword, userName });
            const token = signToken({ email: user.email, id: user.id, userName: user.userName });
            return { token, user };
        }
    }
}

module.exports = resolvers;