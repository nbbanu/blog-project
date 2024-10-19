import { Link } from "react-router-dom";
import { useAuth } from "../../../../../contexts/AuthContext";
import { useState } from "react";

const ListCard = ({
  username,
  profilImg,
  listTitle,
  stories,
  isPrivate,
  list,
  children,
}) => {
  const { email } = useAuth();
  const userEmail = "@" + email?.split("@")[0];

  return (
    <div className="list-card">
      <div className="list-card-left">
        <Link to="/lists/main" className="link">
          <div className="list-card-header flex flex-center">
            <img src={profilImg} className="avatar profile-img" alt="avatar" />
            <div className="user-name fs-14 primary-text">{username}</div>
          </div>
        </Link>
        <div>
          <Link className="link" to={`/${userEmail}/${listTitle}/${list.id}`}>
            <div className="list-title fs-20 primary-text">{listTitle}</div>
            <div className="flex flex-center-between">
              <div className="stories flex flex-center">
                <span className="fs-13 light-text">{stories}</span>
                <span className="fs-13 light-text story-text">stories</span>
                {isPrivate}
              </div>
              <i className="fa-solid fa-ellipsis light-text"></i>
            </div>
          </Link>
        </div>
      </div>
      <Link className="link" to={`/${userEmail}/${listTitle}/${list.id}`}>
        <div className="list-card-right">
          <div className="list-image">
            {list?.blogs[0]?.image ? (
              <img
                src={list?.blogs[0]?.image}
                alt="blog-img"
                className="img-cover"
              />
            ) : (
              <div className="empty-image"></div>
            )}
          </div>
          <div className="list-image">
            {list?.blogs[1]?.image ? (
              <img
                src={list?.blogs[1]?.image}
                alt="blog-img"
                className="img-cover"
              />
            ) : (
              <div className="empty-image"></div>
            )}
          </div>
          <div className="list-image">
            {list?.blogs[2]?.image ? (
              <img
                src={list?.blogs[2]?.image}
                alt="blog-img"
                className="img-cover"
              />
            ) : (
              <div className="empty-image"></div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ListCard;
