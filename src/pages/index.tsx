/** Resources */
import Head from 'next/head';
import { Home } from '@components';

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name='description' content='Practice project: a Marvel comics library with details about stories, characters, and creators. Explore the Marvel universe!' />
    </Head>
    <Home />
  </>
);

HomePage.displayName = 'HomePage';

export default HomePage;
