import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../../../../../components/common/BlogCard";
import { getBLogById, getMyListById } from "../../../../../service";
import ClapButton from "../../../../BlogDetail/ClapButton";
import AddNoteInput from "../../../partials/AddNoteInput";
import dayjs from "dayjs";
import Comment from "../../../../BlogDetail/Comment";
import Skeleton from "react-loading-skeleton";

const ReadingListPage = () => {
  const [listedBlog, setListedBlog] = useState([]);
  const [listBlog, setListBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const listParams = useParams();

  useEffect(() => {
    loadReadingListBlogById();
  }, []);

  const loadReadingListBlogById = async () => {
    setLoading(true);
    const data = await getMyListById(listParams.listId);
    setListedBlog(data || []);
    setListBlog(data?.blogs);
  };

  return (
    <div className="reading-list-page">
      <div className="profile-info flex flex-center">
        {setLoading ? (
          <Skeleton />
        ) : (
          <img
            src={listedBlog?.user?.profileImage}
            className="avatar"
            style={{ width: 48, height: 48 }}
            alt="avatar"
          />
        )}
        <div>
          <div className="user-name primary-text">
            {listedBlog?.user?.username}
          </div>
          <div className="profile-info-bottom flex flex-center">
            <div className="date light-text fs-14">
              {dayjs(listedBlog?.created_at).format("MMM DD, YYYY")}
            </div>
            <div className="flex flex-center-center">
              <i
                className="fa-solid fa-circle light-text"
                style={{ fontSize: 3 }}
              ></i>
            </div>
            <div className="story flex flex-center">
              <span className="fs-13 light-text">{listBlog?.length}</span>
              <span className="fs-13 light-text story-text">blog</span>
              {listedBlog?.isPrivate == true ? (
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
        <h2 className="reading-list-h2 primary-text fs-32">
          {listedBlog?.title}
        </h2>
        <div>
          <div className="light-line"></div>
          <div className="flex flex-center " style={{ gap: 25 }}>
            <ClapButton />
            <Comment />
          </div>
          <div className="light-line"></div>
        </div>
      </div>
      <div className="reading-list-blogs">
        {listBlog?.map((blog) => (
          <div key={blog.id} className="reading-list-blog">
            <AddNoteInput />
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingListPage;
