import { useEffect, useState } from "react";
import MiniBlogCard from "../MiniBlogCard";
import { getAllBlogs } from "../../../service";
import dayjs from "dayjs";

const Trending = () => {
  useEffect(() => {
    loadAllBlogsToUI();
  }, []);

  const [showAllBlogs, setShowAllBlogs] = useState([]);
  const loadAllBlogsToUI = async () => {
    const data = await getAllBlogs();
    setShowAllBlogs(data.splice(0,6));
  };
  return (
    <section id="trending" className="trending">
      <div className="container">
        <div className="trending-header flex flex-center">
          <img
            src="/trend-graph.png"
            alt="trend-graphics"
            style={{ width: "20px", height: "20px", objectFit: "cover" }}
          />
          <h2 className="trending-header-h2 fs-16 primary-text">
            Trending on Medium
          </h2>
        </div>
        <div className="mini-blog-cards">
          {
            showAllBlogs.map((blog,index) => (
              <MiniBlogCard 
              cardIndex={index+1}
              profileImg={"https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"}
              bloggerName={blog.user.name}
              readingTime={"8 min read"}
              title={blog.title}
              releaseDate={dayjs(blog.created_at).format('MMM DD, YYYY')}
              publishedBy={"Towards Data Science"}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Trending;
