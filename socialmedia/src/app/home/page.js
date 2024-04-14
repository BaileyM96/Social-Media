'use client';
import React from "react";
import { apolloClient } from "../lib/apolloClient";
import { StyledHomeContainer, StyledCard, StyledCardContent, StyledAvatar, StyledCardHeader, StyledCardActions } from "./home.styled";
import IconButton  from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import { useQuery } from "@apollo/client";
import moment from "moment";
import SpeedDial from "../Components/SpeedDial/page";
import Skeleton from "@mui/material/Skeleton";
import { GET_FRIENDS_POSTS } from "../utils/query";
import BottomNav from '../Components/BottomNavbar/bottomNav';
import { 
    StyledPostsContainer, 
    PostHeaderContainer, 
    PostHeader, 
    UserName, 
    StyledPostTime, 
    PostText, 
    Actions ,
    StyledMainHome
} from "../Components/Profile/profile.styled";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { GET_USER_POSTS } from "../utils/query";


export default function Home() {
    const { loading, error, data } = useQuery(GET_FRIENDS_POSTS, {
        client: apolloClient,
        variables: {
            userId: '65d28475b8449265f68f9b4b'
        }
    });

    const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER_POSTS, {
        client: apolloClient,
        variables: {
            userId: '65d28475b8449265f68f9b4b'
        }
    });

    if (userLoading) return <p>Loading...</p>;
    if (userError) return <p>Error... </p>;

    if (loading) 
    return (
        <StyledHomeContainer>
            {Array.from(new Array(5)).map((_, index) => (
                <StyledCard key={index}>
                    <StyledCardHeader 
                        avatar={<Skeleton animation='wave' variant="circular" width={40} height={40} />}
                        title={<Skeleton animation='wave' variant="text" width="40%" />}
                        subheader={<Skeleton animation='wave' variant="text" width="20%" />}
                    />
                    <StyledCardContent>
                        <Skeleton animation='wave' variant="text" />
                        <Skeleton animation='wave' variant="text" />
                        <Skeleton animation='wave' variant="text" width="60%" />
                    </StyledCardContent>
                    <StyledCardActions>
                        <Skeleton animation='wave' variant="rectangular" width={48} height={48} /> 
                    </StyledCardActions>
                </StyledCard>
            ))}
        </StyledHomeContainer>
    );

    if (error) return `Error! ${error.message}`;

    console.log('userData', userData);
    
    //NEED TO INTEGRATE YOUR OWN POSTS WITH FRIENDS POSTS TO DISPLAY BOTH ON THE HOMEPAGE
    const sortedPosts = [...(data.friendsPosts || [] ), ...(userData.userPosts || [])].sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
    console.log('sortedPosts', sortedPosts);


    return (
        <> 
        <StyledMainHome>
            {sortedPosts.map((posts) => (
                <StyledPostsContainer>
                <PostHeaderContainer key={posts.id}>
                    <PostHeader>
                        <StyledAvatar>{posts.author.username[0]}</StyledAvatar>
                        <UserName>{posts.author.username}</UserName>
                        <StyledPostTime>{moment(Number(posts.createdAt)).fromNow()}</StyledPostTime>
                    </PostHeader>
                    <PostText>{posts.content}</PostText>
                    <Actions>
                        <span><FavoriteBorderIcon /></span>
                        <span><ChatBubbleOutlineIcon /></span>
                    </Actions>
                </PostHeaderContainer>
            </StyledPostsContainer>
            ))}
        </StyledMainHome> 
            <SpeedDial />
            <BottomNav />          
        </>
    )
};