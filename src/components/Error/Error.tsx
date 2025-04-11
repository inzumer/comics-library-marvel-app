/** Resources */
import { Button, Image, RichText } from '@components';
import { useMediaQuery } from '@hooks';

/** Image */
import { ImageError } from '@assets';

/** Styles */
import styles from './styles.module.css'

const Error: React.FC = () => {
  const isDesktop = useMediaQuery('desktop');

  return (
    <section id='error' className={styles.error}>
      <div className={styles.error__container}>
        <Image src={ImageError.src} alt='Error illustration' width={isDesktop ? 400 : 280} height={isDesktop ? 400 : 280} className={styles.error_img} />
        <RichText id='error-title' text='something went wrong' variant='h1' className={styles.error__title} bold />
        <Button id='error-button' href='/' variant='transparent' className={styles.error__button} external>
          <RichText id='error-button-text' text='go to home' variant='p2' className={styles.error__button_text} bold />
        </Button>
      </div>
    </section>
  );
};

Error.displayName = 'Error';

export default Error;
