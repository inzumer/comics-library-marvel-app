/** Resources */
import Head from 'next/head';
import { Error } from '@components'

const ErrorPage = () => (
  <>
    <Head>
      <title>Error</title>
      <meta name='description' content='Oops! Something went wrong. The page you’re looking for is missing or unavailable. Explore more Marvel comics and characters!' />
    </Head>
    <Error />
  </>
);

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
