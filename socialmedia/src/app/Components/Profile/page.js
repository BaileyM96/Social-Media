'use client';
import { StyledProfileHeader, StyledProfileAvatar, StyledEditProfileButton, StyledUserInfoContainer, 
StyledTopFriendsContainer, StyledTopFriendsHeader
} from "./profile.styled"

export default function Profile() {
    return (
        <>
        <StyledProfileHeader>
            <StyledProfileAvatar />
            <StyledEditProfileButton variant="outlined">Edit profile</StyledEditProfileButton>
        </StyledProfileHeader>

        <StyledUserInfoContainer>
            <h2>Bailey</h2>
            <p>Joined January 1 2024</p>
        </StyledUserInfoContainer>

        <StyledTopFriendsHeader>Bailey's top 8</StyledTopFriendsHeader>
        <StyledTopFriendsContainer>
            <StyledProfileAvatar />
            <StyledProfileAvatar />
            <StyledProfileAvatar />
            <StyledProfileAvatar />
            <StyledProfileAvatar />
            <StyledProfileAvatar />
            <StyledProfileAvatar />
            <StyledProfileAvatar />
        </StyledTopFriendsContainer>
        </>
    )
}