import React from "react";
import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Login from "./page";
import { StyledLoginField } from "./login.styled";
import Link from "next/link";
import { LOGIN_USER } from './page';

// const mocks = [{
//     request: {
//         query: LOGIN_USER,
//         variables: {
//             email: 'user@example.com',
//             password: 'Password123!',
//         }
//     },
//     result: {
//         data: {
//             login: {
//                 user: {
//                     id: '1'
//                 }
//             }
//         }
//     }
// }]

describe('Login', () => {
    it('renders the login page', () => {
        render(<Login />)
    });

    it('renders the input fields', () => {
        render(<StyledLoginField />)
    });
    it('should render the link and allow the user to click on the link to go to signup page', () => {
        render(<Link href='/signup'>
            <a>signup</a>
        </Link>);
        const signupButton = screen.getByRole('link', {name: /signup/i })
        fireEvent.click(signupButton);
    });
    it('allows the user to type in the input field', () => {
        render(<Login />)
        const emailField = screen.getByLabelText(/email/i);
        const passwordField = screen.getByLabelText(/password/i);

        fireEvent.change(emailField, { target: { value: 'example@gmail.com' }})
        fireEvent.change(passwordField, { target: { value: 'Password123!' }})
    });
    // it('Logs you in without error', async () => {
    //     render(
    //         <MockedProvider mocks={mocks} addTypename={false}>
    //             <Login />
    //         </MockedProvider>
    //     )
    //     fireEvent.change(emailField, { target: { value: 'example@gmail.com' }})
    //     fireEvent.change(passwordField, { target: { value: 'Password123!' }})

    //     fireEvent.click(getByRole('button', { name: /login/i }))
    // })
})