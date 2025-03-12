import '../styles/main.scss'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/next'

function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
      </Head>
    <Component {...pageProps} />
    <Analytics />
    </>
  )
}

export default App