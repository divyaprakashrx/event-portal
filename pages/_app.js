import { Provider } from 'next-auth/client'
import '../styles.css'

const App = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
