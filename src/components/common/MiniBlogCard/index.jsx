import { useState } from "react";

const BlogCard = ({  profileImg,
  bloggerName,
  publishedBy,
  title,
  releaseDate,
  readingTime}

) => {
  
  return (
    <div className="mini-card flex ">
      <span className="mini-card-number">
        01
      </span>
      <div className="mini-card-bottom">
      <div className="mini-card-header flex flex-center">
        <div className="mini-card-img avatar">
          <img
            src="https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
            alt="avatar"
            style={{ width: "20px", height: "20px", borderRadius: "50%"}}
          />
          {/* <img src={profileImg} alt="" /> */}
        </div>
        <span className="blogger-name fs-13 primary-text">{bloggerName}</span>
        <span className="publishedBy fs-13 primary-text">{publishedBy}</span>
      </div>
      <div className="mini-card-title">
       <h2 className="mini-card-title-h2 fs-16 primary-text">{title}</h2> 
      </div>
      <div className="flex flex-center">
        <span className="mini-card-release-date fs-13 light-text">{releaseDate}</span>
        <span className="dot light-text"></span>
        <span className="mini-card-reading-time fs-13 light-text"> {readingTime}</span>
      </div>
      </div>
 
    </div>
  );
};

export default BlogCard;
