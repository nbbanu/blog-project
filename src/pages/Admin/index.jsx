import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react";
import MiniDrawer from "../../components/common/MiniDrawer";

const Admin = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
        {/* <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon/>
        </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} textAlign={"center"} width={250} role={"presentation"}>
          <Typography variant="h6" component={"div"} color={"red"}>
            Side Panel
          </Typography>
        </Box>
      </Drawer> */}
      <MiniDrawer/>
    </div>
  );
};

export default Admin;
