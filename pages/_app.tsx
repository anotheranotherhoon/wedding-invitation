import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import '../css/main.css'


declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps<{dehydratedState: DehydratedState}>) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
      <GlobalStyles />
      <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}


export default MyApp
