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
          name
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
      categories(where: {slug: "services"}) {
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
            url
          }
        }
    }
}
`