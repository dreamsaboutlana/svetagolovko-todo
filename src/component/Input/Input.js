export class RegistrationForm extends Component {
  constructor(props) {
    super(props);
  }

  submit = () => {
    console.log('submit', this.testInput.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="test"
          ref={(input) => this.testInput = input} />
        <button onClick={this.submit}>Submit</button>
      </div>
    )

  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: ''
  //   },
  //     this.handleEmailChange = this.handleEmailChange.bind(this),
  //     this.handleSubmit = this.handleSubmit.bind(this)
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('The form is submitted.Email value is', this.state.email);
  // }
  //
  // handleEmailChange(e) {
  //   console.log(e.target.value);
  //   this.setState({ email: e.target.value });
  //
  // }
  //
  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <input
  //         type="text"
  //         placeholder="E-mail"
  //         value={this.state.email}
  //         onChange={this.handleEmailChange}
  //       />
  //       <button>
  //         Save
  //       </button>
  //     </form>
  //   );
  // }
}
