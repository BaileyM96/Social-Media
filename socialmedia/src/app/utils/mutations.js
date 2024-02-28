import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($input: createUserInput!) {
    createUser(input: $input) {
        username
        email
        password
    }
}
`;