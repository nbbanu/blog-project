import { useState } from "react";

const MiniTooltip = ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="hover-element"
    >
      <div className={`mini-tooltip-container ${show ? "open" : ""}`}>
        <span className="mini-tooltip-content">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default MiniTooltip;
