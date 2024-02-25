const { emailValidation } = require('./resolvers')

//Need to test for valid email addresses 
//Test for invalid email addresses

describe('emailValidation', () => {
    test('validates correct email adresses', () => {
        const validEmails = ['test@example.com', 'user.name@domain.co.uk'];
        validEmails.forEach(email => {
            expect(emailValidation(email)).toBe(true);
        });
    });

})