import './navigation.scss';

export const Navigation = ({ list }) => (
  <nav className="nav">
    <ul>
      {
        list.map((item, index) => (
          <li key={index}>
            <a href={`/${item.toLowerCase()}`}>{item}</a>
          </li>
        ))
      }
    </ul>
  </nav>
);
