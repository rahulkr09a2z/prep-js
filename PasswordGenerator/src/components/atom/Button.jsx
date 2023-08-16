import PropTypes from "prop-types";

const Button = ({ title, onClick, disable = false, customClass = null }) => {
  const clickHandler = ({ target: { value } }) => !disable && onClick(value);
  return (
    <button
      className={`primary-btn ${customClass && customClass}`}
      onClick={clickHandler}
    >
      <p>{title}</p>
    </button>
  );
};
export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  customClass: PropTypes.string,
};
