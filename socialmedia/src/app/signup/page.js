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

if (process.env.NODE_ENV !== "production") {
    loadErrorMessages();
    loadDevMessages();
  }

    const CREATE_USER = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
           email
           password
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

console.log('Apollo client instance', apolloClient)
    const [createUser, { loading, error }] = useMutation(CREATE_USER, {
        client: apolloClient,
    });

    const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await createUser({
        variables: {
          email: userInput.email,
          password: userInput.password,
          username: userInput.username,
        },
      });
      // Handle success (e.g., redirecting to another page or clearing the form)
    } catch (err) {
      // Handle error (e.g., displaying an error message)
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
                variant="outlined"
                value={userInput.email}
                onChange={handleInputChange}

            />
            <StyledTextField
                required 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                value={userInput.password}
                onChange={handleInputChange}
            />
            <StyledTextField
                required 
                id="outlined-basic" 
                label="Username" 
                variant="outlined"
                value={userInput.username}
                onChange={handleInputChange} 
            />
        </InputContainer>

        <StyledButtonContainer>
            <StyledButton variant="outlined" onClick={handleSubmit}>Sign Up</StyledButton>
            <StyledButton variant="outlined">Cancel</StyledButton>
        </StyledButtonContainer>
        </>
    )    
}