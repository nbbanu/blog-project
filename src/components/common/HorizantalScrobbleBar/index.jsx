import Button from "../Button";


const HorizantalScrobbleBar = () => {


  return (
    <div className="horizantal-scrobble-bar flex flex-center">
      <div className="scrobble-area flex flex-center">
        <a href="/" className="link ">
          <i className="fa-solid fa-plus light-text plus-icon"></i>
        </a>
        <a href="/" className="link">
          <Button className={"ghost border-none"} title={"For You"} />
        </a>
        <a href="/" className="link">
          <Button className={"ghost border-none"} title={"Following"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Self Improvement"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Psychology"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Social Media"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Web Development"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Coding"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Software Engineering"}/>
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"JavaScript"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Design"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Science"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Health"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Technology"} />
        </a>
        <a href="" className="link">
          <Button className={"ghost border-none"} title={"Programming"} />
        </a>
      </div>
      <i className="fa-solid fa-chevron-right right-arrow light-text"></i>
    </div>
  );
};

export default HorizantalScrobbleBar;
