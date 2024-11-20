import { useNavigate } from "react-router-dom";
import BloggerTooltip from "../BloggerTooltip";

const StaffPicksCard = ({ blog }) => {
  const navigate = useNavigate();

  const openBlogDetail = () => {
    navigate(`detail/${blog?.slug}/${blog?.id}`);
  };
  const openBloggerProfile = (email) => {
    const userEmail = "@" + email?.split("@")[0];
    navigate(`/${userEmail}/main`);
  };
  return (
    <div className="staff-pick-card flex flex-column">
      <div className="blogger-profile flex flex-center">
        <BloggerTooltip
        user={blog?.user}
        />
        <img src={blog?.user?.profileImage} alt="avatar" className="avatar" />
        <p
          className="blogger-name fs-13 primary-text"
          onClick={() => openBloggerProfile(blog?.user?.email)}
        >
          {blog?.user?.name}
        </p>
        <p className="publishedBy fs-13 primary-text">
          <span className="light-text">in</span> {"Middle-Pause"}
        </p>
      </div>
      <div className="staff-pick-title" onClick={openBlogDetail}>
        <h2 className="mini-card-title-h2 fs-16 primary-text">{blog?.title}</h2>
      </div>
    </div>
  );
};

export default StaffPicksCard;
