import { User } from '../user/User';

import './usersList.scss';

export class UsersList extends Component {
  constructor(props) {
    super(props);
    this.usersList = this.props.users;
  }

  render() {
    return (
      <ul>
        <User usersList={this.usersList} />
      </ul>
    );
  }
}

UsersList.defaultProps = {
  users: []
};
UsersList.propsType = {
  users: PropTypes.array
};
