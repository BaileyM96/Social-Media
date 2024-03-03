//CREATE STATE FOR INPUT FIELD
//Change this use client later
    //Make only the input fields client side and then make the rest of the page server side
'use client'
import React from "react";
import { useState} from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import { 
    InputContainer, 
    StyledTextField, 
    StyledHeader, 
    StyledHeaderContainer, 
    StyledButton, 
    StyledButtonContainer 
} 
    from "./signup.styled";

export default function Page() {
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
        username: '',
    });

    const [createUser, { loading, error }] = useMutation(CREATE_USER);

    
    // const [createuser, { data, loading, error }] = useMutation(CREATE_USER);

    //NEED TO HANDLE THE INPUT CHANGE 
        //DEFINE A varible called handleInputChange
            //THIS will take an argument of an event(e)
    //NEED TO HANDLE FORM SUBMISSION
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('hello')
    //     try {
    //          const { data } = await createuser({
    //             variables: { ...userInput },
    //          })
    //          data.createuser
    //          console.log('success');
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        try {
            const { data } = await createUser({
                variables: {
                    input: userInput, // Pass formData as variables to the mutation
                },
            });
    
            console.log('User created:', data.createUser);
            // Handle success (e.g., redirecting the user or showing a success message)
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error (e.g., displaying error messages to the user)
        }
    };
    
    
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

            />
            <StyledTextField
                required 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
            />
            <StyledTextField
                required 
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
            />
        </InputContainer>

        <StyledButtonContainer>
            <StyledButton variant="outlined" onClick={handleSubmit}>Sign Up</StyledButton>
            <StyledButton variant="outlined">Cancel</StyledButton>
        </StyledButtonContainer>
        </>
    )    
}