'use client';

/** Resources */
import Flicking from "@egjs/react-flicking";
import { CardImage, Loading, RichText } from '@components';
import { ApiCategory } from '@types';

/** Styles */
import styles from './styles.module.css';
import "@egjs/react-flicking/dist/flicking.css";

interface SectionProps {
  data?: ApiCategory;
  title: string;
  ready: boolean;
  colorText?: boolean;
  colorTitle?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ data, title, ready, colorTitle, colorText = false, className = '' }) => (
  <section id={title} className={className}>
    <div className={styles.section}>
      <RichText id={`presentation-${title}`} variant='p1' text={title} className={`${styles.section__title} ${colorTitle ? styles.section__title_white : ''}`} bold />
      <div className={styles.section__cards}>
        {ready ? <Loading /> :
          <Flicking bounce="0" bound={true} nested={true} renderOnlyVisible={true} style={{ padding: '16px' }} >
            {data?.results.map((item) => (
              <div key={item.id} className='flicking-panel' style={{ margin: '16px' }}>
                <CardImage
                  key={item.id}
                  id={`card-${item.id}`}
                  href={`/${title}/${item.id}`}
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  title={item.title || item.name}
                  colorText={colorText}
                />
              </div>
            ))}
          </Flicking>
        }
      </div>
    </div>
  </section>
);

export default Section;
