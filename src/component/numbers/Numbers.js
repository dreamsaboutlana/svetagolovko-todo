import './numbers.scss';

const numList = (from, to, type) => {
  const arr = [];

  for (let i = from; i <= to; i++) {
    if (type === 'odd' && i % 2 === 0) {
      arr.push(i);
    }
    if (type === 'even' && i % 2 !== 0) {
      arr.push(i);
    }
    if (type === 'default') {
      arr.push(i);
    }
  }

  return (
    <ul>
      {
        arr.map(num => (
          <li key={num}>
            {num}
          </li>
        ))
      }
    </ul>
  );
};

export const Numbers = (props) => {
  const { from, to } = props;
  let type = 'default';
  if (props.even) {
    type = 'even';
  }
  if (props.odd) {
    type = 'odd';
  }

  return (
    <div className="numbers">
      {numList(from, to, type)}
    </div>
  );
};

Numbers.propsType = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired
};
