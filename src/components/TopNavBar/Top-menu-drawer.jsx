import { Collapse, Drawer, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DrawerMenu = ({ links, drawerOpen, toggleDrawer }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List sx={{ width: 250 }}>
        {links?.map((link, index) => (
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
              <ListItem button to={link.link} onClick={toggleDrawer(false)}>
                <ListItemText primary={link.nombre} />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
