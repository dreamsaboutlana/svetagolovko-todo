import './button.scss';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: false
    };
  }

  changeClass = () => {
    this.setState({ className: !this.state.className });
  };

  render() {
    const { title } = this.props;
    const clName = this.state.className ? 'active' : '';
    return (
      <button
        className={clName}
        onClick={this.changeClass}
      >
        {title}
      </button>
    );
  }
}

Button.defaultProps = {
  title: ''
};
Button.propsType = {
  title: PropTypes.string
};
