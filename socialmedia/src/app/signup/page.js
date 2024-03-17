'use client'
import React from "react";
import { useState} from "react";
import { useMutation, gql} from "@apollo/client";
import { 
    InputContainer, 
    StyledTextField, 
    StyledHeader, 
    StyledHeaderContainer, 
    StyledButton, 
    StyledButtonContainer 
} 
    from "./signup.styled";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { apolloClient } from "../lib/apolloClient";
import { Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";

if (process.env.NODE_ENV !== "production") {
    loadErrorMessages();
    loadDevMessages();
  }

    const CREATE_USER = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
           email
           username
        }
    }
    `;

export default function Page() {
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
        username: '',
    });

    const [snackbarMessage, setSnackbarMessage] = useState({
        open: false,
        message: '',
        severity: ''
    });

    const router = useRouter();


    const handleOpenSnackbar = (message, severity = 'error') => {
       setSnackbarMessage({ open: true, message, severity })
    }

    const handleCloseSnackbar = () => {
        setSnackbarMessage({ open: false })
    }


    const [createUser, { loading }] = useMutation(CREATE_USER, {
        client: apolloClient,
        onCompleted: () => {
            handleOpenSnackbar('Great Success!', 'success')
        },
        onError: (error) => {
            console.error('An error occured on signup')

            const errorMessage = error.message
            handleOpenSnackbar(errorMessage, 'error');
        }
    });


    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({
        variables: {
            input: {
                email: userInput.email,
                password: userInput.password,
                username: userInput.username,
            }
        },
      });
      router.push('/home');
    } catch (err) {
      console.error("Error creating a user", err);
    }
  };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value })
    }
   
    
    return (
        <>
        <StyledHeaderContainer>
         <StyledHeader>Sign-Up</StyledHeader>
        </StyledHeaderContainer>

        <InputContainer>
            <StyledTextField
                required 
                id="outlined-basic" 
                label="Email"
                name="email" 
                variant="outlined"
                value={userInput.email}
                onChange={handleInputChange}

            />
            <StyledTextField
                required 
                id="outlined-basic" 
                label="Password"
                type="password"
                name="password" 
                variant="outlined" 
                value={userInput.password}
                onChange={handleInputChange}
            />
            <StyledTextField
                required 
                id="outlined-basic" 
                label="Username"
                name="username" 
                variant="outlined"
                value={userInput.username}
                onChange={handleInputChange} 
            />
        </InputContainer>

        <StyledButtonContainer>
            <StyledButton variant="outlined" onClick={handleSubmit}>Sign Up</StyledButton>
            <StyledButton variant="outlined">Cancel</StyledButton>
        </StyledButtonContainer>

        <Snackbar open={snackbarMessage.open} autoHideDuration={5000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity={snackbarMessage.severity}>
                {snackbarMessage.message}
            </Alert>
        </Snackbar>
        </>
    )    
}