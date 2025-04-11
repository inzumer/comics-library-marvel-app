/** Resources */
import { Button, Image, Loading, RichText } from '@components';
import { ApiCategoryInfo } from '@types';

/** Styles */
import styles from './styles.module.css'

type InfoPanelProps = {
  id: string;
  loading: boolean;
  imageSrc: string;
  title?: string;
  description?: string;
  characters?: ApiCategoryInfo[];
  series?: ApiCategoryInfo[];
  comics?: ApiCategoryInfo[];
  stories?: ApiCategoryInfo[];
  className?: string;
};

const InfoPanel: React.FC<InfoPanelProps> = ({
  id,
  loading,
  imageSrc,
  title,
  description,
  characters,
  series,
  comics,
  stories,
  className = '',
}) => (
  <section id={id} className={`${styles.infopanel} ${className}`}>
    {
      loading ? <Loading /> : <div className={styles.infopanel__container} >
        {
          !imageSrc?.includes('undefined') && <Image src={imageSrc} alt={`${id}-${title}`} width={300} height={300} className={styles.infopanel__img} />
        }
        {
          title && <RichText id={`${id}-title`} variant='h1' text={title} className={`${styles.infopanel__text} ${styles.infopanel__title}`} bold />
        }
        {
          description && <RichText id={`${id}-description`} variant='p2' text={description} className={styles.infopanel__text} />
        }
        {
          characters && characters.length > 0 && <>
            <RichText id={'characters-title'} variant='h6' text={'characters'} className={`${styles.infopanel__text} ${styles.infopanel__title}`} bold />
            <ul className={styles.infopanel__list}>
              {characters.map((item, index) => (
                <li key={`${item?.name}-${index}`} className={styles.infopanel__list_item} >
                  <RichText id={`series-${item}`} variant='p3' text={item?.name} className={styles.infopanel__text} />
                </li>
              ))}
            </ul>
          </>
        }
        {
          series && <>
            <RichText id={'series-title'} variant='h6' text={'series'} className={`${styles.infopanel__text} ${styles.infopanel__title}`} bold />
            <ul className={styles.infopanel__list}>
              {series.map((item, index) => (
                <li key={`${item?.name}-${index}`} className={styles.infopanel__list_item} >
                  <RichText id={`series-${item}`} variant='p3' text={item?.name} className={styles.infopanel__text} />
                </li>
              ))}
            </ul>
          </>
        }
        {
          comics && <>
            <RichText id={'comics-title'} variant='h6' text={'comics'} className={`${styles.infopanel__text} ${styles.infopanel__title}`} bold />
            <ul className={styles.infopanel__list}>
              {comics.map((item, index) => (
                <li key={`${item?.name}-${index}`} className={styles.infopanel__list_item} >
                  <RichText id={`comics-${item}`} variant='s3' text={item?.name} className={styles.infopanel__text} />
                </li>
              ))}
            </ul>
          </>
        }
        {
          stories && <>
            <RichText id={'stories-title'} variant='h6' text={'stories'} className={`${styles.infopanel__text} ${styles.infopanel__title}`} bold />
            <ul className={styles.infopanel__list}>
              {stories.map((item, index) => (
                <li key={`${item?.name}-${index}`} className={styles.infopanel__list_item} >
                  <RichText id={`stories-${item}`} variant='s3' text={item?.name} className={styles.infopanel__text} />
                </li>
              ))}
            </ul>
          </>
        }
        {
          imageSrc && title && <div className={styles.infopanel__container_button}>
            <Button id='infopanel-button' variant='transparent' href={'/'} className={styles.infopanel__button} redirect>
              <RichText id='infopanel-button-text' variant='p2' text='go to  home' className={`${styles.infopanel__text} ${styles.infopanel__title} ${styles.infopanel__button_text}`} bold />
            </Button >
          </div>
        }
      </div>
    }
  </section>
);

export default InfoPanel;
