import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import '../css/main.css'
import Head from 'next/head'


declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyles />
    <Head>

    </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp
