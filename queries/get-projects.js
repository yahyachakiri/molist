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
    projects:posts(where: {categoryName: "projects"}) {
      nodes {
        title
        content
        categories {
          nodes {
            id
            name
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
