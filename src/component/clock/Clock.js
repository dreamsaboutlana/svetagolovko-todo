export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      date: ''
    };
  }

  myTimer = () => {
    const now = new Date();
    this.setState({
      time: now.toLocaleTimeString(),
      date: `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`
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
