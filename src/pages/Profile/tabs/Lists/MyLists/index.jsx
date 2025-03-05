import { useEffect, useState } from "react";
import { getLists } from "../../../../../service";
import ListCard from "../../../partials/ListCard";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const MyLists = () => {
  const [myLists, setMyLists] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMyLists();
  }, []);

  const loadMyLists = async () => {
    setIsLoading(true);
    const data = await getLists(params.userId);
    let sortedLists = data?.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setMyLists(sortedLists);
    setIsLoading(false);

  };

  return (
    <div>
      {isLoading ? (
        Array.from({ length: myLists.length }).map(() => (
          <div style={{display:"flex",alignItems:"center", height:144, marginBlock:30}}>
            <Skeleton width={737} style={{height:230}}/>           
          </div>
        ))
      ) : (
        <div className="profile-page-lists flex flex-column">
          {myLists?.map((list) => (
            <ListCard key={list.id} list={list} loadMyLists={loadMyLists} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLists;
