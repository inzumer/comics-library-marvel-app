interface MenuCloseProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const MenuClose: React.FC<MenuCloseProps> = ({ width = 52, height = 52, className, accessibility = 'Close Menu' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <circle
    cx={18}
    cy={18}
    r={17}
    stroke="#2C2C31"
    strokeWidth={1.35813}
    strokeLinecap="round"
  />
  <line
    x1={12}
    y1={12}
    x2={24}
    y2={24}
    stroke="#2C2C31"
    strokeWidth={1.35813}
    strokeLinecap="round"
  />
  <line
    x1={12}
    y1={24}
    x2={24}
    y2={12}
    stroke="#2C2C31"
    strokeWidth={1.35813}
    strokeLinecap="round"
  />
  </svg>
);

export default MenuClose;