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

  addBackgroundColor(counter) {
    const newcounter = counter + 1;
    if (newcounter % 3 === 0 && newcounter % 5 === 0) {
      this.setState({ color: 'cyane' });
    } else if (newcounter % 3 === 0) {
      this.setState({ color: 'green' });
    } else if (newcounter % 5 === 0) {
      this.setState({ color: 'blue' });
    } else {
      this.setState({ color: '' });
    }
  }

  render() {
    const { counter, show, color } = this.state;
    return (
      <div className="wrap_mount">
        <button onClick={() => {
          this.setState({ counter: counter + 1 });
          this.addBackgroundColor(this.state.counter);
        }}
        >
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
