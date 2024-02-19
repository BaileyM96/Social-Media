const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const expiration = '2h';

module.exports = {
    authmiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        const context = {};
        
        try {
            const { data } = jwt.verify(token, JWT_SECRET);
            req.user = data;
        } catch (error) {
            console.log('Invalid Token:', error.message);
        }
        return context;
    },
    signToken: function ({ email, id, username }) {
        const payload = { email, id, username };
        return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: expiration });
    }
}