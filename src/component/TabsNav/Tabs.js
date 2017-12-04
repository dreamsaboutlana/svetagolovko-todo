import { TabNav } from './TabNav';
import { TabContent } from './TabContent';

import './tabs.scss';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  componentDidMount() {
    this.clickTab(0);
  }

  clickTab = (id) => {
    this.setState({
      content: this.props.tabs[id].content,
    });
  };

  render() {
    return (
      <section className="tab">
        <TabNav
          list={
            this.props.tabs.map(({ id, title }) => ({ id, title }))
          }
          select={this.clickTab}
        />
        <TabContent content={this.state.content} />
      </section>
    );
  }
}

Tabs.defaultProps = {
  tabs: []
};
Tabs.propsType = {
  tabs: PropTypes.array
};
