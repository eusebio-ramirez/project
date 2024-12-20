import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopMenuItems = ({ links }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);
  const handleMenuOpen = (event, submenu = []) => {
    setAnchorEl(event?.currentTarget || null);
    setSubmenuItems(submenu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenuItems([]);
  };

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {links &&
        links?.map((link, index) => (
          <React.Fragment key={index}>
            {link.submenu ? (
              <>
                <Button
                  color="inherit"
                  onClick={(event) => handleMenuOpen(event, link.submenu)}
                >
                  {link.nombre}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl && submenuItems === link.submenu)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  {submenuItems.map((submenu, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      to={submenu.subMenuUrl}
                      onClick={handleMenuClose}
                    >
                      {submenu.subMenuNombre}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button color="inherit" component={Link} to={link.link}>
                {link.nombre}
              </Button>
            )}
          </React.Fragment>
        ))}
    </Box>
  );
};

export default TopMenuItems;
