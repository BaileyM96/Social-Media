import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation createPost($content: String!, $authorId: ID!) {
        createPost(content: $content, authorId: $authorId) {
            id
        }
    }
`;

export const LIKE_POST = gql`
    mutation likedPost($postId: ID!) {
        likedPost(postId: $postId) {
            id
            likes
        }
    }
`;

export const UNLIKE_POST = gql`
    mutation unlikePost($postId: ID!) {
        unlikePost(postId: $postId) {
            id
            likes
        }
    }
`;