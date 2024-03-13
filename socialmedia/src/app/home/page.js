'use client';
import React from "react";
import { StyledHomeContainer, StyledCard, StyledCardContent, StyledAvatar, StyledCardHeader, StyledCardActions } from "./home.styled";
import IconButton  from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useQuery } from "@apollo/client";


export default function Home() {
    return (
        <>

            <StyledHomeContainer>
                <StyledCard>
                    <StyledCardHeader 
                    title="username" 
                    subheader="9-11-24"
                    avatar={<StyledAvatar></StyledAvatar>}
                    >
                    </StyledCardHeader>
                    <StyledCardContent>
                        This is my post and lets see how it looks This is my post and lets see how it looks This is my post and lets see how it looks
                    </StyledCardContent>
                    <StyledCardActions>
                        <IconButton aria-label="add to favorites">
                            <Favorite /> 100
                        </IconButton>
                    </StyledCardActions>
                </StyledCard>
    
                <StyledCard>
                    <StyledCardHeader 
                    title="username" 
                    subheader="9-11-24"
                    avatar={<StyledAvatar></StyledAvatar>}
                    >
                    </StyledCardHeader>
                    <StyledCardContent>
                        This is my post and lets see how it looks This is my post and lets see how it looks This is my post and lets see how it looks
                    </StyledCardContent>
                    <StyledCardActions>
                        <IconButton aria-label="add to favorites">
                            <Favorite />
                        </IconButton>
                    </StyledCardActions>
                </StyledCard>
            </StyledHomeContainer>
            
        </>
    )
};