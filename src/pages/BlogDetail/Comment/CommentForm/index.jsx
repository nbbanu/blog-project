import { Box, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "../../../../components/common/Button";
import { makeComment } from "../../../../service";
import { toast } from "react-toastify";

const multilineInput = {
  width: "100%",
  fontSize: 14,
  fontWeight: 400,
  backgroundColor: "white",
  marginBottom: 3,
  paddingTop: 3,
};

const CommentForm = ({ blog, user, comment, placeholder, cancelType }) => {
  const [respondText, setRespondText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    setRespondText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!respondText.trim()) return;
    const body = {
      comment: respondText,
      blogId: blog?.id,
      parentCommentId: comment?.id ? comment?.id : null,
    };

    makeComment(body)
      .then((res) => {
        toast.success("Yorumun başarıyla yayınlandı", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setRespondText("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const closeCard = (e) => {
    e.preventDefault();
    setRespondText("");
    if (cancelType == "closeAndClear") {
      setIsFormVisible(false);
    }
  };

  return (
    <>
      {isFormVisible && (
        <Box
          sx={{
            boxShadow: "0px 1px 4px rgba(0,0,0, 0.2)",
            marginTop: 3,
            padding: "14px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={user?.profileImage}
              alt="avatar"
              className="avatar"
              style={{ width: 35, height: 35, marginRight: 10 }}
            />
            <Typography className="primary-text" sx={{ fontSize: 14 }}>
              {user?.username}
            </Typography>
          </Box>
          <form className="flex flex-column" id="comment-form">
            <Input
              sx={multilineInput}
              aria-label="Demo input"
              multiline
              disableUnderline
              placeholder={placeholder}
              minRows={3}
              variant="standard"
              onChange={handleChange}
              value={respondText}
            />
            <Box sx={{ alignSelf: "flex-end" }}>
              <Button
                title={"İptal Et"}
                handleClick={closeCard}
                className="ghost border-none"
              />
              <Button
                handleClick={handleSubmit}
                title={"Yanıtla"}
                className="success"
                disabled={!respondText}
              />
            </Box>
          </form>
        </Box>
      )}
    </>
  );
};

export default CommentForm;
