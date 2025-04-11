/** Resources */
import { Icon, Navigate, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

interface Item {
  url: string;
  text: string;
}

interface DesktopProps {
  list: Item[];
}

const Desktop: React.FC<DesktopProps> = ({ list }) => (
  <header id='header' data-testid='header' className={styles.menu}>
    <div className={styles.menu__container}>
      <div className={styles.menu__logo}>
        <Navigate id='menu-icon' href='/'>
          <Icon name='Logo' width={86} height={80} />
        </Navigate>
      </div>
      <nav className={styles.navbar}>
        {list.map(({ url, text }) => (
          <Navigate key={url} id={`menu-item-${text}`} href={url} className={styles.menu__item}>
            <RichText id={`menu-item-${text}`} variant='p2' text={text} className={styles.menu__item_text} bold />
          </Navigate>
        ))}
      </nav>
    </div>
  </header>
);

Desktop.displayName = 'Desktop';

export default Desktop;
