import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
query NewQuery {
  services {
    nodes {
      title
      content
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          id
        }
      }
    }
  }
  servicesImg:pageBy(uri: "services") {
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
      categories(where: {name: "services"}) {
        nodes {
          children {
            nodes {
              id
              name
              slug
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
`