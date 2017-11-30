export const Post = ({ items }) => (
  <ul>{items.map(post =>
    <li key={post.id}>
      {post.title}
    </li>)}
  </ul>
);
