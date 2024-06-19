import Link from 'next/link';
import { useState } from 'react';
import { StyledHomeIcon, StyledNavContainer, StyledPersonIcon, StyledSearchIcon, StyledSpan, StyledChatBubbleOutlineIcon, StyledAvatarIcon, StyledSubMenu, StyledText } from './bottomNav.styled';


export default function BottomNav() {
    
    return (
        <>
        <StyledNavContainer>
            <Link href="/home">
                <StyledHomeIcon />
                <StyledSpan>Home</StyledSpan>
            </Link>
            <Link href="/search">
                <StyledSearchIcon />
                <StyledSpan>Search</StyledSpan>
            </Link>
            <Link href="/Components/Profile">
                <StyledChatBubbleOutlineIcon />
                <StyledSpan>Message</StyledSpan>
            </Link>
            <Link href="/Components/Profile">
                <StyledPersonIcon />
                <StyledSpan>Profile</StyledSpan>
            </Link>
        </StyledNavContainer>
        </>
    )
}