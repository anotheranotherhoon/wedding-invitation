import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import Script from "next/script";
import {ServerStyleSheet} from "styled-components"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage
    const sheet = new ServerStyleSheet()
    ctx.renderPage = () => originalRenderPage({
      enhanceApp : (App) => App,
      enhanceComponent: (Component) => Component,
    })
    const initialProps = await Document.getInitialProps(ctx)
    return{
      ...initialProps,
      styles: [
        <>
        {initialProps.styles}
        {sheet.getStyleElement()}
        </>
      ]
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
