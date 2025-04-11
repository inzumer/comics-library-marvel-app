/** Resources */
import { AppProps } from 'next/app';
import { Footer, Menu } from '@components';

/** Styles */
import './styles.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>      
    <Menu />
    <main id='main' data-testid='main'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
);

export default App;
