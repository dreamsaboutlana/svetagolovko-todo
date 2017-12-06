import { Tabs } from 'component/TabsNav/Tabs';
import { Position } from 'component/Positon';

import './main.scss';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 3', content: 'Third text' }
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="wrapper">

        <Position />

        <Tabs tabs={tabs} />

      </div>
    );
  }
}

