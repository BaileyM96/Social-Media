//NEED TO CREATE A SIGNUP PAGE FOR A USER TO CREATE THEIR ACCOUNT

//FIRST STEP: Render the signup page/component
import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { CREATE_USER } from '../utils/mutations';
import Page from './page';

const mocks = [{
    request: {
        query: CREATE_USER,
        variables: {
            email: 'user@example.com',
            password: 'password123!',
            username: 'username',
        }
    },
    result: {
        data: {
            createUser: { id: '1', email: 'user@example.com', username: 'username'},
        },
    }
}]


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
    });

    //Need to test to make sure the create user/submit button works when clicked
        //And the information then creates the new user
    it('Renders the submit and cancel button to create the new user', () => {
        render(<Page />);
        const submitButton = screen.getByRole('button', {name: /sign up/i});
        const cancelButton = screen.getByRole('button', {name: /cancel/i});
        fireEvent.click(submitButton)
        fireEvent.click(cancelButton);
    });
    it('Renders without error', async () => {
        const { getByLabelText, getByRole } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Page />
            </MockedProvider>
        );
        fireEvent.change(getByLabelText(/email/i), { target: { value: 'user@example.com'}});
        fireEvent.change(getByLabelText(/password/i), { target: { value: 'password123!'}});
        fireEvent.change(getByLabelText(/username/i), { target: { value: 'username'}});

        fireEvent.click(getByRole('button', { name: /signup/i}))
    })
})
