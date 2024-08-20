import { Box, Button as MuiButton, Modal, Typography } from "@mui/material";
import MiniTooltip from "../../../components/common/MiniTooltip";
import { useState } from "react";
import FollowPersonCard from "../../../components/common/FollowPersonCard";
import Button from "../../../components/common/Button";


const ClapButton = ({ title, userName,clapCount }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const authModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "rgba(255, 255, 255, 0.95)",
    width: "100%",
    zIndex: 99,
    height: "100%",
    display: "flex",
    alignItems: "center",

    justifyContent:"center",
    overflow: "scroll",
  };
  const innerModalStyle = {
    width: "50%",
    height: "100%",
    margin: "auto",
    py: 19,
    backgorundColor: "rgba(255, 255, 255, 0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    padding:"0 20px"
  };

  return (
    <div className="clap-box flex flex-center">
      <MiniTooltip title="Clap">
        <i className="fa-solid fa-hands-clapping light-text"></i>
      </MiniTooltip>
      <MiniTooltip title="View Clap">
        <span className="light-text fs-13" onClick={handleOpen}>
          {clapCount}
        </span>
      </MiniTooltip>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={authModalStyle}>
          <Box sx={innerModalStyle} minWidth={"100%"}>
            <MuiButton
              sx={{ alignSelf: "flex-end", color: "rgba(0, 0, 0, 0.8)" }}
              onClick={handleClose}
            >
              X
            </MuiButton>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="primary-text text-center"
              sx={{ marginBottom: 5 }}
            >
              {`${title} için 165 alkış`}
            </Typography>
            <div className="follow-person-cards flex flex-column"
              style={{ gap: 30, marginBottom: 40}}
            >
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
              <FollowPersonCard
                bloggerName={userName}
                bloggerInfo={
                  "Words on self-love, self-worth, finding magic in everyday moments and trusting you are wildly deserving."
                }
                profieImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                }
              />
            </div>
            <Button title="Show more claps" className={"ghost"} size={"sm"}/>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ClapButton;
