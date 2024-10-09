import { useEffect, useState } from "react";
import { getAllTopics } from "../../../service";
import { useAuth } from "../../../contexts/AuthContext";
import { useCreateBlog } from "../../../contexts/CreateBlogContext";
import Loader from "../Loader";

const CustomSelect = () => {
  const [values, setValues] = useState([]);
  const [topics, setTopics] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();
  const { setTopicIds } = useCreateBlog();

  useEffect(() => {
    loadAllTopicsToPopup();
  },[])

  const loadAllTopicsToPopup = async () => {
    const topics = await getAllTopics(token);
    setTopics(topics);

  };

  const handleClick = (topic) => {
    setValues((values) => [...values, topic]);
    setTopicIds([...values, topic].map((value) => value.id));
  };

  const removeItem = (id) => {
    setValues((values) => values.filter((item) => item.id !== id));
    setTopicIds(
      values.filter((item) => item.id !== id).map((value) => value.id)
    );
  };

  return (
    <div className="custom-select-container">
      <div className="search-box flex flex-center">
        {values?.length > 0 && (
          <span className="fs-13 primary-text">
            <ul className="topic-list flex flex-center">
              {values?.map((value) => (
                <li key={value.id} className="topic-link link">
                  {value.title}
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
          onClick={() => setShowPopup(!showPopup)}
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
      {showPopup && values.length < 5 ? (
        <>
          {loading ? <Loader /> : ""}
          <div className="topics-popup-container">
            <div className="topics-popup">
              <ul className="links flex flex-column">
                <>
                  {topics?.map((topic) => (
                    <li
                      key={topic.id}
                      className="link fs-13 primary-text flex flex-center-between"
                      onClick={() => {
                        if (values.find((x) => x.id === topic.id)) {
                          removeItem(topic.id);
                        } else {
                          handleClick(topic);
                        }
                      }}
                    >
                      <span> {topic.title}</span>{" "}
                      {values.find((x) => x.id === topic.id) && (
                        <i className="fa-solid fa-check"></i>
                      )}
                    </li>
                  ))}
                </>
              </ul>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomSelect;
