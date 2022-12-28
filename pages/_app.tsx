import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import '../css/main.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyles />
    <Head>
      <title>{'김현기❤️이향정'}</title>
        <link rel='icon' href='/favicon.ico' />
    </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp
