export const TabLink = ({ title, index, select }) => {
  const onClick = (e) => {
    select(index);
    e.preventDefault();
  };

  return (
    <button
      href="#"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
