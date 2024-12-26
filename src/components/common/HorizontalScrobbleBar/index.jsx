import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTopics } from "../../../service";

const HorizontalScrobbleBar = () => {
  const slider = document.querySelector(".scrobble-area");
  const [topics, setTopics] = useState([]);

  const tags = [
    "Senin İçin",
    "Takip Edilenler",
    "Kişisel Gelişim",
    "Psikoloji",
    "Sosyal Medya",
    "Web Geliştirme",
    "Kodlama",
    "Yazılım Mühendisliği",
    "JavaScript",
    "Tasarım",
    "Bilim",
    "Sağlık",
    "Teknoloji",
    "Programlama",
  ];
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
          <Link className="link light-text fs-14 following-btn">
            Takip Ettiklerin
          </Link>
          <ul className="tag-list flex flex-center">
            {topics.map((topic) => (
              <NavLink className="link light-text fs-14" key={topic.id} to={""}>
                {topic.title}
              </NavLink>
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
