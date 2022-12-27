import { gql } from "@apollo/client";

export const GET_SOCIALMEDIA = gql`
query NewQuery {
    socialMedias:socialMediaBy(uri: "social-media") {
      socialMedia {
        facebook
        intagram
        linkedin
      }
    }
  }
`