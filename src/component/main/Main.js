import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';
import { List } from './List';
import { Position } from './Positon';

import './main.scss';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsers = () => {
    this.setState({
      loading: true,
      users: []
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  };

  showUserInfo = (user) => {
    console.log(`${user.email}: ${user.phone}`);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="wrapper">
        <Aside />
        <Content />
        <div>
          <button onClick={this.getUsers}>
            Get users
          </button>

          <List
            items={users}
            clickHandler={this.showUserInfo}
          />
          {loading && <span key="3">Loading...</span>}
        </div>

        <Position />

      </div>
    );
  }
}

