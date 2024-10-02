import { Link } from "react-router-dom";
import Button from "../Button";
import { useState } from "react";

const HorizantalScrobbleBar = () => {
  const slider = document.querySelector(".scrobble-area");
  const [showLeftArrow, setShowLeftArrow] = useState(false);

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

  return (
    <div >

      <div className="horizantal-scrobble-bar flex flex-center">
      <div className="gradient-left" style={{display: showLeftArrow ? "flex" : "none"}}></div>
        <div className="scrobble-area flex flex-center">
          {showLeftArrow ? (
            <i
              className="fa-solid fa-chevron-left left-arrow light-text"
              onClick={sliderLeft}
            ></i>
          ) : (
        
              <i className="fa-solid fa-plus light-text plus-icon flex flex-center-center"></i>
   
          )}
          <Link className="link">
            <Button className={"ghost border-none"} title={"For You"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Following"} />
          </Link>
          <Link className="link">
            <Button
              className={"ghost border-none"}
              title={"Self Improvement"}
            />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Psychology"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Social Media"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Web Development"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Coding"} />
          </Link>
          <Link className="link">
            <Button
              className={"ghost border-none"}
              title={"Software Engineering"}
            />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"JavaScript"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Design"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Science"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Health"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Technology"} />
          </Link>
          <Link className="link">
            <Button className={"ghost border-none"} title={"Programming"} />
          </Link>
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
