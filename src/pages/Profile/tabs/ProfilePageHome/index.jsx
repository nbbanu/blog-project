import { useEffect, useState } from "react";
import BlogCard from "../../../../components/common/BlogCard";
import { getAllBlogs } from "../../../../service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const ProfilePageHome = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadAllBlogsToUI();
  }, []);

  const navigate = useNavigate();

  const loadAllBlogsToUI = async () => {
    const data = await getAllBlogs();
    let newBlogDates = data?.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setBlogs(newBlogDates);
  };
  const openBlogDetail = (blogTitle, blogId) => {
    navigate(`/detail/${blogTitle}/${blogId}`);
  };

  return (
    <div className="profilePage-home">
      {blogs?.length === 0
        ? [1, 2, 3, 4, 5].map((item) => (
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
        : blogs?.map((blog) => (
            <BlogCard
              key={blog?.id}
              bloggerName={blog?.user.name}
              title={blog?.title}
              infoText={blog?.description}
              releaseDate={dayjs(blog?.created_at).format("MMM DD, YYYY")}
              profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
              blogImage={blog?.image}
              openBlogDetail={() => openBlogDetail(blog?.title, blog?.id)}
              blogId = {blog?.id}
              isAdded={blog?.lists?.length > 0}
            />
          ))}
    </div>
  );
};

export default ProfilePageHome;
