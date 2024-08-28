import { Link } from "react-router-dom";
import { useAuth } from "../../../../../contexts/AuthContext";

const ListCard = ({ userName, profilImg, listTitle, stories }) => {
  const { email } = useAuth();
  const userEmail = "@" + email?.split("@")[0];
  return (
    <div className="list-card">
      <div className="list-card-left">
        <Link to="/lists/main" className="link">
          <div className="list-card-header flex flex-center">
            <img src={profilImg} className="avatar profile-img" alt="avatar" />
            <div className="user-name fs-14 primary-text">{userName}</div>
          </div>
        </Link>
        <div>
          <Link className="link" to={`/${userEmail}/reading-list`}>
            <div className="list-title fs-20 primary-text">{listTitle}</div>
            <div className="flex flex-center-between">
              <div className="stories flex flex-center">
                <span className="fs-13 light-text">{stories}</span>
                <span className="fs-13 light-text story-text">stories</span>
                <span>
                  <i className="fa-solid fa-lock fs-12 light-text"></i>
                </span>
              </div>
              <i className="fa-solid fa-ellipsis light-text"></i>
            </div>
          </Link>
        </div>
      </div>
      <Link className="link" to={"reading-list"}>
        <div className="list-card-right flex">
          <div className="list-image">
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*J47lbtGFXdHst9eFjr7jpQ.png"
              alt="blog-img"
              className="img-cover"
            />
          </div>
          <div className="list-image">
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*oHB9739I_N0nC24Bn99ebA.jpeg"
              alt="blog-img"
              className="img-cover"
            />
          </div>
          <div className="list-image">
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*AwznUxbbzdEfDW9D"
              alt="blog-img"
              className="img-cover"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ListCard;
