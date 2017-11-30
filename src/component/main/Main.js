import { Aside } from '../aside/Aside';
import { Position } from './Positon';
import { Content } from '../content/Content';
import { List } from './List';
import { Post } from './Post';

import './main.scss';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      posts: []
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

  getPost = ({ id }) => {
    this.setState({
      loading: true,
      posts: []
    });
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
      .then(response => response.json())
      .then(posts => this.setState({ posts, loading: false }))
  };

  showUserInfo = (user) => {
    this.getPost(user);
  };

  render() {
    const { users, loading, posts } = this.state;
    return (
      <div className="wrapper">
        <Aside />
        <Content />
        <button onClick={this.getUsers}>
          Get users
        </button>
        <div className="userList">

          <List
            items={users}
            clickHandler={this.showUserInfo}
          />
          {loading && <span key="3">Loading...</span>}
          {posts.length > 1 &&
            <Post
              items={posts}
            />


          }

        </div>

        <Position />

      </div>
    );
  }
}

