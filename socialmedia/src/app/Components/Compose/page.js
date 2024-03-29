'use client';
import React from "react";
import { StyledComposeContainer, StyledComposeField, ComposeHeader, StyledButton } from "./compose.styled";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledAvatar } from "../../home/home.styled";
import { apolloClient } from "../../lib/apolloClient";
import { GET_USER } from "../../utils/query";
import { useQuery } from "@apollo/client";



export default function Compose() {
    const { loading, error, data } = useQuery(GET_USER, {
        client: apolloClient,
        variables: {
            email: 'baileymejia28@gmail.com'
        }
    });

    if (loading) return <p>Loading...</p>;
    
    if (error) return `Error! ${error.message}`;


    return (
        <>
            <ComposeHeader>
                <ArrowBackIcon />
                <StyledButton variant="contained" color="primary">Post</StyledButton>
            </ComposeHeader>

            <StyledComposeContainer>
                <StyledAvatar>{data.user.username[0]}</StyledAvatar>
                <StyledComposeField
                    id="standard-multiline-flexible"
                    label="What's on your mind?"
                    multiline
                    maxRows={5}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}      
                />
            </StyledComposeContainer>
        </>
    )
}