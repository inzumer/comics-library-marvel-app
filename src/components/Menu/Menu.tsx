'use client';

/** Resources */
import { useMediaQuery } from '@hooks';
import { HEADER } from '@constants';
import { Desktop, Mobile } from './utils';

const Menu: React.FC = () => {
  const isDesktop = useMediaQuery('desktop');

  return isDesktop ? <Desktop list={HEADER} /> : <Mobile list={HEADER} />
};

Menu.displayName = 'Menu';

export default Menu;
