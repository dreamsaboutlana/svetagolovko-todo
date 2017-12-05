import { ShowMount } from './ShowMount';

import './mount.scss';

export class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: '',
      show: true
    };
  }

  addState = () => {
    const counter = this.state.counter + 1;
    let color = '';

    if (counter % 3 === 0 && counter % 5 === 0) {
      color = 'cyane';
    } else if (counter % 3 === 0) {
      color = 'green';
    } else if (counter % 5 === 0) {
      color = 'blue';
    } else {
      color = '';
    }
    this.setState({ counter, color });
  };

  render() {
    const { counter, show, color } = this.state;
    return (
      <div className="wrap_mount">
        <button onClick={this.addState}>
          Inc
        </button>
        <span className="count-text">{this.state.counter}</span>
        <br />
        <button onClick={() => this.setState({ show: !show })}>
          {show ? 'Destroy' : 'Create'}
        </button>

        {show && <ShowMount code={counter} color={color} />}
      </div>
    );
  }
}
