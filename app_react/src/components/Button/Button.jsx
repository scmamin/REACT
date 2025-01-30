import PropTypes from "prop-types";
import "./Button.css";

export default function Button({
  className,
  label,
  disabled = false,
  onClick,
}) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
