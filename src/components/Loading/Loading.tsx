/** Styles */
import styles from './styles.module.css';

const Loading: React.FC = () => (
  <div className={styles.loading__container}>
    <div className={`${styles.circle} ${styles.circle__one}`}></div>
    <div className={`${styles.circle} ${styles.circle__two}`}></div>
  </div>
);

Loading.displayName = 'Loading';

export default Loading;
