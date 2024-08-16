import { useState } from "react";
import Button from "../../../../components/common/Button";
import CommentForm from "../CommentForm";

const ReplyCard = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="reply-card">
      <Button
        title="Reply"
        className={"ghost border-none reply-btn"}
        handleClick={() => setShowCard(!showCard)}
      />
      {showCard &&
      <div className="card-content"><CommentForm placeholder={"Nurbanu Korucu' ya yanıt veriyorsun"}/> </div>} 
    </div>
  );
};

export default ReplyCard;
