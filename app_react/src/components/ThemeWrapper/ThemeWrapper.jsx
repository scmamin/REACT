import PropTypes from "prop-types";

const ThemeWrapper = ({ theme, children }) => {
  return <div className={theme === "light" ? "light" : "dark"}>{children}</div>;
};

ThemeWrapper.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
