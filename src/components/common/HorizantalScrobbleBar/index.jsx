import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const HorizantalScrobbleBar = () => {
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
      <div className="horizantal-scrobble-bar flex flex-center">
        <div
          className="gradient-left"
          style={{ display: showLeftArrow ? "flex" : "none" }}
        ></div>
        <div className="scrobble-area flex flex-center">
          {showLeftArrow ? (
            <i
              className="fa-solid fa-chevron-left left-arrow light-text"
              onClick={sliderLeft}
            ></i>
          ) : (
            <i className="fa-solid fa-plus light-text plus-icon flex flex-center-center"></i>
          )}
          <ul className=" flex flex-center">
            {tags.map((tag) => (
              <li className="link">
                <a className="link light-text fs-14">{tag}</a>
              </li>
            ))}
          </ul>
          {/* <NavLink className="link fs-14 light-text">
           Following
          </NavLink>
          <NavLink className="link">
          
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink>
          <NavLink className="link">
          </NavLink> */}
        </div>
        <i
          className="fa-solid fa-chevron-right right-arrow light-text"
          onClick={sliderRight}
        ></i>
      </div>
    </div>
  );
};

export default HorizantalScrobbleBar;
