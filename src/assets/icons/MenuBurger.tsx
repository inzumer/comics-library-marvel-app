interface MenuBurgerProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ width = 21, height = 14, className, accessibility= 'Burger Menu' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <path
      d="M5 8H13.75M5 12H19M10.25 16L19 16"
      stroke="#2C2C31"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MenuBurger;