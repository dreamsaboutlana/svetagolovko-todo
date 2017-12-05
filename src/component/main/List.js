export const List = ({ items, clickHandler }) => (
  <ul className="usersList">{items.map(user => (
    <li
      key={user.id}
      onClick={() => clickHandler(user)}
    >
      {user.name}
    </li>))}
  </ul>
);
List.defaultProps = {
  items: [],
  clickHandler: _ => _
};
List.propTypes = {
  items: PropTypes.array,
  clickHandler: PropTypes.func
};
