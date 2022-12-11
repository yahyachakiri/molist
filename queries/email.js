import { gql, useMutation } from '@apollo/client';


export const SEND_EMAIL = gql`
mutation SEND_EMAIL {
    sendEmail(
    input: {
    to: "yretros@gmail.com"
    from: "yahyachakiridev@gmail.com"
    subject: "test email"
    body: "test email"
    clientMutationId: "test"
    }
    ) {
    origin
    sent
    message
    }
}
`;