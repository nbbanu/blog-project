import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const HorizontalScrobbleBar = () => {
  const slider = document.querySelector(".scrobble-area");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [linkActive, setLinkActive] = useState(false);

  const sliderLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 200;
    if (slider.scrollLeft == 0) {
      setShowLeftArrow(false);
    }
  };
  const sliderRight = () => {
    slider.scrollLeft = slider.scrollLeft + 200;
    setShowLeftArrow(true);
  };

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

  return (
    <div>
      <div className="horizontal-scrobble-bar flex flex-center">
        {/* <div
          className="gradient-left"
          style={{ display: showLeftArrow ? "flex" : "none" }}
        ></div> */}
        {showLeftArrow ? (
          <i
            className="fa-solid fa-chevron-left left-arrow light-text"
            onClick={sliderLeft}
          ></i>
        ) : (
          <i className="fa-solid fa-plus light-text plus-icon flex flex-center-center"></i>
        )}
        <div className="scrobble-area flex flex-center">
          <ul className="tag-list flex flex-center">
            {tags.map((tag, index) => (
              <li className="link" key={index}>
                <a className="link light-text fs-14">{tag}</a>
              </li>
            ))}
          </ul>
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
