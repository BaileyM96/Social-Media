'use client';
import React from "react";
import { StyledSpeedDial, StyledSpeedDialContainer, StyledSpeedDialIcon } from "./speedDial.styled";
import { useRouter } from "next/navigation";


export default function SpeedDial() {
    const router = useRouter();

    const handleOpen = () => {
        router.push('Components/Compose'); 
    }

    return (
        <>
        <StyledSpeedDialContainer>
            <StyledSpeedDial
                ariaLabel="SpeedDial example"
                icon={<StyledSpeedDialIcon />}
                onClick={handleOpen}
            >
            </StyledSpeedDial>
        </StyledSpeedDialContainer>
        </>
    )
}