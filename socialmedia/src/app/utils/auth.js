const jwt = require('jsonwebtoken');
const { NextResponse } = require('next/server');
const JWT_SECRET = process.env.JWT_SECRET;

const expiration = '2h';

module.exports = {
    authmiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return NextResponse.redirect('/login');
        }

        const context = {};
        
        try {
            const { data } = jwt.verify(token, JWT_SECRET);
            req.user = data;
        } catch (error) {
            console.error('Invalid Token:', error.message);
        }
        return context;
    },
    signToken: function ({ email, id, username }) {
        const payload = { email, id, username };
        return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: expiration });
    }
}