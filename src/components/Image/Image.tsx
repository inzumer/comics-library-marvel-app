/** Resources */
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true,
}) => {
  const secureSrc = src.startsWith('http://') ? src.replace('http://', 'https://') : src;

  return (
    <NextImage
      src={secureSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};

Image.displayName = 'Image';

export default Image;
