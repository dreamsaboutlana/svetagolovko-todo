export class ShowMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init'
    };
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(e) {
    this.setState({
      status: `${this.state.status}+`
    });

    e.preventDefault();
  }

  render() {
    return (
      <code id="mount" className={this.props.color}>
        <span>
          The code from props is {this.props.code}<br />
          The code from state is {this.state.status}
        </span>
        <button onClick={this.updateStatus}>Update status</button>
      </code>
    );
  }
}
