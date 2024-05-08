const StaffPicksCard = ({profileImg,bloggerName,publishedBy,title}) => {
  return (
    
    <div className="staff-pick-card flex flex-column">
      <div className="flex flex-center">
          <img
            src={profileImg}
            alt="avatar"
            className="avatar"
          />
          <p className="blogger-name fs-13 primary-text">{bloggerName}</p>
          <p className="publishedBy fs-13 primary-text"><span className="light-text">in</span> {publishedBy}</p>
      </div>
      <div className="staff-pick-title">
          <h2 className="mini-card-title-h2 fs-16 primary-text">{title}</h2>
        </div>
    </div>
  );
};

export default StaffPicksCard;
