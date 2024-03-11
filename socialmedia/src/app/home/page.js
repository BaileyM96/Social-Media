'use client';
import React from "react";
import { StyledHomeContainer, StyledCard, StyledCardContent } from "./home.styled";

export default function Home() {
    return (
        <>
            <div>
                <h1>Welcome to the home page</h1>
            </div>

            <StyledHomeContainer>
                <StyledCard>
                    <StyledCardContent>
                        <h3>Post content from friends</h3>
                    </StyledCardContent>
                </StyledCard>
            </StyledHomeContainer>
        </>
    )
};