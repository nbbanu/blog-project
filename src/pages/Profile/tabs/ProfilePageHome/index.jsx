import { useEffect, useState } from "react";
import BlogCard from "../../../../components/common/BlogCard";
import { getAllBlogs } from "../../../../service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";

const ProfilePageHome = () => {
  const [blogs, setBlogs] = useState(null);
  const params = useParams();

  useEffect(() => {
    loadBlogsToUI();
  }, [params]);

  const loadBlogsToUI = async () => {
    const data = await getAllBlogs(params.userId);
    let newBlogDates = data?.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setBlogs(newBlogDates);
  };

  return (
    <div className="profilePage-home">
      {blogs === null
        ? Array.from({ length: 5 }).map((item) => (
            <div
              key={item}
              className="flex flex-between"
              style={{ marginBottom: 25 }}
            >
              <div style={{ width: "100%" }}>
                <div className="flex flex-center" style={{ marginBottom: 15 }}>
                  <Skeleton
                    circle
                    width={24}
                    height={24}
                    style={{ marginLeft: 7 }}
                  />
                  <Skeleton width={100} style={{ marginLeft: 7 }} />
                </div>
                <div>
                  <Skeleton
                    width={200}
                    style={{ marginLeft: 37, marginBottom: 10 }}
                  />
                  <Skeleton width={300} style={{ marginLeft: 37 }} />
                  <Skeleton width={300} style={{ marginLeft: 37 }} />
                </div>
                <div
                  className="bottom flex flex-between"
                  style={{ marginTop: 15, alignItems: "flex-end" }}
                >
                  <Skeleton width={40} style={{ marginLeft: 37 }} />
                </div>
              </div>
              <div className="right" style={{ alignSelf: "flex-end" }}>
                <div
                  className="flex"
                  style={{ marginRight: 15, alignItems: "flex-end" }}
                >
                  <Skeleton width={25} style={{ marginRight: 25 }} />
                  <Skeleton width={25} style={{ marginRight: 25 }} />
                  <Skeleton width={120} height={120} />
                </div>
              </div>
            </div>
          ))
        : blogs?.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
    </div>
  );
};

export default ProfilePageHome;
