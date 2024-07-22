'use client';
import { useState } from "react";
import { StyledCardContainer, StyledCard, StyledCardContent, StyledLogout, StyledCancel } from "./logout.styled";
import { useRouter } from "next/navigation";
import Auth from "../utils/frontEnd.auth";

export default function Logout() {
    const [logout, setLogout] = useState(false);
    const [cancel, setCancel] = useState(false);

    const router = useRouter();

    const handleLogout = () => {
        setLogout(true);
        Auth.logout();
        router.push('/login');
    }
     const handleCancel = () => {
        setCancel(true);
        router.push('/home');
     }

    return (
        <>
        <StyledCardContainer>
            <StyledCard>
                <StyledCardContent>Logout of your account?</StyledCardContent>
                <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
                <StyledCancel onClick={handleCancel}>Cancel</StyledCancel>
            </StyledCard>
        </StyledCardContainer>
        </>
    )
}