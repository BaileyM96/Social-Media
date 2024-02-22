const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
    authMiddleWare: function ({ req }) {
        console.log('Start!')
        const context = {}
        let token = req.body.token || req.query.token || req.headers.authorization;
        console.log('Auth Header', req.headers.authorization);
        console.log('Token auth', token)

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        
        try {
            const { data } = jwt.verify(token, JWT_SECRET);
            req.user = data;
        } catch (error) {
            console.log('Invalid Token:', error.message);
        }
        return context
    },
    signToken: function ({ email, id, username }) {
        const payload = { email, id, username };
        return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: expiration });
    }
}
