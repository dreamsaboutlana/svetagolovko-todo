import { User } from '../user/User';

import './usersList.scss';

export class UsersList extends React.Component {
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
