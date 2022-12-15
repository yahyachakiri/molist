import { gql, useMutation } from '@apollo/client';


export const SEND_EMAIL = gql`
mutation SEND_EMAIL {
    sendEmail(
      input: {
        to: "yahyachakiridev@gmail.com",
        from: "order@molist.net",
        subject: "test email2",
        body: "test email2",
        clientMutationId: "test"
      }
    ) {
      origin,
      sent,
      message
    }
  }
`;