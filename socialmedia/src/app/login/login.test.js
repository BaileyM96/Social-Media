import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./page";
import { StyledLoginField } from "./login.styled";
import Link from "next/link";

describe('Login', () => {
    it('renders the login page', () => {
        render(<Login />)
    });

    it('renders the input fields', () => {
        render(<StyledLoginField />)
    });
    it('should render the link and allow the user to click on the link to go to signup page', () => {
        render(<Link href='/signup' />);
        fireEvent.click(<Link href='/signup' />)
    })
})