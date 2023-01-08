import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
query NewQuery($slug: String) {
    Project:projectBy(slug: $slug) {
      id
    title
    slug
    content
    seo {
      metaDesc
      metaKeywords
      metaRobotsNofollow
      metaRobotsNoindex
      title
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
  menuItems {
      edges {
        node {
          label
          url
        }
      }
    }
  }
`;
