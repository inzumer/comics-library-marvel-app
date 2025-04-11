/** Resources */
import Link from 'next/link';

/** Styles */
import styles from './styles.module.css';

interface NavigateProps {
  id: string; 
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const Navigate: React.FC<NavigateProps> = ({ id, href, children, external = false, className }) => {
  return external ? (
      <a id={id} data-testid={id} href={href} className={`${styles.link} ${className}`} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    ) : (
      <Link id={id} data-testid={id} href={href} className={`${styles.link} ${className}`}>
        {children}
      </Link>
    );
};

Navigate.displayName = 'Navigate';

export default Navigate;
