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
        <meta name="description" content={'김현기❤️이향정'} />
        <meta name="keywords" content={'김현기❤️이향정'} />
        <meta property="og:title" content={`${'김현기❤️이향정'}`} />
        <meta property="og:image" content={'http://m.bomtvcard.com/data/1662021003952/crop_PP_221027_212528_674815002JXhTx.jpg'} />
        <meta property="og:description" content={'김현기❤️이향정'} />
        <link rel='icon' href='/favicon.ico' />
    </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp
