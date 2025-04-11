/** Resources */
import { Icon, Navigate, RichText } from '@components';
import { FOOTER } from '@constants';
import { Icons } from '@assets';

/** Styles */
import styles from './styles.module.css';

const Footer: React.FC = () => (
  <footer id='footer' data-testid='footer' className={styles.footer}>
    <div className={styles.footer__main}>
      <Navigate id='icon-footer' href='/' className={styles.footer__logo}>
        <Icon name='Logo' height={60} width={60} />
      </Navigate>

      <div className={styles.footer__container}>
        <div className={styles.footer__container_info}>
          <RichText id='footer-about-title' variant='p1' text='About' className={styles.footer__text} />
          <RichText id='footer-about-description' variant='p3' text='Welcome to our Marvel Comics Library, a practice project designed to explore and catalog the vast universe of Marvel stories, characters, and creators. Here, you can discover iconic comics, learn details about your favorite superheroes and villains, and dive into the legacy of one of the most legendary franchises in the world. We use modern technologies to provide an interactive and dynamic experience, allowing you to easily access detailed and up-to-date information. Explore, discover, and immerse yourself in the amazing world of Marvel!' className={styles.footer__text} />
        </div>

        <div className={styles.footer__container_social}>
          <RichText id='footer-social-title' variant='p1' text='Social Network' className={styles.footer__text} />
          <div className={styles.footer__container_social_icons}>
            {FOOTER.map((item, index) => (
              <Navigate id={`footer-social-link-${index}`} href={item.url} key={index} external>
                <Icon name={item.name as keyof typeof Icons} height={30} width={30} />
              </Navigate>
            ))}

          </div>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        <RichText id='footer-disclaimer' variant='p3' text={`© ${new Date().getFullYear()} data provided by marvel. Developed by @inzumer.`} className={styles.footer__text} />
      </div>
    </div>
  </footer>
);

Footer.displayName = 'Footer';

export default Footer;
