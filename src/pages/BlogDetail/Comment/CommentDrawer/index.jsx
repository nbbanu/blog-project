import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { getCommentsByBlogId } from "../../../../service";
import CommentCard from "../CommentCard";
import CommentForm from "../CommentForm";
import MiniTooltip from "../../../../components/common/MiniTooltip";
import Loader from "../../../../components/common/Loader";

const drawerContent = {
  width: 410,
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
  const [loading, setLoading] = React.useState(false);

  const toggleDrawer = (anchor, open) => () => {
    if (open) {
      getComments();
    }
    setState({ ...state, [anchor]: open });
  };

  const getComments = async () => {
    setLoading(true);
    const data = await getCommentsByBlogId(blog?.id);
    setComments(data);
    setLoading(false);
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
          {`Yorumlar (${comments?.length})`}
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
      <CommentForm
        blog={blog}
        user={user}
        comment={Math.floor(
          Math.random() * Math.floor(Math.random() * Date.now())
        )}
        placeholder={"Düşüncelerin neler?"}
        cancelType={"clear"}
      />
      <div className="light-line"></div>
      <Box className="comment-cards">
        {loading ? (
          <Loader />
        ) : (
          comments.map((comment) => (
            <CommentCard key={comment.id} blog={blog} comment={comment} />
          ))
        )}
      </Box>
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
