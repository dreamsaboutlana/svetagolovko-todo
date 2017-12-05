export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      date: ''
    };
  }

  myTimer = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
      date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
    });
  };

  componentDidMount() {
    this.timer = setInterval(this.myTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div>{this.state.date}</div>
        <time> {this.state.time}</time>
      </div>
    );
  }
}
