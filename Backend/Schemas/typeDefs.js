const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    userName: String!
    email: String!
}

input CreateUserInput {
    userName: String!
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

module.exports = typeDefs;