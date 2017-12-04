import './button.scss';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    };
  }

  changeClass = () => {
    if (this.state.className === '') {
      this.setState({ className: 'active' });
    } else {
      this.setState({ className: '' });
    }
  };

  render() {
    const { title } = this.props;
    return (
      <button
        className={this.state.className}
        onClick={this.changeClass}>
        {title}
      </button>
    );
  }
};
