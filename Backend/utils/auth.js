const jwt = require('jsonwebtoken');
const secret = 'shhhh';
const expiration = '2h';

module.exports = {
    authMiddleWare: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split('').pop().trim();
        }
        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret);
            req.user = data
        } catch (error) {
            console.log('Invalid Token', error.message)
        }
        return req;
    },
    signToken: function({ email, id, username }) {
        const payload = { email, id, username };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};