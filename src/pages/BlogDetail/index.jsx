import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogByTopicId } from "../../service";
import Button from "../../components/common/Button";
import ClapButton from "./ClapButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BloggerTooltip from "../../components/common/BloggerTooltip";
import dayjs from "dayjs";
import SaveButton from "./SaveButton";
import Comment from "./Comment";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState("");
  const topicId = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBlogByID(topicId.id);
  }, []);

  const loadBlogByID = async (topicId) => {
    setLoading(true);
    const data = await getBlogByTopicId(topicId);
    setBlog(data);
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="blog-detail-container">
        {loading ? (
          <div>
            <div style={{ marginBottom: 70 }}></div>
            <Skeleton
              width={"100%"}
              height={30}
              style={{ marginTop: 10 }}
              count={2}
            />
            <div style={{ marginTop: 20 }} className="flex">
              <Skeleton
                circle
                width={40}
                height={40}
                style={{ marginRight: 20 }}
              />
              <div style={{ marginBottom: 30 }}>
                <Skeleton width={200} />
                <Skeleton width={170} />
              </div>
            </div>
            <div>
              <Skeleton
                width={"100%"}
                height={1}
                style={{ marginBottom: 14 }}
              />
              <div className="flex flex-center-between">
                <div className="flex">
                  <Skeleton width={45} style={{ marginRight: 30 }} />
                  <Skeleton width={45}></Skeleton>
                </div>
                <div className="flex">
                  {/* <Skeleton width={30} style={{ marginRight: 20 }} />
                  <Skeleton width={30} style={{ marginRight: 20 }} />
                  <Skeleton width={30} style={{ marginRight: 20 }} /> */}
                  <Skeleton width={30} />
                </div>
              </div>
              <Skeleton width={"100%"} height={1} />
            </div>
            <Skeleton width={"100%"} height={400} style={{ marginBlock: 40 }} />
            <div>
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
            </div>
          </div>
        ) : (
          <>
            <div className="blog-detail-top">
              <div>
                <h1 className="blog-detail-title primary-text">{blog.title}</h1>
                <div className="blogger-info flex flex-center">
                  <div className="blogger-image">
                    <img
                      src={blog?.user?.profileImage}
                      className="avatar bloger-profile-img"
                      id="name2"
                      alt="blogger-profile-photo"
                      style={{ width: 40, height: 40 }}
                    />
                    <BloggerTooltip user={blog?.user} />
                  </div>

                  <div>
                    <div className="blogger-top flex flex-center">
                      <div className="blogger-name">
                        <div className="blogger-top-name primary-text">
                          {blog?.user?.name}
                        </div>
                        <BloggerTooltip user={blog?.user} />
                      </div>

                      <i
                        className="fa-solid fa-circle"
                        style={{ fontSize: 2, marginLeft: 10 }}
                      ></i>
                      <Button
                        className={"ghost border-none"}
                        title={"Follow"}
                      />
                    </div>
                    <div className="blogger-bottom flex flex-center">
                      <span className="blog-reading-time light-text fs-14">
                        6 min read
                      </span>
                      <i
                        className="fa-solid fa-circle"
                        style={{ fontSize: 2, marginLeft: 10, marginRight: 10 }}
                      ></i>

                      <span className="blog-release-date light-text fs-14">
                        {dayjs(blog?.created_at).format("MMM DD, YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-detail-header">
                <div className="light-line"></div>
                <div className="blog-detail-header-lists flex flex-center-between">
                  <ul className="flex flex-center header-lists-left">
                    <li className="link">
                      <ClapButton
                        clapCount="165"
                        title={blog?.title}
                        userName={blog?.user?.name}
                      />
                    </li>
                    <li className="link">
                      <Comment blog={blog} />
                    </li>
                  </ul>
                  <ul className="flex flex-center header-lists-right">
                    <li className="link">
                      <SaveButton
                        blog={blog}
                        isAdded={blog?.lists?.length > 0}
                      />
                    </li>
                  </ul>
                </div>
                <div className="light-line"></div>
              </div>
            </div>
            <div className="blog-detail-bottom">
              <img
                src={blog?.image}
                alt="blog_cover_img"
                className="blog-cover-img"
              />
              <div
                className="blog-detail-bottom-content primary-text fs-18"
                dangerouslySetInnerHTML={{ __html: blog?.text }}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
