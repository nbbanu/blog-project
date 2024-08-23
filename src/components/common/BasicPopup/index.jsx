import { useState } from "react";
// const test = [
//   {
//     listName: "Reading List",
//     value: true,
//     isPrivate: true,
//   },
//   {
//     listName: "html",
//     value: false,
//     isPrivate: false,
//   },
// ];

const BasicPopup = ({ clickItem, children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div>
      <div className="clickable-place" onClick={openPopup}>
        {clickItem}
      </div>
      {showPopup && (
        <div
          className="popup-out"
          onClick={() => {
            setShowPopup(false);
          }}
        />
      )}
      <div className="popup-container">
        {showPopup ? (
          <div className="popup flex flex-column">{children}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BasicPopup;
