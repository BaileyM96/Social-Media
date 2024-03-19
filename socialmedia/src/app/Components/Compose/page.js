'use client';
import React from "react";
import { StyledComposeContainer, StyledComposeField } from "./compose.styled";

export default function Compose() {
    return (
        <>
            <h1>Compose</h1>

            <StyledComposeContainer>
                <StyledComposeField
                    id="standard-basic"
                    label="What's on your mind?"
                    multiline
                    maxRows={4}
                />
            </StyledComposeContainer>
        </>
    )
}