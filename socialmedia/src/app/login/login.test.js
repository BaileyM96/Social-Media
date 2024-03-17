import React from "react";
import { render, screen, fireEvent, getByRole, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Login from "./page";
import { StyledLoginField } from "./login.styled";
import Link from "next/link";
import { LOGIN_USER } from './page';

const mocks = [{
    request: {
        query: LOGIN_USER,
        variables: {
            email: 'user@example.com',
            password: 'Password123!',
        }
    },
    result: {
        data: {
            login: {
                user: {
                    id: '1'
                }
            }
        }
    }
}]

const mockPush = jest.fn();

//Need to mock next/router to avoid errors
jest.mock('next/navigation', () => ({
    useRouter: () =>  ({
        push: mockPush,
    })
}))

describe('Login', () => {
    it('renders the login page', () => {
        render(<Login />)
    });

    it('renders the input fields', () => {
        render(<StyledLoginField />)
    });
    it('should render the link and allow the user to click on the link to go to signup page', () => {
        render(<a href="/signup">Signup</a>);
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
    it('Logs you in without error', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Login />
            </MockedProvider>
        )

        const emailField = screen.getByLabelText(/email/i);
        const passwordField = screen.getByLabelText(/password/i);

        fireEvent.change(emailField, { target: { value: 'example@gmail.com' }})
        fireEvent.change(passwordField, { target: { value: 'Password123!' }})

        fireEvent.click(screen.getByRole('button', { name: /Login/i }))
    });
    it('Renders a success message when the user logs in', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Login />
            </MockedProvider>
        )

        fireEvent.click(screen.getByRole('button', { name: /Login/i }));
        await waitFor(() => {
            const successMessage = screen.getByText(/Great Success!/i);
            expect(successMessage).toBeInTheDocument();
        })
    });
    it('Redirects the user to the home page after logging in', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Login />
            </MockedProvider>
        )

        fireEvent.click(screen.getByRole('button', { name: /Login/i }));
        await waitFor(() => {
            expect(mockPush).toHaveBeenCalledWith('/home');
        })
    })
})