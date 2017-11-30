export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  clickHandler = () => {
    // this.setState((prevState) => ({
    //   counter: prevState.counter + 1
    // }))
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.clickHandler}>Click me!</button>
        <span>{this.state.counter}</span>
      </div>
    );
  }
}
