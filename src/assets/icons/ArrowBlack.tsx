interface ArrowBlackProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const ArrowBlack: React.FC<ArrowBlackProps> = ({ width = 41, height = 41, className, accessibility = 'Arrow Black' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 330 330"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <path
      id="XMLID_222_"
      fill="#2C2C31"
      d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
    />
  </svg>
);

export default ArrowBlack;