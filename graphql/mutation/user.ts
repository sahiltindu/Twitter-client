import { graphql } from "@/gql";

export const followUserMutation = graphql(`#graphql
mutation FollowUser ($to: ID!){
  followUser(to: $to)
}
`);
export const unfollowUserMutation = graphql(`#graphql
mutation unfollowUser ($to: ID!){
  unfollowUser(to: $to)
}
`);