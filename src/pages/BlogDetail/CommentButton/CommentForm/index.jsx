import { Box, Input } from "@mui/material";
import { useState } from "react";
import Button from "../../../../components/common/Button";

const CommentForm = ({placeholder}) => {
  const [respondText, setRespondText] = useState("");

  const multilineInput = {
    width: "100%",
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: "white",
    marginBottom: 3,
    paddingTop: 3,
  };

  const handleChange = (e) => {
    setRespondText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
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
      />
      <Box sx={{ alignSelf: "flex-end" }}>
        <Button title={"İptal Et"} className="ghost border-none" />
        <Button
          handleClick={handleSubmit}
          title={"Yanıtla"}
          className="success"
          disabled={!respondText}
        />
      </Box>
    </form>
  );
};

export default CommentForm;
