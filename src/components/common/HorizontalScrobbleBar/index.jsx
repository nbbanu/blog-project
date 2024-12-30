import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTopics } from "../../../service";

const HorizontalScrobbleBar = () => {
  const slider = document.querySelector(".scrobble-area");
  const [topics, setTopics] = useState([]);

  const searchParams = new URLSearchParams(location.search);
  const [search, setSearch] = useSearchParams(searchParams);
  const id = search.get("id");

  const sliderLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const sliderRight = () => {
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  useEffect(() => {
    loadAllTopics();
  }, []);

  const loadAllTopics = async () => {
    const data = await getAllTopics();
    setTopics(data);
  };

  return (
    <div>
      <div className="horizontal-scrobble-bar flex flex-center">
        {/* <div
          className="gradient-left"
          style={{ display: showLeftArrow ? "flex" : "none" }}
        ></div> */}

        <i
          className="fa-solid fa-chevron-left left-arrow light-text"
          onClick={sliderLeft}
        ></i>

        <div className="scrobble-area flex flex-center">
          <ul className="tag-list flex flex-center">
            <Link
              to={"/"}
              className={`link light-text fs-14 following-btn ${
                !id && "active"
              }`}
            >
              Takip Ettiklerin
            </Link>
            {topics.map((topic) => (
              <div
                className={`link light-text fs-14 ${
                  id == topic.id && "active"
                }`}
                key={topic.id}
                onClick={() => {
                  searchParams.set("id", topic?.id);
                  searchParams.set("tag", topic?.title);
                  setSearch(searchParams);
                }}
              >
                {topic.title}
              </div>
            ))}
          </ul>
          <Outlet />
        </div>
        <i
          className="fa-solid fa-chevron-right right-arrow light-text"
          onClick={sliderRight}
        ></i>
      </div>
    </div>
  );
};

export default HorizontalScrobbleBar;
