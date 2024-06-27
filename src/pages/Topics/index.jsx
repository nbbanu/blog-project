const Topics = () => {
  return (
    <div className="topics container">
      <h2 className="topics-header primary-text text-center">Explore Topics</h2>
      <div className="light-line"></div>
      <div className="topics-lists">
        <ul className="category-list">
          <li className="link category-link">
            deneme
            <ul className="subcategory-list">
              <li className="link subcategory-link">
                test
                <ul className="topic-list">
                  <li className="link topic-link">bir</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topics;
