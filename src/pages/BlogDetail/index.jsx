import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllBlogsById } from "../../service";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState([]);
  const topicId = useParams();
  useEffect(() => {
    loadBlogByID(topicId.id);
  }, []);
  const loadBlogByID = async (topicId) => {
    const data = await getAllBlogsById(topicId);
    setBlog(data);
  };

  return (
    <div className="container">
      <div className="blog-detail-container">
        <div className="blog-detail-top">
          <div className="blog-detail-header">
            <div className="blog-detail-header-h1">{blog.title}</div>
            <div className="blog-detail-header-blogger-info">
              <div className="avatar">
                <img src="" className="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-detail-bottom"></div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
