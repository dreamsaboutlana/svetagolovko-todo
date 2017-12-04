import { Button } from '../button/Button';
import { StatusMessage } from "../statusMessage/StatusMessage";

import './aside.scss';

export const Aside = () => (
  <aside className="aside">
    <Button
      title={'I\'m smart button'}
    />
    <StatusMessage />

  </aside>
);
