import Button from "../Button";

const FollowPersonCard = ({ profieImg, bloggerName, bloggerInfo }) => {
  return (
    <div className="follow-person-card flex">
      <img
        src={profieImg}
        alt="avatar"
        className="avatar"
        style={{ width: 32, height: 32, marginRight: 10 }}
      />
      <div className="follow-person-card-info">
        <span className="blogger-name fs-16 primary-text">{bloggerName}</span>
        <span className="blogger-info fs-13 light-text line-clamp">
          {bloggerInfo}
        </span>
      </div>

      <Button className={"ghost follow-btn"} size={"sm"} title={"Takip Et"} />
    </div>
  );
};

export default FollowPersonCard;
