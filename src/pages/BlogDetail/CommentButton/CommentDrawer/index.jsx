import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import MiniTooltip from "../../../../components/common/MiniTooltip";
import {
  getCommentRepliesByCommentId,
  getCommentsByBlogId,
} from "../../../../service";
import CommentCard from "../CommentCard";
import CommentForm from "../CommentForm";

const drawerContent = {
  width: 410,
  minWidth: 300,
  heigth: "100%",
  padding: 3,
};
const drawerTitle = {
  fontSize: 20,
  color: "#242424",
  fontWeight: 500,
  marginRight: 1,
};
export default function CommentDrawer({ blog, user }) {
  const [state, setState] = React.useState({
    right: false,
  });
  const [comments, setComments] = React.useState([]);
  const [replies, setReplies] = React.useState([]);

  const toggleDrawer = (anchor, open) => () => {
    if (open) {
      getComments();

      getReplies();
    }
    setState({ ...state, [anchor]: open });
  };

  const getComments = async () => {
    const data = await getCommentsByBlogId(blog?.id);
    setComments(data);
  };

  const getReplies = async () => {
    const commentId = comments.map((comment) => comment.id);
    const data = await getCommentRepliesByCommentId(commentId);
    setReplies(data);
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
          {`Responses (${comments?.length})`}
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
            src={user?.profileImage}
            alt="avatar"
            className="avatar"
            style={{ width: 35, height: 35, marginRight: 10 }}
          />
          <Typography className="primary-text" sx={{ fontSize: 14 }}>
            {user?.username}
          </Typography>
        </Box>
        <CommentForm placeholder={"Düşüncelerin neler?"} />
      </Box>
      <div className="light-line"></div>
      {comments.map((comment) => (
        <CommentCard key={comment.id} blog={blog} comment={comment} />
      ))}
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
                {comments?.length}
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
