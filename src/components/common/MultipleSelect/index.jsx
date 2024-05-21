import { useState } from "react";

const datas = [
  { id: 1, name: "Türkiye" },
  { id: 2, name: "Afghanistan" },
  { id: 3, name: "American" },
  { id: 4, name: "Ameriasdfasdfasdfasdfcan" },
  { id: 5, name: "Test" },
  { id: 6, name: "zxcvzxcv" },
];

const CustomSelect = () => {
  const [topics, setTopics] = useState([]);
  const [values, setValues] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClick = (data) => {
    setValues((values) => [...values, data]);
  };

  const removeItem = (id) => {
    setValues((values) => values.filter((item) => item.id !== id));
  };

  return (
    <div className="custom-select-container">
      <div className="search-box flex flex-center">
        {values?.length > 0 &&(
          <span className="fs-13 primary-text">
            <ul className="topic-list flex flex-center">
              {values.map((value, id) => (
                <li key={id} className="topic-link link">
                  {value.name}
                  <button
                    className="remove-topic"
                    onClick={() => {
                      removeItem(value.id);
                    }}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </span>
        )}

        <input
          onClick={openPopup}
          type="text"
          placeholder="Bir konu ekleyin..."
          className="search-input"
        />
      </div>
      {showPopup && (
        <div
          className="popup-out"
          onClick={() => {
            setShowPopup(false);
          }}
        />
      )}
      {showPopup ? (
        <div className="topics-popup-container">
          <div className="topics-popup">
            <ul className="links flex flex-column">
              {values.length < 5 ? (
                <>
                  {datas.map((data, index) => (
                    <li
                      key={index}
                      className="link fs-13 primary-text"
                      onClick={() => handleClick(data)}
                    >
                      {data.name}
                    </li>
                  ))}
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomSelect;
