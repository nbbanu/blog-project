import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  getAllSubcategories,
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
    loadAllCategoriesToUI();
    loadAllSubcategoriesToUI();
    loadAllTopicsToUI();
  }, []);

  const [allCategories, setAllCategories] = useState([]);
  const [allSubcategories, setAllSubategories] = useState([]);
  const [allTopics, setAllTopics] = useState([]);

  const loadAllCategoriesToUI = async () => {
    const data = await getAllCategories();
    setAllCategories(data);
  };
  const loadAllSubcategoriesToUI = async () => {
    const data = await getAllSubcategories();
    setAllSubategories(data);
  };
  const loadAllTopicsToUI = async () => {
    const data = await getAllTopics();
    setAllTopics(data);
  };
  if (token) {
    return (
      <div className="topics container">
        <h2 className="topics-header primary-text text-center">
          Explore Topics
        </h2>
        <SearchInput title={"Tüm Konuları Ara"} />
        <div className="light-line"></div>
        {allCategories.length === 0 ? (
          <div className="flex flex-between" style={{ width: "100%" }}>
            {[1, 2, 3].map((item) => (
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
          allCategories.map((category, catIndex) => (
            <div className="topics-lists">
              <ul className="category-list" key={catIndex}>
                <Link className="link category-link primary-text fs-24">
                  {category.title}
                  {allSubcategories.map((subcategory, subIndex) => (
                    <ul className="subcategory-list" key={subIndex}>
                      <Link className="link subcategory-link primary-text fs-16">
                        {subcategory.title}
                        {allTopics.map((topic, index) => (
                          <ul className="topic-list" key={index}>
                            <Link className="link topic-link light-text fs-16">
                              {topic.title}
                            </Link>
                            {/* <Link className="link topic-link more-link light-text fs-16">
                      More
                    </Link> */}
                          </ul>
                        ))}
                      </Link>
                    </ul>
                  ))}
                </Link>
              </ul>
            </div>
          ))
        )}
      </div>
    );
  }
  return <Home />;
};

export default Topics;
