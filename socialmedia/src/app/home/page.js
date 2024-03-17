'use client';
import React from "react";
import { apolloClient } from "../lib/apolloClient";
import { StyledHomeContainer, StyledCard, StyledCardContent, StyledAvatar, StyledCardHeader, StyledCardActions } from "./home.styled";
import IconButton  from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import { useQuery, gql } from "@apollo/client";
import moment from "moment";
import CircularProgress from '@mui/material/CircularProgress';

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

    if (loading) return <CircularProgress />;
    if (error) return `Error! ${error.message}`;

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
        </>
    )
};