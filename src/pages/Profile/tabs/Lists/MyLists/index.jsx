import { useEffect, useState } from "react";
import { getLists } from "../../../../../service";
import ListCard from "../../../partials/ListCard";
import { useParams } from "react-router-dom";

const MyLists = () => {
  const [myLists, setMyLists] = useState([]);
  const params = useParams();

  useEffect(() => {
    loadMyLists();
  }, []);

  const loadMyLists = async () => {
    const data = await getLists(params.userId);
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
