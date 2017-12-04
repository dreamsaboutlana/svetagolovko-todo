import './user.scss';

export class User extends Component {
  constructor(props) {
    super(props);
    this.usersList = this.props.usersList;
  }

  render() {
    return (
      this.usersList.map((elem, index) => (
        <li key={index}>
          User: {elem.name} {elem.fname}; age:{elem.age}
        </li>
      ))
    );
  }
}
