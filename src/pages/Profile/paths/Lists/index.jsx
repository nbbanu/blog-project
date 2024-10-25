import { useEffect, useState } from "react";
import { getMyLists } from "../../../../service";
import ListCard from "./ListCard";

const Lists = () => {
  const [myLists, setMyLists] = useState([]);

  useEffect(() => {
    loadMyLists();
  }, []);
  const loadMyLists = async () => {
    const data = await getMyLists();
    setMyLists(data);
  };

  return (
    <div className="profile-page-lists flex flex-column">
      {myLists?.map((list) => (
        <ListCard
          profilImg={
            "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
          }
          list={list}
          username={list.user.username}
          listTitle={list.title}
          stories={list.blogCount}
          listId={list.id}
          isPrivate={
            list.isPrivate == true ? (
              <span>
                <i className="fa-solid fa-lock fs-12 light-text"></i>
              </span>
            ) : (
              ""
            )
          }
        />
      ))}
    </div>
  );
};

export default Lists;
