import { gql } from "@apollo/client";

export const GET_MENU = gql`
query NewQuery {
  menuItems {
    edges {
      node {
        label
        path
      }
    }
  }
}
`