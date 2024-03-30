'use client';
import React from "react";
import { apolloClient } from "../lib/apolloClient";
import { StyledHomeContainer, StyledCard, StyledCardContent, StyledAvatar, StyledCardHeader, StyledCardActions } from "./home.styled";
import IconButton  from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import { useQuery, gql } from "@apollo/client";
import moment from "moment";
import CircularProgress from '@mui/material/CircularProgress';
import SpeedDial from "../Components/SpeedDial/page";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const GET_FRIENDS_POSTS = gql`
    query GetFriendsPosts($userId: ID!) {
        friendsPosts(userId: $userId) {
            author {
                id
                username
            }
            content
            createdAt
        }
    }
`;


export default function Home() {
    const { loading, error, data } = useQuery(GET_FRIENDS_POSTS, {
        client: apolloClient,
        variables: {
            userId: '65d28475b8449265f68f9b4b'
        }
    });

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
    
    console.log(data)
    return (
        <>
            <StyledHomeContainer>
                {data.friendsPosts.map((posts) => (
                    <StyledCard key={posts.id}>
                        <StyledCardHeader 
                        title={posts.author.username} 
                        subheader={moment(Number(posts.createdAt)).format("M-D-YY, h:mma")}
                        avatar={<StyledAvatar>{posts.author.username[0]}</StyledAvatar>}
                        >
                        </StyledCardHeader>
                        <StyledCardContent>
                            {posts.content}
                        </StyledCardContent>
                        <StyledCardActions>
                            <IconButton aria-label="add to favorites">
                                <Favorite />
                            </IconButton>
                        </StyledCardActions>
                    </StyledCard>
                ))}
            </StyledHomeContainer>

            <SpeedDial />            
        </>
    )
};