import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
query NewQuery {
    ProjectsCategory: categories(where: {name: "projects"}) {
      nodes {
        children {
          nodes {
            id
            name
          }
        }
      }
    }
    projects {
      nodes {
        title
        slug
        content
        categories {
          nodes {
            id
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
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
    Content:pageBy(uri: "projects") {
      content
    }
  }
`;
