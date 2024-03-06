'use client';
import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { StyledHeader } from "../signup/signup.styled";
import { LoginContainer, StyledLoginField, StyledLoginButton } from "./login.styled";
import Link from 'next/link'

export default function Login() {
    const [inputField, setInputField] = useState({
        email: '',
        password: ''
    })
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
            />
            <StyledLoginField 
                required
                id="outlined-basic"
                label="Password"
                name="Password"
                type="password" 
                variant="outlined"
            />
            <StyledLoginButton variant="outlined">Login</StyledLoginButton>
            <Link href='/signup'>Dont have an account? Signup here!</Link>
        </LoginContainer>
        </>
    )
}