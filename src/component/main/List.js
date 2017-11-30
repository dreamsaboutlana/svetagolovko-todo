export const List = ({ items, clickHandler }) => (
  <ul>{items.map(user =>
    <li
      key={user.id}
      onClick={() => clickHandler(user)}
    >
      {user.name}
    </li>)}
  </ul>
);
