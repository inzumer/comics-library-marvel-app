'use client';

/** Resources */
import { Icon, RichText } from '@components';
import { useMediaQuery  } from '@hooks';
import { Characters, Series, Events, Comics } from './utils';

/** Styles */
import styles from './styles.module.css';

const Home: React.FC  = () => {
  const isDesktop = useMediaQuery('desktop');

  return (
    <>
      <section id='presentation' className={styles.presentation}>
        <div className={styles.section}>
          <Icon name='Logo' width={isDesktop ? 500 : 300} height={isDesktop ? 500 : 300} />
          <RichText
            id='presentation-title'
            variant='h1'
            text='COMIC LIBRARY'
            className={styles.presentation__title}
            bold
          />
        </div>
      </section>
      <Characters />
      <Series /> 
      <Events /> 
      <Comics />
    </>
  );
};

Home.displayName = 'Home';

export default Home;
