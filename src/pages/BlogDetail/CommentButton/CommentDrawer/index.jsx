import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import MiniTooltip from "../../../../components/common/MiniTooltip";
import CommentCard from "../CommentCard";
import CommentForm from "../CommentForm";

export default function CommentDrawer({ commentCount, blog }) {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const drawerContent = {
    minWidth: 300,
    maxWidth: 450,
    heigth: "100%",
    padding: 3,
  };
  const drawerTitle = {
    fontSize: 20,
    color: "#242424",
    fontWeight: 500,
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
            {blog?.username}
          </Typography>
        </Box>
        <CommentForm placeholder={"Düşüncelerin neler?"}/>
      </Box>
      <div className="light-line"></div>
      <CommentCard
        blog={blog}
        commentDate={"about 1 month ago"}
        commentCardContent="Your point is the comparison of threaded parallelism vs. event-based pseudo-parallelism.
        If you are stuck with a single thread and want to not wait for I/O wait, then you can switch to something else. That's what the JS Event Loop does."
        replyCount={"4"}
        clapCount={"205"}
      />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Typography onClick={toggleDrawer(anchor, true)}>
            <MiniTooltip title="Respond">
              <i
                className="fa-regular fa-comment light-text comment-icon"
                style={{ marginRight: 5 }}
              ></i>
              <span className="light-text fs-13 comment-count">
                {commentCount}
              </span>
            </MiniTooltip>
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
