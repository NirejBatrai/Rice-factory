import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,

  type: PropTypes.string.isRequired,
};

export default Button;
