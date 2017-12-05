export const Post = ({ items }) => (
  <ul className="postsList">{items.map(post => (
    <li key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </li>))}
  </ul>
);

Post.defaultProps = {
  items: []
};
Post.propTypes = {
  items: PropTypes.array
};
