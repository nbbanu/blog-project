import { useEffect, useState } from "react";
import { getAllBlogs } from "../../../service";
import MiniBlogCard from "../MiniBlogCard";

const Trending = () => {
  useEffect(() => {
    loadAllBlogsToUI();
  }, []);

  const [showAllBlogs, setShowAllBlogs] = useState([]);
  const loadAllBlogsToUI = async () => {
    const data = await getAllBlogs();
    setShowAllBlogs(data?.splice(0,6));
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
            showAllBlogs?.map((blog,index) => (
              <MiniBlogCard 
              blog={blog}
              index={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Trending;
