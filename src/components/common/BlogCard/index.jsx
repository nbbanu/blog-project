import { Link, useNavigate } from "react-router-dom";
import SaveButton from "../../../pages/BlogDetail/SaveButton";
import BloggerTooltip from "../BloggerTooltip";
import dayjs from "dayjs";
import { useState } from "react";

const BlogCard = ({ blog }) => {

  const navigate = useNavigate();

  const openBlogDetail = () => {
    navigate(`/detail/${blog?.id}`);
  };
  const openBloggerProfile = (email,userId) => {
    const userEmail = "@" + email?.split("@")[0];
    navigate(`/${userEmail}/${userId}/main`);
  };
  return (
    <div>
      <div className="blog-card flex flex-center">
        <div className="blog-card-left">
          <div className="blog-card-left-header flex flex-center">
            <div className="blogger-profile flex flex-center" >
              <BloggerTooltip user={blog.user} />
              <img
                className="avatar img-cover"
                src={blog?.user?.profileImage}
                alt="avatar"
                style={{ width: 24, height: 24 }}
              />

              <span
                className="blogger-name fs-14 primary-text"
                onClick={() => openBloggerProfile(blog?.user?.email, blog?.user?.id)}
              >
                {blog?.user?.name}
              </span>
            </div>

            <span className="blog-card-release-date fs-14 light-text">
              {dayjs(blog?.created_at).format("MMM DD, YYYY")}
            </span>
          </div>
          <div className="blog-card-left-title flex" onClick={openBlogDetail}>
            <div>
              <h2 className="blog-card-title-h2 fs-20 primary-text">
                {blog?.title}
              </h2>
              <p className="blog-card-info-text fs-16 primary-text line-clamp">
                {blog?.description}
              </p>
            </div>
          </div>

          <div className="blog-card-bottom flex flex-center-between">
            <div className="blog-card-bottom-left flex flex-center">
              <Link className="link gray-link">{"Micro Frontends"}</Link>
              <span className="mini-card-reading-time fs-13 light-text">
                {"4 min read"}
              </span>
            </div>
            <div className="blog-card-bottom-right flex flex-center">
              <SaveButton blog={blog} isAdded={blog?.lists?.length > 0} />
              {/* <i className="fa-solid fa-minus minus light-text flex flex-center-center"></i> */}
              {/* <i className="fa-solid fa-ellipsis light-text fs-20"></i> */}
            </div>
          </div>
        </div>
        <div
          className="blog-image-box"
          style={{ width: 112, height: 112 }}
          onClick={openBlogDetail}
        >
          <img src={blog?.image} alt="blog-image" className="img-cover" />
        </div>
      </div>
      <div className="light-line"></div>
    </div>
  );
};

export default BlogCard;
