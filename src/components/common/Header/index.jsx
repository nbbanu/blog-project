import Button from "../Button";

const Header = () => {
  return (
    <section id="header" className="">
      <div className="container flex flex-center-between">
        <a className="medium-main-logo link">
          <img src="medium-logo.png" className="img-cover" alt="" />
        </a>
        <div className="menu flex flex-center">
          <a href="#" className="link primary-link">
            Our Story
          </a>
          <a href="#" className="link primary-link">
            Membership
          </a>
          <a href="#" className="link primary-link">
            Write
          </a>
          <a href="#" className="link primary-link visible">
            Sign In
          </a>
          <Button title="Hemen Başla" />
        </div>
      </div>
    </section>
  );
};

export default Header;
