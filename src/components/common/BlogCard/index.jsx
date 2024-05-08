const blogCard = ({
  bloggerName,
  releaseDate,
  profileImg,
  title,
  infoText,
  categoryLink,
  readingTime,
}) => {
  return (
    <div>
    <div className="blog-card flex">
      <div className="blog-card-left">
      <div className="blog-card-header flex flex-center">
        <img
          className="avatar img-cover avatar"
          src={profileImg}
          alt="avatar"
          style={{ width: 24, height: 24 }}
        />
        {/* <img src={profileImg} alt="blog-image" /> */}
        <span className="blogger-name fs-14 primary-text">{bloggerName}</span>
        <span className="dot light-text"></span>
        <span className="blog-card-release-date fs-14 light-text">
          {releaseDate}
        </span>
      </div>
      <div className="blog-card-title flex">
        <div>
          <h2 className="blog-card-title-h2 fs-20 primary-text">{title}</h2>
          <p className="blog-card-info-text fs-16 primary-text">{infoText}</p>
        </div>
      </div>

      <div className="blog-card-bottom flex flex-center-between">
        <div className="blog-card-bottom-left flex flex-center">
          <a href="#" className="link gray-link">
            {categoryLink}
          </a>
          <span className="mini-card-reading-time fs-13 light-text">
            {readingTime}
          </span>
        </div>
        <div className="blog-card-bottom-right flex flex-center">
          <i className="fa-regular fa-bookmark light-text fs-20"></i>
          <i className="fa-solid fa-minus minus light-text flex flex-center-center"></i>
          <i className="fa-solid fa-ellipsis light-text fs-20"></i>
        </div>
      </div>
      </div>

      <img
          src="https://miro.medium.com/v2/resize:fill:224:224/1*j4GRvjL4aKaAigk9d_STIw.jpeg"
          alt="blog-image"
          style={{ width: 112, height: 112}}
        />
   
    </div>
    <div className="light-line"></div>
    </div>
  );
};

export default blogCard;
