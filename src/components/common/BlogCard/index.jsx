import { Link, useNavigate } from "react-router-dom";
import SaveButton from "../../../pages/BlogDetail/SaveButton";
import BloggerTooltip from "../BloggerTooltip";
import dayjs from "dayjs";
import { useState } from "react";
import { deleteBlog } from "../../../service";
import { useAuth } from "../../../contexts/AuthContext";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const openBlogDetail = () => {
    navigate(`/detail/${blog?.id}`);
  };
  const openBloggerProfile = (email, userId) => {
    const userEmail = "@" + email?.split("@")[0];
    navigate(`/${userEmail}/${userId}/main`);
  };

  const deleteMyBlog = async () => {
    await deleteBlog(blog?.id);
    window.location.reload();
  };
  return (
    <div>
      <div className="blog-card flex flex-center">
        <div className="blog-card-left">
          <div className="blog-card-left-header flex flex-center">
            <div className="blogger-profile flex flex-center">
              <BloggerTooltip user={blog?.user} />
              <img
                className="avatar img-cover"
                src={blog?.user?.profileImage}
                alt="avatar"
                style={{ width: 24, height: 24 }}
              />

              <span
                className="blogger-name fs-14 primary-text"
                onClick={() =>
                  openBloggerProfile(blog?.user?.email, blog?.user?.id)
                }
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
              {blog?.user?.id == user?.id && (
                <i
                  className="fa-solid fa-minus minus light-text flex flex-center-center"
                  onClick={deleteMyBlog}
                ></i>
              )}
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
