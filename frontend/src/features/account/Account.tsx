import { IconButton, Menu, MenuItem, Typography } from "@mui/material"
import Settings from '@mui/icons-material/Settings';
// @ts-ignore
import React from "react";
import { removeCookie } from "../../utils";

export const Account: React.FC<{ username: string }> = ({ username }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return <Typography variant="h5" color="whitesmoke">
        {username}
        <IconButton onClick={handleClick} color="primary" sx={{ color: "white", marginLeft: "5px" }} >
            <Settings />
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            id="basic-menu"
            open={open}
            onClose={() => setAnchorEl(null)}
        >
            <MenuItem onClick={() => { setAnchorEl(null); removeCookie(); }}>Déconnexion</MenuItem>
        </Menu>
    </Typography>
}