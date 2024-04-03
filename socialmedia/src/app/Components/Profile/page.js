'use client';
import { StyledProfileHeader, StyledProfileAvatar, StyledEditProfileButton, StyledUserInfoContainer, 
StyledTopFriendsContainer, StyledTopFriendsHeader, StyledPostsContainer, PostHeaderContainer, 
PostHeader, UserName, StyledPostTime, PostText, Actions
} from "./profile.styled"

import { StyledAvatar } from "@/app/home/home.styled";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

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

        <StyledTopFriendsHeader>Posts</StyledTopFriendsHeader>
        <StyledPostsContainer>
            <StyledAvatar />
            <PostHeaderContainer>
                <PostHeader>
                    <UserName>Bailey</UserName>
                    <StyledPostTime>2h</StyledPostTime>
                </PostHeader>
                <PostText>This is a testing post</PostText>
                <Actions>
                    <span><FavoriteBorderIcon /></span>
                    <span><ChatBubbleOutlineIcon /></span>
                </Actions>
            </PostHeaderContainer>
        </StyledPostsContainer>

        <StyledPostsContainer>
            <StyledAvatar />
            <PostHeaderContainer>
                <PostHeader>
                    <UserName>Bailey</UserName>
                    <StyledPostTime>2h</StyledPostTime>
                </PostHeader>
                <PostText>I am writing some code to test the posts and lets see if we can get it to wrap, and it does so that is great</PostText>
                <Actions>
                    <span><FavoriteBorderIcon /></span>
                    <span><ChatBubbleOutlineIcon /></span>
                </Actions>
            </PostHeaderContainer>
        </StyledPostsContainer>
        </>
    )
}