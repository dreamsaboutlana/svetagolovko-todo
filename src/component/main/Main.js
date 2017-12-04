import { Aside } from '../aside/Aside';
import { Position } from './Positon';
import { Content } from '../content/Content';
import { List } from './List';
import { Post } from './Post';
import { Tabs } from "../TabsNav/Tabs";

import './main.scss';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 3', content: 'Third text' }
];


const Article = ({ title, children }) => (
  <article>
    <h1>{title}</h1>
    {children}
  </article> );

export class Main extends Component {
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
        <div className="listWrap">

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

        <Tabs tabs={tabs} />

        <Article title="New article">
          <p>Hello!!</p>
          <p>Ola!!</p>
          <p>Hi!!</p>
        </Article>
      </div>
    );
  }
}

