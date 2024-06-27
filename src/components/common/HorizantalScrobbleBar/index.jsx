import { Link } from "react-router-dom";
import Button from "../Button";


const HorizantalScrobbleBar = () => {


  return (
    <div className="horizantal-scrobble-bar flex flex-center">
      <div className="scrobble-area flex flex-center">
        <Link className="link ">
          <i className="fa-solid fa-plus light-text plus-icon"></i>
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"For You"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Following"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Self Improvement"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Psychology"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Social Media"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Web Development"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Coding"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Software Engineering"}/>
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"JavaScript"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Design"} />
        </Link>
        <Link className="link">
          <Button className={"ghost border-none"} title={"Science"} />
        </Link>
        <Link  className="link">
          <Button className={"ghost border-none"} title={"Health"} />
        </Link>
        <Link className="link">
          <Button className={"ghost border-none"} title={"Technology"} />
        </Link>
        <Link className="link">
          <Button className={"ghost border-none"} title={"Programming"} />
        </Link>
      </div>
      <i className="fa-solid fa-chevron-right right-arrow light-text"></i>
    </div>
  );
};

export default HorizantalScrobbleBar;
