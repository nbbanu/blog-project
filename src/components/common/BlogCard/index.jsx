const blogCard = ({bloggerName}) => {
  return (
    <div className="blog-card">
      <div className="blog-card-header flex flex-center">
        <div className="blog-card-img">
          <img
          className="avatar"
            src="https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
            alt="avatar"
          />
          {/* <img src={profileImg} alt="" /> */}
        </div>
        <span className="blogger-name fs-13 primary-text">deneme</span>
      </div>
    </div>
  );
};

export default blogCard;
