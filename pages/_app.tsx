import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import '../css/main.css'


declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}


export default MyApp
