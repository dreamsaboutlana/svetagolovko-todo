export const TabNav = ({ children, select, activeIndex }) => (
  <nav className="nav-tab">
    <ul> {children.map((el, index) => {
        const TabLink = el.type;
        return (
          <li
            className={activeIndex === index ? 'active' : ''}
            key={index}
          >
            <TabLink {...el.props}
                     select={select}
                     index={index} />
          </li>
        );
      }
    )}
    </ul>
  </nav>);
