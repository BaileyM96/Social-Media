//NEED TO CREATE A SIGNUP PAGE FOR A USER TO CREATE THEIR ACCOUNT

//FIRST STEP: Render the signup page/component
import React from 'react';
import { render,screen, fireEvent, getByLabelText } from '@testing-library/react';
import Page from './page';


describe('Page', () => {
    it('renders the signup page', () => {
        render(<Page />);
    });

    it('renders email, password, and username input fields and allows users to type in them.', () => {
        render(<Page />);
        const emailField = screen.getByLabelText(/email/i);
        const passwordField = screen.getByLabelText(/password/i);
        const usernameField = screen.getByLabelText(/username/i);

        fireEvent.change(emailField, {target: {value: 'user@example.com'}});
        fireEvent.change(passwordField, {target: {value: 'Password123!'}});
        fireEvent.change(usernameField, {target: {value: 'username'}})
    })
})
//THEN it should displauy three fields: email, password, than username

//SECOND STEP: The input fields need to be able to typeable

//THIRD STEP: CREATE a button that submits/creates the users account for the backend database