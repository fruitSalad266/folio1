import '../styles/main.scss'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
      </Head>
    <Component {...pageProps} />
    </>
  )
}

export default App