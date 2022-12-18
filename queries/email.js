import { gql, useMutation } from '@apollo/client';


export const SEND_EMAIL = gql`
mutation SendEmail($email: String!, $body: String!) {
    sendEmail(
      input: {
        from: "order@molist.net",
        to: $email,
        subject: "Request received",
        body: $body,
        clientMutationId: "test"
      }
    ) {
      origin,
      sent,
      message
    }
  }
`;