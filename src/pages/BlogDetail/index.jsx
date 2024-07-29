import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../service";
import Button from "../../components/common/Button";
import ClapButton from "./ClapButton";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState("");
  const topicId = useParams();

  useEffect(() => {
    loadBlogByID(topicId.id);
  }, []);
  const loadBlogByID = async (topicId) => {
    const data = await getBlogById(topicId);
    setBlog(data);
  };

  return (
    <div className="container">
      <div className="blog-detail-container">
        <div className="blog-detail-top">
          <div className="blog-detail-header">
            <h1 className="blog-detail-header-h1 primary-text">{blog.title}</h1>
            <div className="blog-detail-header-blogger-info flex flex-center">
              <img
                src="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                className="avatar"
                alt="blogger-profile-photo"
                style={{ width: 40, height: 40 }}
              />
              <div className="blog-detail-header-blogger">
                <div className="blog-detail-header-blogger-top flex flex-center">
                  <div className="blog-detail-header-blogger-name primary-text">
                    {blog?.user?.name}
                  </div>
                  <i
                    className="fa-solid fa-circle"
                    style={{ fontSize: 2, marginLeft: 10 }}
                  ></i>
                  <Button className={"ghost border-none"} title={"Follow"} />
                </div>
                <div className="blog-detail-header-blogger-bottom flex flex-center">
                  <span className="blog-detail-header-reading-time light-text fs-14">
                    6 min read
                  </span>
                  <i
                    className="fa-solid fa-circle"
                    style={{ fontSize: 2, marginLeft: 10, marginRight: 10 }}
                  ></i>

                  <span className="blog-detail-header-release-date light-text fs-14">
                    {blog?.updated_at?.slice(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-detail-top-options">
            <div className="light-line"></div>
            <div className="blog-detail-top-option-lists flex flex-center-between">
              <ul className="flex flex-center blog-detail-top-option-lists-left">
                <li className="link">
                  <ClapButton title={blog.title} userName={blog?.user?.name}/>
                </li>
                <li className="link flex flex-center">
                  <i
                    className="fa-regular fa-comment light-text"
                    style={{ marginRight: 5 }}
                  ></i>
                  <span className="light-text fs-13">18</span>
                </li>
              </ul>
              <ul className="flex flex-center blog-detail-top-option-lists-right">
                <li className="link">
                  <i className="fa-regular fa-bookmark light-text"></i>
                </li>
                <li className="link">
                  <i className="fa-regular fa-circle-play light-text"></i>
                </li>
                <li className="link">
                  <i className="fa-solid fa-arrow-up-from-bracket light-text"></i>
                </li>
                <li className="link">
                  <i className="fa-solid fa-ellipsis light-text"></i>
                </li>
              </ul>
            </div>
            <div className="light-line"></div>
          </div>
        </div>
        <div className="blog-detail-bottom">
          <img
            src={blog.image}
            alt="blog_cover_img"
            className="blog-cover-img"
          />
          <div
            className="blog-detail-bottom-content primary-text fs-18"
            dangerouslySetInnerHTML={{ __html: blog?.text }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
