const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    email: String!
    username: String!
}

input CreateUserInput {
    username: String!
    email: String!
    password: String!
}

type Query {
    user(id: ID!): User
}

type Auth {
    token: String!
    user: User
}

type Mutation {
    createUser(input: CreateUserInput!): User!
    login(email: String!, password: String!): Auth!
}
`;

module.exports = typeDefs;