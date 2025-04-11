/** Resources */
import { Icon, Navigate, RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

interface CardImageProps {
  id: string;
  href: string;
  src: string;
  title: string;
  className?: string;
  colorText?: boolean; 
}

const CardImage: React.FC<CardImageProps> = ({ id, src, href, title, className = '', colorText = false }) => (
  <div id={id} className={`${styles.card__image} ${className}`}>
    <div className={styles.card__image_container} style={{ backgroundImage: `url(${src})` }}></div>
    <Navigate id={`${id}-navigate`} href={href} external className={styles.card__image_info}>
      <RichText id={`${id}-title`} variant="s4" text={title} className={colorText ? styles.card__text_white : styles.card__text_black } bold />
      <Icon name={colorText ?  'ArrowRight' : 'ArrowBlack'} width={16} height={16} />
    </Navigate>
  </div>
);

CardImage.displayName = 'CardImage';

export default CardImage;
