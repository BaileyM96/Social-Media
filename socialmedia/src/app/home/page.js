import React from "react";
import { StyledHomeContainer, StyledCard } from "./home.styled";

export default function Home() {
    return (
        <>
            <div>
                <h1>Welcome to the home page</h1>
            </div>

            <StyledHomeContainer>
                <StyledCard>
                    <CardContent>
                        <h3>Post content from friends</h3>
                    </CardContent>
                </StyledCard>
            </StyledHomeContainer>
        </>
    )
};