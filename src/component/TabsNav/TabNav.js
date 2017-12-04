export const TabNav = ({ list, select }) => {
  const onClick = (e, id) => {
    select(id);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul>{list.map((el, index) =>
        (<li key={el.id}>
          <a href="#"
             onClick={e => onClick(e, index)}>
            {el.title}
          </a>
        </li>)
      )}
      </ul>
    </nav>);
};

TabNav.propTypes = {
  select: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};
