import { Link } from "react-router-dom";
import SaveButton from "../../../pages/BlogDetail/SaveButton";
import BloggerTooltip from "../BloggerTooltip";


const blogCard = ({
  bloggerName,
  releaseDate,
  profileImg,
  title,
  infoText,
  categoryLink,
  readingTime,
  minusIcon,
  dot,
  blogImage,
  openBlogDetail,
  openBloggerProfile,
  listed,

}) => {


  return (
    <div>
      <div className="blog-card flex flex-center">
        <div className="blog-card-left">
          <div className="blog-card-left-header flex flex-center">
            <div className="blogger-profile flex flex-center">
              <BloggerTooltip
                bloggerName={"Banubkrli"}
                bloggerInformation="Professional domestic abuse advocate by day; a writer by night and a street photographer in my free time. A counsellor in the make."
                followersCount={"1.2K"}
                profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
              />
              <img
                className="avatar img-cover"
                src={profileImg}
                alt="avatar"
                style={{ width: 24, height: 24 }}
              />

              <span
                className="blogger-name fs-14 primary-text"
                onClick={openBloggerProfile}
              >
                {bloggerName}
              </span>
            </div>
            {dot}

            <span className="blog-card-release-date fs-14 light-text">
              {releaseDate}
            </span>
          </div>
          <div className="blog-card-left-title flex" onClick={openBlogDetail}>
            <div>
              <h2 className="blog-card-title-h2 fs-20 primary-text">{title}</h2>
              <p className="blog-card-info-text fs-16 primary-text line-clamp">
                {infoText}
              </p>
            </div>
          </div>

          <div className="blog-card-bottom flex flex-center-between">
            <div className="blog-card-bottom-left flex flex-center">
              <Link className="link gray-link">{categoryLink}</Link>
              <span className="mini-card-reading-time fs-13 light-text">
                {readingTime}
              </span>
            </div>
            <div className="blog-card-bottom-right flex flex-center">
              <SaveButton listed={listed}/>
              {minusIcon}
              <i className="fa-solid fa-ellipsis light-text fs-20"></i>
            </div>
          </div>
        </div>
        <div
          className="blog-image-box"
          style={{ width: 112, height: 112 }}
          onClick={openBlogDetail}
        >
          <img src={blogImage} alt="blog-image" className="img-cover" />
        </div>
      </div>
      <div className="light-line"></div>
    </div>
  );
};

export default blogCard;
