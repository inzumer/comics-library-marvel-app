/** Resources */
import { options } from './utils';

/** Styles */
import styles from './styles.module.css';

interface RichTextProps {
  id: string;
  text: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 's1' | 's2' | 's3' | 's4' | 'p1' | 'p2' | 'p3' | 'p4';
  bold?: boolean;
  className?: string;
}

const RichText: React.FC<RichTextProps> = ({ id, variant, bold = false, text, className }) => {
  const { tag: Element, class: variantStyle } = options[variant] as { tag: keyof JSX.IntrinsicElements, class: string };

  const weight = bold ? styles.font_bold : styles.font_light;

  return (
    <Element id={id} data-testid={id} className={`${styles[variantStyle]} ${weight} ${className}`}>
      {text}
    </Element>
  );
};

RichText.displayName = 'RichText';

export default RichText;
