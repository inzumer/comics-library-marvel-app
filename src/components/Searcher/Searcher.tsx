'use client';

/** Resources */
import { useState, ChangeEvent } from 'react';
import { Navigate, RichText } from '@components';
import { SECTIONS, API_PATH } from '@constants';
import { useFetch } from '@hooks';
import { ApiCategory } from '@types';

/** Styles */
import styles from './styles.module.css';

const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data } = useFetch(`${API_PATH.SEARCH}?${SECTIONS.CHARACTERS}&name=${searchQuery}`);

  const suggestions = (data as ApiCategory)?.results?.slice(0, 5) ?? [];

  const showSuggestions = searchQuery.length > 0 && suggestions.length > 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form id='searcher-form' className={styles.searcher}>
      <input
        id='searcher-input'
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        className={styles.searcher__input}
        placeholder='search character'
      />
      {showSuggestions && (
        <ul className={styles.searcher__suggestions_list}>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} className={styles.searcher__suggestions_item}>
              <Navigate id={`link-${suggestion.id}`} href={`/characters/${suggestion.id}`} className={styles.searcher__suggestions_link}>
                <RichText id={`text-link-${suggestion.id}`} variant='s3' text={suggestion.name} className={styles.searcher__suggestions_text} />
              </Navigate>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Searcher;
