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
            <StyledButton variant="outlined">Sign Up</StyledButton>
            <StyledButton variant="outlined">Cancel</StyledButton>
        </StyledButtonContainer>
        </>
    )    
}