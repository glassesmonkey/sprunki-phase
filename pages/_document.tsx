import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang={locale}>
        <Head>
          <link rel='icon' href='/icons/favicon.ico' />
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-X89PQL59JW"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-X89PQL59JW');
              `,
            }}
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
