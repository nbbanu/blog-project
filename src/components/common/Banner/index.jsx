import Button from "../Button";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container flex">
        <div className="banner-left ">
          <h2 className="banner-left-h2">Stay curious.</h2>
          <p className="banner-left-text">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button title="Okumaya Başla !" size="lg" />
        </div>
        <div className="banner-right display-none">
          <img src="banner-right.png" className="img-cover" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
