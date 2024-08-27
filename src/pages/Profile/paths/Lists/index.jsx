import ListCard from "./ListCard";

const Lists = () => {
  return (
    <div className="profile-page-lists">
      <ListCard
        profilImg={
          "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
        }
        userName={"Banubkrli"}
        listTitle={"Reading List"}
        stories={"5"}
      />
    </div>
  );
};

export default Lists;
