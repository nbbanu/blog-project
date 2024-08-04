import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import BasicTooltip from "../../../../components/common/BasicTooltip";
import { Input, Typography } from "@mui/material";
import Button from "../../../../components/common/Button";
import CommentCard from "../CommentCard";

export default function CommentDrawer({ commentCount, userName }) {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });
  const [respondText, setRespondText] = React.useState("");

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const handleChange = (e) => {
    setRespondText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const drawerContent = {
    minWidth: 250,
    width: 420,
    heigth: "100%",
    padding: 3,
  };
  const drawerTitle = {
    fontSize: 20,
    color: "#242424",
    fontWeight: 500,
  };
  const multilineInput = {
    width: "100%",
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: "white",
    marginBottom: 3,
    paddingTop: 3,
  };
  const context = (anchor) => (
    <Box sx={drawerContent} role="presentation">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography className="flex flex-center" variant="h2" sx={drawerTitle}>
          Responses
          <Typography sx={drawerTitle}>({commentCount})</Typography>
        </Typography>
        <Typography
          onClick={toggleDrawer(anchor, false)}
          sx={{
            fontSize: 24,
            color: "#6B6B6B",
            fontWeight: 200,
            cursor: "pointer",
          }}
        >
          X
        </Typography>
      </Box>
      <Box
        sx={{
          boxShadow: "0px 1px 4px rgba(0,0,0, 0.2)",
          marginTop: 3,
          padding: "14px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
            alt="avatar"
            className="avatar"
            style={{ width: 35, height: 35, marginRight: 10 }}
          />
          <Typography className="primary-text" sx={{ fontSize: 14 }}>
            {userName}
          </Typography>
        </Box>
        <form className="flex flex-column" id="comment-form">
          <Input
            sx={multilineInput}
            aria-label="Demo input"
            multiline
            disableUnderline
            placeholder="Düşüncelerin neler?"
            minRows={3}
            variant="standard"
            onChange={handleChange}
          />
          <Box sx={{ alignSelf: "flex-end" }}>
            <Button title={"Cancel"} className="ghost border-none" />
            <Button
              handleClick={handleSubmit}
              title={"Respond"}
              className="success"
              disabled={respondText ? false : true}
            />
          </Box>
        </form>
      </Box>
      <div className="light-line"></div>
      <CommentCard userName={userName}/>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Typography onClick={toggleDrawer(anchor, true)}>
            <BasicTooltip title="Respond">
              <i
                className="fa-regular fa-comment light-text"
                style={{ marginRight: 5 }}
              ></i>
              <span className="light-text fs-13 comment-count">
                {commentCount}
              </span>
            </BasicTooltip>
          </Typography>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {context(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
