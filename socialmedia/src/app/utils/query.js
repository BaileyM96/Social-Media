'use client';
import { gql } from "@apollo/client";

export const GET_USER = gql`
    query GetUser($username: String!) {
        user(username: $username) {
            id
            username
            createdAt
        }
    }
`;

export const GET_USERS = gql`
    query GetUsers {
        users {
            id
            username
        }
    }
`;

export const GET_FRIENDS_POSTS = gql`
    query GetFriendsPosts($userId: ID!) {
        friendsPosts(userId: $userId) {
            author {
                id
                username
            }
            id
            content
            createdAt
            likes
        }
    }
`;

export const GET_USER_POSTS = gql`
    query GetUserPosts($userId: ID!) {
        userPosts(userId: $userId) {
            author {
                username
            }
            id
            content
            createdAt
            likedBy {
                id
            }   
        }
    }
`;