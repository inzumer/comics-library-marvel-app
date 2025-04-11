/** Resources */
import * as Icons from '../../assets/icons';

interface IconProps {
  name: keyof typeof Icons;
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const Icon: React.FC<IconProps> = ({ name, width, height, className = '', accessibility }) => {
  const Icon = Icons[name];

  return <Icon width={width} height={height} className={className} accessibility={accessibility} />;
};

Icon.displayName = 'Icon';

export default Icon;
