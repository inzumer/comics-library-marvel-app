/** Resources */
import { useState } from 'react';
import Head from 'next/head';
import { CardImage, Loading, Pagination, RichText } from '@components';
import { useFetch } from '@hooks';
import { API_PATH, SECTIONS } from '@constants';
import { ApiCategory } from '@types';

/** Styles */
import styles from './styles.module.css'

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading } = useFetch(`${API_PATH.RESOURCES}?${SECTIONS.SERIES}&offset=${currentPage * 20}`);

  let totalPages = 0;

  const results = data ? (data as ApiCategory).results : [];

  if (data) {
    const { total, limit } = data as ApiCategory;

    totalPages = Math.ceil(total / limit);
  }

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Head>
        <title>Series</title>
        <meta name='description' content='Explore the Marvel universe through its iconic series. From the legendary Avengers to the most feared villains, dive into their stories, powers, and fun facts—all in one place.' />
      </Head>
      <section id='series' className={styles.series}>
        {
          isLoading ? <Loading /> : <div className={styles.series__container}>
            <RichText id='title-series' variant='h1' text='series' className={styles.series__title} bold />
            <div className={styles.series__cards}>
              {results.map((item) => (
                <CardImage key={item.id} id={`card-${item.id}`} href={`/series/${item.id}`} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} title={item.title} colorText />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        }
      </section>
    </>
  );
};

Page.displayName = 'Page';

export default Page;
