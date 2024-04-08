'use client';
import { StyledProfileHeader, StyledProfileAvatar, StyledEditProfileButton, StyledUserInfoContainer, 
StyledTopFriendsContainer, StyledTopFriendsHeader, StyledPostsContainer, PostHeaderContainer, 
PostHeader, UserName, StyledPostTime, PostText, Actions
} from "./profile.styled"

import { StyledAvatar } from "@/app/home/home.styled";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { GET_USER_POSTS } from "@/app/utils/query";
import { useQuery } from "@apollo/client";
import { apolloClient } from "@/app/lib/apolloClient";
import moment from "moment";

export default function Profile() {
    const { loading, error, data } = useQuery(GET_USER_POSTS, {
        client: apolloClient,
        variables: {
            userId: '65d28475b8449265f68f9b4b'
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error... </p>;

    const sortedPosts = data.userPosts ? [...data.userPosts].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)) : [];

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
            {sortedPosts.map((post) => (
                <PostHeaderContainer key={post.id}>
                    <PostHeader>
                        <UserName>{post.author.username}</UserName>
                        <StyledPostTime>{moment(Number(post.createdAt)).startOf("day").fromNow()}</StyledPostTime>
                    </PostHeader>
                    <PostText>{post.content}</PostText>
                    <Actions>
                        <span><FavoriteBorderIcon /></span>
                        <span><ChatBubbleOutlineIcon /></span>
                    </Actions>
                </PostHeaderContainer>
            ))}
        </StyledPostsContainer>
        </>
    )
}