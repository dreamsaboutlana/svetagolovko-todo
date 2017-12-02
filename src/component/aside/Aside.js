import { Button } from '../button/Button';

import './aside.scss';

export class Aside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="aside">
        <Button
          title={'I\'m smart button'}
        />
      </aside>
    );
  }
}
