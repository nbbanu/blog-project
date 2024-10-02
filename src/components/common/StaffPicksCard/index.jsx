import BloggerTooltip from "../BloggerTooltip";

const StaffPicksCard = ({
  profileImg,
  bloggerName,
  publishedBy,
  title,
  openBlogDetail,
  openBloggerProfile,
}) => {
  return (
    <div className="staff-pick-card flex flex-column">
      <div className="blogger-profile flex flex-center">
        <BloggerTooltip
        bloggerName={"Banubkrli"}
        bloggerInformation="Professional domestic abuse advocate by day; a writer by night and a street photographer in my free time. A counsellor in the make."
        followersCount={"1.2K"}
        profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"/>
        <img src={profileImg} alt="avatar" className="avatar" />
        <p className="blogger-name fs-13 primary-text" onClick={openBloggerProfile}>{bloggerName}</p>
        <p className="publishedBy fs-13 primary-text">
          <span className="light-text">in</span> {publishedBy}
        </p>
      </div>
      <div className="staff-pick-title" onClick={openBlogDetail}>
        <h2 className="mini-card-title-h2 fs-16 primary-text">{title}</h2>
      </div>
    </div>
  );
};

export default StaffPicksCard;
