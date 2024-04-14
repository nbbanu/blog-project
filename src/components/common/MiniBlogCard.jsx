const BlogCard = (
{  profileImg,
  bloggerName,
  publishedBy,
  title,
  releaseDate,
  readingTime}
) => {
  return (
    <div className="mini-card flex flex-column" id="">
      <div className="mini-card-header flex">
        <div className="mini-card-img avatar">
          <img
            src="https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
            alt=""
          />
          {/* <img src={profileImg} alt="" /> */}
        </div>
        <span className="blogger-name">{bloggerName}</span>
        <span className="publishedBy">{publishedBy}</span>
      </div>
      <div className="mini-card-title">
       <h2 className="mini-card-title-h2">{title}</h2> 
      </div>
      <div className="flex flex-center">
        <span className="mini-card-release-date">{releaseDate}</span>
        <span className="dot">.</span>
        <span className="mini-card-reading-time">{readingTime}</span>
      </div>
    </div>
  );
};

export default BlogCard;
