import './greeting.scss';

const greet = (name) => {
  const time = new Date().getHours();
  const newName = name ? `, ${name}` : '';

  if (time < 3 || time >= 22) {
    return `Good night${newName}!`;
  }
  if (time >= 3 && time < 12) {
    return `Good morning${newName}!`;
  }
  if (time >= 12 && time < 18) {
    return `Good afternoon${newName}!`;
  }
  if (time >= 18 && time < 22) {
    return `Good evening${newName}!`;
  }
};

export const Greeting = ({ name }) => (
  <div className="greeting">
    {greet(name)}
  </div>
);
