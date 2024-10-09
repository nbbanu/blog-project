import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllCategoryTopics,
  getAllTopics,
} from "../../service";
import SearchInput from "../../components/common/SearchInput";
import Home from "../Home";
import { useAuth } from "../../contexts/AuthContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Topics = () => {
  const { token } = useAuth();
  useEffect(() => {
    loadAllTopicsToUI();
  }, []);

  const [allTopics, setAllTopics] = useState([]);

  const loadAllTopicsToUI = async () => {
    const data = await getAllCategoryTopics();
    setAllTopics(data);
  };

  return (
    <div className="topics container">
      <h2 className="topics-header primary-text text-center">Explore Topics</h2>
      <SearchInput title={"Tüm Konuları Ara"} />
      <div className="light-line"></div>
      {allTopics.length === 0 ? (
        <div
          className=""
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 50,
            rowGap: 50,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} style={{ width: "100%" }}>
              <ul>
                <Link className="link">
                  <Skeleton
                    width={100}
                    height={20}
                    style={{ marginBottom: 35 }}
                  />
                  <ul>
                    <Link className="link">
                      <Skeleton
                        width={100}
                        height={15}
                        style={{ marginBottom: 15 }}
                      />
                      <ul>
                        <Link className="link">
                          <Skeleton
                            width={80}
                            height={15}
                            style={{ marginBottom: 10 }}
                          />
                        </Link>
                        <Link className="link">
                          <Skeleton
                            width={80}
                            height={15}
                            style={{ marginBottom: 10 }}
                          />
                        </Link>
                        <Link className="link">
                          <Skeleton
                            width={80}
                            height={15}
                            style={{ marginBottom: 10 }}
                          />
                        </Link>
                        <Link className="link">
                          <Skeleton
                            width={80}
                            height={15}
                            style={{ marginBottom: 10 }}
                          />
                        </Link>
                        <Link className="link">
                          <Skeleton
                            width={80}
                            height={15}
                            style={{ marginBottom: 10 }}
                          />
                        </Link>
                        <Link className="link">
                          <Skeleton
                            width={80}
                            height={15}
                            style={{ marginBottom: 10 }}
                          />
                        </Link>
                      </ul>
                    </Link>
                  </ul>
                </Link>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="all-topics">
          {allTopics.map((category, id) => (
            <div className="topics-list">
              <ul className="category-list">
                <Link className="link category-link primary-text fs-24">
                  {category?.title}
                  <ul className="subcategory-list">
                    {category?.subcategories?.map((subcategory) => (
                      <Link className="link subcategory-link primary-text fs-16">
                        {subcategory.title}
                        <ul className="topic-list">
                          {subcategory.topics?.map((topic) => (
                            <Link className="link topic-link light-text fs-16">
                              {topic.title}
                            </Link>
                          ))}
                          {/* <Link className="link topic-link more-link light-text fs-16">
                              More
                            </Link> */}
                        </ul>
                      </Link>
                    ))}
                  </ul>
                </Link>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topics;
