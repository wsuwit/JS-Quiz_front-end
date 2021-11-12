import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { removeToken } from "../services/localStorage";
import avatar from "./images/Avatar.jpg";
import { useHistory } from "react-router-dom";

function DropBarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setUser } = useContext(AuthContext);
  const open = Boolean(anchorEl);

  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickLogout = () => {
    setUser(null);
    removeToken();
    history.push("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w3-right w3-mobile">
      <Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="User Menu">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar
                sx={{ width: 43, height: 43 }}
                // src={userById.profileImage}
                src={avatar}
              ></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          disableScrollLock={true}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {/* <MenuItem
          onClick={() => {
            history.push({
              pathname: `/my-profile`,
              state: {
                alignmentHistory: "myProfile"
              }
            });
          }}
          >
            My Profile
          </MenuItem> */}
          <Divider />
          <MenuItem onClick={handleClickLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Fragment>
    </div>
  );
}

export default DropBarMenu;
