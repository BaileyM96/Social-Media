const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
    id: ID!
    email: String!
    username: String!
    friends: [User!]!
    sentFriendRequest: [FriendRequest!]!
    receivedFriendRequest: [FriendRequest!]!
    posts: [Post!]!
    createdAt: String!
}

type Post {
    id: ID!
    content: String!
    author: User
    createdAt: String!
    likes: Int
    likedBy: [User!]!
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
    user(username: String!): User
    friendsPosts(userId: ID!): [Post!]!
    userPosts(userId: ID!): [Post!]!
}

type Auth {
    token: String!
    user: User
}

type Mutation {
    createUser(input: CreateUserInput!): User!
    login(email: String!, password: String!): Auth!
    sendFriendRequest(fromUserName: String!, toUserName: String!): FriendRequest!
    acceptFriendRequest(requestId: ID!): FriendRequest!
    rejectFriendRequest(requestId: ID!): FriendRequest!
    createPost(content: String!, authorId: ID!): Post!
    likedPost(postId: ID!, userId: ID!): Post
    unlikePost(postId: ID!, userId: ID!): Post
}
`;

module.exports = typeDefs;