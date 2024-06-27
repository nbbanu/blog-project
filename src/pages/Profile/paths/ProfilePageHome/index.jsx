import { useEffect, useState } from "react";
import BlogCard from "../../../../components/common/BlogCard";
import { getAllBlogs } from "../../../../service";
const ProfilePageHome = () => {
  useEffect(() => {
    loadAllBlogsToUI();
  }, []);

  const [showAllBlogs, setShowAllBlogs] = useState([]);

  const loadAllBlogsToUI = async () => {
    const data = await getAllBlogs();

    let newBlogDates = data.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setShowAllBlogs(newBlogDates);
  };

  return (
    <div className="profilePage-home">
      {showAllBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          bloggerName={blog.user.name}
          title={blog.title}
          infoText={blog.description}
          releaseDate={blog.created_at.slice(0, 10)}
          profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
          blogImage={blog.image}
        />
      ))}
    </div>
  );
};

export default ProfilePageHome;
