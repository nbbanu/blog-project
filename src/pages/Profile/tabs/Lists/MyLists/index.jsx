import { useEffect, useState } from "react";
import { getMyLists } from "../../../../../service";
import ListCard from "../../../partials/ListCard";

const MyLists = () => {
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
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
};

export default MyLists;
