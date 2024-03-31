'use client';
import { gql } from "@apollo/client";

export const GET_USER = gql`
    query GetUser($email: String!) {
        user(email: $email) {
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
            content
            createdAt
        }
    }
`;