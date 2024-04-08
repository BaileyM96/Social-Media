'use client';
import { gql } from "@apollo/client";

export const GET_USER = gql`
    query GetUser($email: String!) {
        user(email: $email) {
            id
            username
            friends {
                id
                username
            }
            posts {
                id
                content
                author {
                    id
                    username
                }
                createdAt
                likes
            } 
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
            content
            createdAt
        }
    }
`;

export const GET_USER_POSTS = gql`
    query GetUserPosts($userId: ID!) {
        userPosts(userId: $userId) {
            author {
                username
            }
            content
            createdAt
        }
    }
`;