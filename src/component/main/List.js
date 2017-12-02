export const List = ({ items, clickHandler }) => (
  <ul className="usersList">{items.map(user =>
    <li
      key={user.id}
      onClick={() => clickHandler(user)}
    >
      {user.name}
    </li>)}
  </ul>
);
