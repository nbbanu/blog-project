import { useState } from "react";

const BasicTooltip = ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="hover-element"
    >
      <div className={`basic-tooltip-container ${show ? "open" : ""}`}>
        <span className="basic-tooltip-content">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default BasicTooltip;
