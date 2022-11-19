import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/auth/operationAuth";
import { selectUser } from "redux/auth/authSelectors";
import { selectToken } from "redux/auth/authSelectors";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export function Logout() {
    const [anchorEl, setAnchorEl] = useState(null);
    const userName = useSelector(selectUser); 
    const isLogin = useSelector(selectToken);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
    if (!isLogin) {
        navigate("/login")
    }
    }, [isLogin, navigate]);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return <AppBar position="fixed" sx={{ flexGrow: 1 }}>
        <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>           
            <Typography variant="h6" component="span">
            {userName}
            </Typography>
            <IconButton
                sx={{ml:2}}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large"/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
};