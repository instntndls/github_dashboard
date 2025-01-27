// lib/queries.js
import { gql } from '@apollo/client';

export const GET_USER_REPOS = gql`
    query GetUserRepos($username: String!) {
        user(login: $username) {
            repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
                nodes {
                    name
                    description
                    url
                    updatedAt
                }
            }
        }
    }
`;

export const GET_USER_FOLLOWERS = gql`
    query GetUserFollowers($username: String!) {
        user(login: $username) {
            followers(first: 10) {
                nodes {
                    login
                }
            }
        }
    }
`;