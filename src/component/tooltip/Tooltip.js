import React from "react";
import styles from "./tooltip.module.scss";

// here we add new props text
const Tooltip = ({ position = "top", children, text = "I am tooltip" }) => {
  // If children is not there then return null
  if (!children) {
    throw new Error("Please wrap child element inside Tooltip");
  }

  return (
    //  Tooltip Container
    <div className={styles.tooltipContainer}>
      {children}
      {/* Here we add dynamic classes using props */}
      <div className={`${styles.tooltip} ${styles[`tooltip-${position}`]}`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
