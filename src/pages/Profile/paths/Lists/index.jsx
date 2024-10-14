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
       userName={list.user.name}
       listTitle={list.title}
       stories={list.blogCount}
      //  id={list.id}

     />
     ))}
    </div>
  );
};

export default Lists;
