import { Navigation } from '../navigation';

import './header.scss';

export const Header = () => (
  <header className="header">
    <Navigation list={['Home', 'Products', 'Contacts']} />
  </header>
);
