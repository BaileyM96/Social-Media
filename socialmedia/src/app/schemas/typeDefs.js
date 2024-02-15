const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    email: String!
    username: String!
    friends: [User!]!
    sentFriendRequest: [FriendRequest!]!
    receivedFriendRequest: [FriendRequest!]!
}

type FriendRequest {
    id: ID!
    from: User!
    to: User!
    status: FriendRequestStatus!
}

enum FriendRequestStatus {
    PENDING
    ACCEPTED
    DENIED
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
    sendFriendRequest(fromUserId: ID!, toUserId: ID!) FriendRequest!
    acceptFriendRequest(requestId: ID!) FriendRequest!
    rejectFriendRequest(requestId: ID!) FriendRequest!
}
`;

module.exports = typeDefs;