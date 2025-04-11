/** Resources */
import { Html, Head, Main, NextScript } from 'next/document'
 
const Document = () => (
    <Html lang='es'>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' href='/favicon.ico' />
      </Head>
      <body id='root'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );

export default Document;
