/** Styles */
import styles from './styles.module.css';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = '' }) => (
  <div className={`${styles.separator} ${className}`}></div>
);

Separator.displayName = 'Separator';

export default Separator;
