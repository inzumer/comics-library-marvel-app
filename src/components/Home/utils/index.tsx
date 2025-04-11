/** Resources */
import { Section } from '@components';
import { useFetch } from '@hooks';
import { ApiCategory } from '@types';
import { API_PATH, OFFSET_NUMBER, SECTIONS } from "@constants";

/** Styles */
import styles from '../styles.module.css';

const Characters: React.FC = () => {
  const { data, isLoading } = useFetch<ApiCategory>(`${API_PATH.RESOURCES}?${SECTIONS.CHARACTERS}${OFFSET_NUMBER}`);

  return <Section title='characters' className={styles.bg__characters} ready={isLoading} data={data as ApiCategory} colorText />
};

Characters.displayName = 'Characters';

const Series: React.FC = () => {
  const { data, isLoading } = useFetch(`${API_PATH.RESOURCES}?${SECTIONS.SERIES}${OFFSET_NUMBER}`);

  return <Section title='series' className={styles.bg__series} ready={isLoading} data={data as ApiCategory} colorTitle />
};

Series.displayName = 'Series';


const Events: React.FC = () => {
  const { data, isLoading } = useFetch(`${API_PATH.RESOURCES}?${SECTIONS.EVENTS}${OFFSET_NUMBER}`);

  return <Section title='events' className={styles.bg__events} ready={isLoading} data={data as ApiCategory} colorText />
};

Events.displayName = 'Events';

const Comics: React.FC = () => {
  const { data, isLoading } = useFetch(`${API_PATH.RESOURCES}?${SECTIONS.COMICS}${OFFSET_NUMBER}`);

  return <Section title='comics' className={styles.bg__comics} ready={isLoading} data={data as ApiCategory} colorTitle />
};

Comics.displayName = 'Comics';

export { Characters, Series, Events, Comics };