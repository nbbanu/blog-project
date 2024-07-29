import Button from "../Button";

const FollowPersonCard = ({ profieImg, bloggerName, bloggerInfo }) => {
  return (
    <div className="follow-person-card">
      <div className="follow-person-card-left flex flex-center">
        <img
          src={profieImg}
          alt="avatar"
          className="avatar"
          style={{ width: 32, height: 32, marginRight: 10 }}
        />
        <span className="blogger-name fs-16 primary-text">{bloggerName}</span>
      </div>

      <div className="flex flex-center">
        <span className="blogger-info fs-13 light-text line-clamp">
          {bloggerInfo}
        </span>
        <Button className={"ghost"} size={"sm"} title={"follow"} />
      </div>
    </div>
  );
};

export default FollowPersonCard;
