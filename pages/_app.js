import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
