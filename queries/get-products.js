import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query NewQuery {
    Shop: pageBy(uri: "shop") {
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
    Categories: productCategories {
      nodes {
        name
        id
      }
    }
    products (first:100) {
      nodes {
        ... on SimpleProduct {
          name
          slug
          id
          price
          image {
            sourceUrl
          }
          productCategories {
            nodes {
              name
              id
            }
          }
        }
        ... on GroupProduct {
          name
          slug
          id
          price
          image {
            sourceUrl
          }
          productCategories {
            nodes {
              name
              id
            }
          }
        }
        ... on ExternalProduct {
          name
          slug
          id
          price
          image {
            sourceUrl
          }
          productCategories {
            nodes {
              name
              id
            }
          }
          name
          slug
          id
          price
          image {
            sourceUrl
          }
          productCategories {
            nodes {
              name
              id
            }
          }
        }
        ... on VariableProduct {
          name
          slug
          id
          price
          image {
            sourceUrl
          }
          productCategories {
            nodes {
              name
              id
            }
          }
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
