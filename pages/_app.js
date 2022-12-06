import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
        </Layout>
        </Provider>
    </ApolloProvider>
  )
}

export default MyApp
