/** Resources */
import { Navigate } from '@components';
import { ButtonVariant } from '@types';

/** Styles */
import styles from './styles.module.css';

interface ButtonProps {
  id: string;
  redirect?: boolean;
  external?: boolean;
  border?: boolean;
  disabled?: boolean;
  variant: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  event?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ id, variant, disabled = false, redirect = false, external = false, href = '', border = false, event, children, className = '' }) => {
  const variantStyle = `button__${variant}`;

  return redirect ? (
    <Navigate id={id} href={href} className={`${styles.button} ${styles[variantStyle]} ${border && styles.button__border} ${className}`} external={external}>
      {children}
    </Navigate>
  ) : (
    <button id={id} data-testid={id} type='button' className={`${styles.button} ${styles[variantStyle]} ${border && styles.button__border} ${className}`} disabled={disabled} onClick={event}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
