import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { locale, page } = this.props.__NEXT_DATA__;
    const is404Page = page === '/_error' || page === '/404';

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
          {/* Google Adsense - 不在404页面显示 */}
          {!is404Page && (
            <script 
              async 
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8321646430920092"
              crossOrigin="anonymous"
            />
          )}
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
