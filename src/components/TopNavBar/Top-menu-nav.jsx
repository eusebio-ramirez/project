import { useEffect, useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useCustomNavigate from "../../hooks/useCustomNavigate";
import useFetch from "../../hooks/useFetch";
import DrawerMenu from "./Top-menu-drawer";
import TopMenuItems from "./Top-menu-items";
import SkeletonItem from "../Skeletons/Skeleton-item";
import SkeletonCircle from "../Skeletons/Skeleton-item";

const TopNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [links, setLinks] = useState([]);
  const { goTo } = useCustomNavigate();
  const { data, loading } = useFetch(
    "https://api-project-ap9h.onrender.com/api/menu"
  );

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    if (data) {
      setLinks(data);
    }
  }, [data]);

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          backgroundColor: "primary.wine",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
          }}
          onClick={() => goTo("/")}
        >
          Proyecto Curso
        </Typography>

        {loading ? (
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
          </Box>
        ) : (
          <TopMenuItems links={links} />
        )}

        {loading ? (
          <SkeletonCircle />
        ) : (
          <>
            <DrawerMenu
              links={links}
              drawerOpen={drawerOpen}
              toggleDrawer={toggleDrawer}
            />
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
