'use client';

/** Resources */
import { useState } from 'react';
import { CardImage, Loading, Pagination, RichText } from '@components';
import { useFetch } from '@hooks';
import { API_PATH, SECTIONS } from '@constants';
import { ApiCategory } from '@types';

/** Styles */
import styles from './styles.module.css';

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
  );
};

export default Page;
