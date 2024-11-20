import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../../../../../components/common/BlogCard";
import { getMyListById } from "../../../../../service";
import ClapButton from "../../../../BlogDetail/ClapButton";
import CommentButton from "../../../../BlogDetail/CommentButton";
import AddNoteInput from "../../../partials/AddNoteInput";

const ReadingListPage = () => {
  const [show, setShowModal] = useState(false);
  const [listed, setListed] = useState([]);
  const [listBlog, setListBlog] = useState([]);

  // const { email } = useAuth();
  // const userEmail = "@" + email?.split("@")[0];

  const listParams = useParams();

  useEffect(() => {
    loadReadingListBlogById();
  }, []);

  const loadReadingListBlogById = async () => {
    const data = await getMyListById(listParams.listId);
    setListed(data || []);
    setListBlog(data?.blogs);
  };


  return (
    <div className="reading-list-page">
      <div className="profile-info flex flex-center">
        <img
          src="https://miro.medium.com/v2/resize:fill:48:48/0*PVc8ycK2VwtFt7R0"
          className="avatar"
          style={{ width: 48, height: 48 }}
          alt="avatar"
        />
        <div>
          <div className="user-name primary-text">Banubkrli</div>
          <div className="profile-info-bottom flex flex-center">
            <div className="date light-text fs-14">Aug 26, 2024</div>
            <div className="flex flex-center-center">
              <i
                className="fa-solid fa-circle light-text"
                style={{ fontSize: 3 }}
              ></i>
            </div>
            <div className="story flex flex-center">
              <span className="fs-13 light-text">{listBlog?.length}</span>
              <span className="fs-13 light-text story-text">stories</span>
              {listed?.isPrivate == true ? (
                <span>
                  <i className="fa-solid fa-lock fs-12 light-text"></i>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="list-page-header">
        <h2 className="reading-list-h2 primary-text fs-32">{listed?.title}</h2>
        <div>
          <div className="light-line"></div>
          <div className="flex flex-center " style={{ gap: 25 }}>
            <ClapButton />
            <CommentButton />
          </div>
          <div className="light-line"></div>
        </div>
      </div>
      <div className="reading-list-blogs">
        {listBlog?.map((blog) => (
          <div className="reading-list-blog">
            <AddNoteInput />
            <BlogCard
             blog={blog}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingListPage;
