import React from "react";
import styles from "./tooltip.module.scss";

const Tooltip = ({ position = "top", children, text = "I am tooltip" }) => {
  if (!children) {
    throw new Error("Please wrap child element inside Tooltip");
  }

  return (
    <div className={styles.tooltipContainer}>
      {children}
      <div className={`${styles.tooltip} ${styles[`tooltip-${position}`]}`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
