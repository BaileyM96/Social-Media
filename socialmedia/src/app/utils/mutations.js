import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation createPost($content: String!, $authorId: ID!) {
        createPost(content: $content, authorId: $authorId) {
            id
        }
    }
`;

export const LIKE_POST = gql`
    mutation likedPost($postId: ID!, $userId: ID!) {
        likedPost(postId: $postId, userId: $userId) {
            id
            likes
            likedBy {
                id
            }
        }
    }
`;

export const UNLIKE_POST = gql`
    mutation unlikePost($postId: ID!, $userId: ID!) {
        unlikePost(postId: $postId, userId: $userId) {
            id
            likes
            likedBy {
                id
            }
        }
    }
`;