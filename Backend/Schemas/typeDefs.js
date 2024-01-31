const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    username: String!
    email: String!
}

input CreateUserInput {
    username: String!
    email: String!
    password: String!
}

type Query {
    user(id: ID!): User
}

type Mutation {
    createUser(input: CreateUserInput!): User!
}
`