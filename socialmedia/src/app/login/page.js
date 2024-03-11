'use client';
import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { StyledHeader } from "../signup/signup.styled";
import { LoginContainer, StyledLoginField, StyledLoginButton } from "./login.styled";
import Link from 'next/link'
import { apolloClient } from "../lib/apolloClient";
import { Snackbar, Alert } from "@mui/material";


export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                id
            }
        }
    }
`;


export default function Login() {
    const [inputField, setInputField] = useState({
        email: '',
        password: '',
    });

    const [open, setOpen] = useState({
        open: false,
        message: '',
        severity: ''
    })

    const [login, { loading }] = useMutation(LOGIN_USER, {
        client: apolloClient,
        onCompleted: () => {
            setOpen({ open: true, message: 'Great Success!', severity: 'success' })
        },
        onError: () => {
            setOpen({ open: true, message: 'Incorrect email or password', severity: 'error' })
        }
    });


    const handleInputField = (e) => {
        const { name, value } = e.target;
        setInputField({ ...inputField, [name]: value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({
                variables: {
                    email: inputField.email,
                    password: inputField.password
                },
            });
            setInputField({
                email: '',
                password: ''
            });
        } catch (err) {
            console.error('There was a problem trying to login', err);
        }
    }
    return (
        <>
        <StyledHeader>Login</StyledHeader>

        <LoginContainer>
            <StyledLoginField 
                required
                id="outlined-basic"
                label="Email"
                name="email" 
                variant="outlined"
                onChange={handleInputField}
            />
            <StyledLoginField 
                required
                id="outlined-basic"
                label="Password"
                name="password"
                type="password" 
                variant="outlined"
                onChange={handleInputField}
            />
            <StyledLoginButton variant="outlined" onClick={handleLogin}>Login</StyledLoginButton>
            <Link href='/signup'>Dont have an account? Signup here!</Link>
        </LoginContainer>

        <Snackbar open={open.open} autoHideDuration={5000}>
            <Alert severity={open.severity} onClose={() => setOpen({ message: '', severity: '' })}>
                {open.message}
            </Alert>
        </Snackbar>
        </>
    )
}