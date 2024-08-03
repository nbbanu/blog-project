// const CommentDrawer = ({open,toggleDrawer}) => {
//   return (
//     <>
//     {open && (
//        <div className="comment-drawer">
//      burası drawer
//        </div>
//     )}
//     </>

//   );
// };

// export default CommentDrawer;

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import BasicTooltip from "../../../../components/common/BasicTooltip";
import { Button, Input, Typography } from "@mui/material";

export default function CommentDrawer({ commentCount }) {
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
    marginTop:4,
    width: "100%",
    fontSize: 18,
    fontWeight: 400,
    padding: "8px 12px",
    backgroundColor: "white",
    boxShadow: "0px 2px 4px rgba(0,0,0, 0.5)",
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
      <Box>
        <Input
          sx={multilineInput}
          aria-label="Demo input"
          multiline
          placeholder="Düşüncelerin neler?"
          minRows={5}
        />
      </Box>
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
