import { gql } from "@apollo/client";

export const GET_TEAM = gql`
query NewQuery {
    teams {
      nodes {
        content
        team {
          fullName
          title
        }
        featuredImage {
            node {
              sourceUrl
            }
      }
    }
  }
}
`