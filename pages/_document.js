import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import theme from '../theme';

class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <meta charSet="utf-8"/>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.dark}/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link rel="apple-touch-icon" sizes="57x57" href="/static/fav/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/static/fav/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/static/fav/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/fav/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/static/fav/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/static/fav/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/static/fav/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/static/fav/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/fav/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/static/fav/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/fav/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/static/fav/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/fav/favicon-16x16.png"/>
        <link rel="manifest" href="/static/fav/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/static/fav/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
