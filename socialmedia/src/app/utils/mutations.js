import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation createPost($content: String!, $authorId: ID!) {
        createPost(content: $content, authorId: $authorId) {
            id
        }
    }
`;