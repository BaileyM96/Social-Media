import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Login from "./page";
import { StyledLoginField } from "./login.styled";
import Link from "next/link";
import { LOGIN_USER } from './page';

const mocks = [{
    request: {
        query: LOGIN_USER,
        variables: {
            email: 'baileymejia28@gmail.com',
            password: 'Daisy',
        }
    },
    result: {
        data: {
            login: { id: '1', email: 'baileymejia28@gmail.com', password: 'Daisy' }
        }
    }
}]

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

    });
    // it('Logs you in without error', async () => {
    //     render(
    //         <MockedProvider mocks={mocks} addTypename={false}>
    //             <Login email='baileymejia28@gmail.com' password='Daisy' />
    //         </MockedProvider>
    //     )
    // })
})