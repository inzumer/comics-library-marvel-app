interface ChevronProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const Chevron: React.FC<ChevronProps> = ({ width = 24, height = 24, className, accessibility = 'Chevron' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 -960 960 960"
    fill="#2C2C31"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />  
  </svg>
);

export default Chevron;