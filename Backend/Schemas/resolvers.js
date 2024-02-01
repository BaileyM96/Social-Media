//NEED To create funtions
    //TURN Query & Mutations into data JSON
const bcrypt = require('bcrypt');
const { signToken } = require('..//utils/auth');

const resolvers = {
    Query: {
        user: async(_,args, context) => {
            const user = await context.db.findByUserId(args.id);
            return user;
        }
    },

    //  Need to sign the token to authenticate the created user
    Mutation: {
        createUser: async(parent, { email, password, username }) => {
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = await user.create({ email, password, username });
            const token = signToken({ email: user.email, id: user.id, username: user.username });
            return { token, user };
        }
    }
}

module.exports = resolvers;