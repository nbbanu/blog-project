import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  getAllSubcategories,
  getAllTopics,
} from "../../service";
import SearchInput from "../../components/common/SearchInput";

const Topics = () => {
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
  return (
    <div className="topics container">
      <h2 className="topics-header primary-text text-center">Explore Topics</h2>
      <SearchInput title={"Tüm Konuları Ara"}/>
      <div className="light-line"></div>

      {allCategories.map((category) => (
        <div className="topics-lists">
          <ul className="category-list">
            <Link className="link category-link primary-text fs-24">
              {category.title}
              {allSubcategories.map((subcategory) => (
                <ul className="subcategory-list">
                  <Link className="link subcategory-link primary-text fs-16">
                    {subcategory.title}
                    {allTopics.map((topic,id) => (
                      <ul className="topic-list">
                        <Link className="link topic-link light-text fs-16">
                          {topic.title}
                        </Link>
                        {/* <li className="link topic-link more-link light-text fs-16">
                          More
                        </li> */}
                      </ul>
                    ))}
                  </Link>
                </ul>
              ))}
            </Link>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Topics;
