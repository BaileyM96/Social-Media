'use client';
import { StyledProfileHeader, StyledProfileAvatar, StyledEditProfileButton, StyledUserInfoContainer, 
StyledTopFriendsContainer, StyledTopFriendsHeader, StyledPostsContainer, PostHeaderContainer, 
PostHeader, UserName, StyledPostTime, PostText, Actions,
StyledProfile
} from "./profile.styled"

import { StyledAvatar } from "@/app/home/home.styled";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { GET_USER_POSTS, GET_USER } from "@/app/utils/query";
import { useQuery } from "@apollo/client";
import { apolloClient } from "@/app/lib/apolloClient";
import moment from "moment";
import BottomNav from "../BottomNavbar/bottomNav";

export default function Profile() {
    const { loading, error, data } = useQuery(GET_USER_POSTS, {
        client: apolloClient,
        variables: {
            userId: '65d28475b8449265f68f9b4b'
        }
    });

    const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER, {
        client: apolloClient,
        variables: {
            email: 'baileymejia28@gmail.com'
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error... </p>;

    if (userLoading) return <p>Loading...</p>;
    if (userError) return <p>Error... </p>;


    const sortedPosts = data.userPosts ? [...data.userPosts].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)) : [];

    return (
        <>
        <StyledProfile>
            <StyledProfileHeader>
                <StyledProfileAvatar>{userData.user.username[0]}</StyledProfileAvatar>
                <StyledEditProfileButton variant="outlined">Edit profile</StyledEditProfileButton>
            </StyledProfileHeader>

            <StyledUserInfoContainer>
                {console.log(userData.user.username)}
                <h2>{userData.user.username}</h2>
                <p>Joined {moment(Number(userData.user.createdAt)).format("MMMM YYYY")}</p>
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
            
                {sortedPosts.map((post) => (
                    <StyledPostsContainer>
                    <PostHeaderContainer key={post.id}>
                        <PostHeader>
                            <UserName>{post.author.username}</UserName>
                            <StyledPostTime>{moment(Number(post.createdAt)).fromNow()}</StyledPostTime>
                        </PostHeader>
                        <PostText>{post.content}</PostText>
                        <Actions>
                            <span><FavoriteBorderIcon /></span>
                            <span><ChatBubbleOutlineIcon /></span>
                        </Actions>
                    </PostHeaderContainer>
                    </StyledPostsContainer>
                ))}
        <BottomNav />
        </StyledProfile>
        </>
    )
}