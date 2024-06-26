'use client';
import React, { useState, useEffect } from "react";
import { apolloClient } from "../lib/apolloClient";
import { StyledHomeContainer, StyledCard, StyledCardContent, StyledAvatar, StyledCardHeader, StyledCardActions } from "./home.styled";
import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import SpeedDial from "../Components/SpeedDial/page";
import Skeleton from "@mui/material/Skeleton";
import { GET_FRIENDS_POSTS } from "../utils/query";
import { LIKE_POST, UNLIKE_POST } from "../utils/mutations";
import BottomNav from '../Components/BottomNavbar/bottomNav';
import { 
    StyledPostsContainer, 
    PostHeaderContainer, 
    PostHeader, 
    UserName, 
    StyledPostTime, 
    PostText, 
    Actions ,
    StyledMainHome,
    StyledSpan,
    StyledSpanLikes,
    StyledLikes,
    StyledComments,
    StyledLiked
} from "../Components/Profile/profile.styled";
import { GET_USER_POSTS } from "../utils/query";
import Header from "../Components/Header/Header";


export default function Home() {
    const [hasLiked, setHasLiked] = useState(window.localStorage.getItem('userLikedPosts'));
    

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

    // useEffect(() => {
    //     window.localStorage.setItem('userLikedPosts', JSON.stringify(hasLiked));
    // }, [hasLiked])

   

    const [likedPost] = useMutation(LIKE_POST, {
        client: apolloClient,
        variables: {
            userId: '65d28475b8449265f68f9b4b'
        }
    });

    const [unlikedPost] = useMutation(UNLIKE_POST, {
        client: apolloClient,
        variables: {
            userId: '65d28475b8449265f68f9b4b'
        }
    });

    const handleLike = async (postId) => {   
       if (hasLiked) {
        try {
            await unlikedPost({
                variables: {
                    postId: postId,
                }
            });
            setHasLiked(false);
        } catch (error) {
            console.error(error);
        }
       } else {
        try {
            await likedPost({
                variables: {
                    postId: postId,
                }
            });
            setHasLiked(true);
        } catch (error) {
            console.error(error);
       }
    };
}

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
    const sortedPosts = [...(data.friendsPosts || [] ), ...(userData.userPosts || [])].sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
    console.log('sortedPosts', sortedPosts);   
    return (
        <>
        <Header /> 
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
                        <StyledSpan onClick={() => handleLike(posts.id)}>
                            {hasLiked ? <StyledLiked /> : <StyledLikes />}
                            <StyledSpanLikes onClick={() => handleLike(posts.id)}>{posts.likes}</StyledSpanLikes>
                        </StyledSpan>
                        <StyledSpan>
                            <StyledComments />
                            <StyledSpanLikes>223</StyledSpanLikes>
                        </StyledSpan>
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