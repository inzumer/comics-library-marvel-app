'use client';

/** Resources */
import { Icon, RichText, Searcher } from '@components';
import { useMediaQuery } from '@hooks';
import { Characters, Series, Events, Comics } from './utils';

/** Styles */
import styles from './styles.module.css';

const Home: React.FC = () => {
  const isDesktop = useMediaQuery('desktop');

  return (
    <>
      <section id='presentation' className={styles.presentation}>
        <div className={styles.section}>
          <Icon name='Logo' width={isDesktop ? 500 : 300} height={isDesktop ? 500 : 300} />
          <RichText
            id='presentation-title'
            variant='h1'
            text='comic library'
            className={styles.presentation__title}
            bold
          />
        </div>
      </section>
      <section className={styles.search}>
        <div className={styles.search__container}>
          <RichText id='search-title' variant='p1' text='search' className={styles.search__title} bold />
          <RichText id='search-title' variant='s2' text=' Search for your favorite Marvel characters and discover detailed profiles, stories, and more. Just start typing a name and get instant suggestions!' className={styles.search__text} />
          <Searcher />
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
