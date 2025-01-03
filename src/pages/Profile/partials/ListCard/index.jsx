import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { deleteListCard } from "../../../../service";

const ListCard = ({ list,loadMyLists }) => {
  const { user } = useAuth();
  const email = user?.email;
  const userEmail = "@" + email?.split("@")[0];
  const params = useParams();


  const deleteList = async () => {
    deleteListCard(list?.id);
    loadMyLists();
  }

  return (
    <div className="list-card">
      <div className="list-card-left">
        <Link to="/lists/main" className="link">
          <div className="list-card-header flex flex-center">
            <img
              src={list.user.profileImage}
              className="avatar profile-img"
              alt="avatar"
            />
            <div className="user-name fs-14 primary-text">
              {list.user.username}
            </div>
          </div>
        </Link>
        <div>
          <Link
            className="link"
            to={`/${userEmail}/${params?.userId}/list/${list.id}`}
          >
            <div className="list-title fs-20 primary-text">{list.title}</div>
          </Link>
          <div className="flex flex-center-between">
            <div className="stories flex flex-center">
              <span className="fs-13 light-text">{list.blogCount}</span>
              <span className="fs-13 light-text story-text">stories</span>
              {list.isPrivate == true ? (
                <span>
                  <i className="fa-solid fa-lock fs-12 light-text"></i>
                </span>
              ) : (
                ""
              )}
            </div>
            <i className="fa-solid fa-circle-minus fs-16 light-text" onClick={deleteList}></i>
          </div>
        </div>
      </div>
      <Link className="link" to={`/${userEmail}/${list.title}/${list.id}`}>
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
