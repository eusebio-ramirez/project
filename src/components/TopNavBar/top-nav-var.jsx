import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fecthData } from "../../json/headerLinks";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Collapse,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TopNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [links, setLinks] = useState([]);

  const handleMenuOpen = (event, submenu = []) => {
    setAnchorEl(event?.currentTarget || null);
    setSubmenuItems(submenu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenuItems([]);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const getLinks = async () => {
    const response = await fecthData();
    const data = await response;
    setLinks(data);
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Proyecto Curso
        </Typography>

        {/* Menú para pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {links?.map((link, index) => (
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

        {/* Botón para abrir el Drawer */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer para pantallas pequeñas */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.submenu ? (
                <>
                  <ListItem button onClick={() => handleSubmenuToggle(index)}>
                    <ListItemText primary={link.nombre} />
                    {openSubmenu === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItem>
                  <Collapse
                    in={openSubmenu === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {link.submenu.map((submenu, subIndex) => (
                        <ListItem
                          button
                          key={subIndex}
                          component={Link}
                          to={submenu.subMenuUrl}
                          sx={{ pl: 4 }}
                          onClick={toggleDrawer(false)}
                        >
                          <ListItemText primary={submenu.subMenuNombre} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem
                  button
                  component={Link}
                  to={link.link}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={link.nombre} />
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default TopNavBar;
