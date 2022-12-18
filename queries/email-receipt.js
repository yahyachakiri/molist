import { gql, useMutation } from '@apollo/client';


export const SEND_EMAIL_RECEIPT = gql`
mutation SendEmail($body: String!) {
    sendEmail(
      input: {
        from: "order@molist.net",
        to: "order@molist.net",
        subject: "New request",
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