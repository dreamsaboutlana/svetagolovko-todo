import './error.scss';

export const Error = (props) =>
  <mark className='error' style={{ color: props.color }}>{props.text}</mark>;

Error.defaultProps = {
  color: 'transparent',
  text: 'Error!'
};
Error.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};

