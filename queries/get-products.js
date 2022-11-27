import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query NewQuery {
    Shop: pageBy(uri: "shop") {
      content
    }
    Categories: productCategories {
      nodes {
        name
      }
    }
    products {
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
            }
          }
        }
      }
    }
    menuItems {
      edges {
        node {
          label
          path
        }
      }
    }
  }
`;
