'use client';
import { useState } from "react";
import { StyledCardContainer, StyledCard, StyledCardContent, StyledLogout, StyledCancel } from "./logout.styled";
export default function Logout() {
    //Design a card that will be on the screen
    //This card should have two buttons, Logout & Cancel
    //There should be a message that that says Signout of your account?

    //When you logout, the page should refresh and redirect to the login page
    //When you click cancel, the page should redirect to the home page
    const [logout, setLogout] = useState(false);
    const [cancel, setCancel] = useState(false);

    return (
        <>
        <StyledCardContainer>
            <StyledCard>
                <StyledCardContent>Signout of your account?</StyledCardContent>
                <StyledLogout>Logout</StyledLogout>
                <StyledCancel>Cancel</StyledCancel>
            </StyledCard>
        </StyledCardContainer>
        </>
    )
}