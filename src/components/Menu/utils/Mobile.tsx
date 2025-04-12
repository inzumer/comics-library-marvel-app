'use client';

/** Resources */
import { useState, useEffect } from 'react';
import { Button, Icon, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

interface Item {
  url: string;
  text: string;
}

interface MobileProps {
  list: Item[];
}

const Mobile: React.FC<MobileProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const actionButtons = (url: string) => {
    window.location.href = url;

    if (isOpen) {
      toggleMenu();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header id='header' data-testid='header' className={`${styles.menu}`}>
      <div className={styles.menu__mobile}>
        <Button id='menu-icon'  variant='transparent' event={() => actionButtons('/')} className={`${styles.menu__icon} ${styles.menu__buttons}`}>
          <Icon name='Logo' height={60} width={60} />
        </Button>

        <div className={styles.menu__container_buttons}>
          <Button id='menu-button-mobile' variant='transparent' event={toggleMenu} className={`${styles.menu__mobile_button} ${styles.menu__buttons}`}>
            <Icon name={isOpen ? 'MenuClose' : 'MenuBurger'} height={38} width={38} />
          </Button>
        </div>
      </div>

      <div className={isOpen ? styles.menu__content_open : styles.menu__content_close}>
        {list.map(({ url, text }) => (
          <Button key={url} id={`menu-item-${text}`} className={styles.menu__item} variant='transparent' event={() => actionButtons(url)}>
            <RichText id={`menu-item-${text}`} variant='p2' text={text} bold className={styles.menu__item_text}/>
          </Button>
        ))}
      </div>
    </header>
  );
};

Mobile.displayName = 'Mobile';

export default Mobile;
