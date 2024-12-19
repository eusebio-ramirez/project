import { Box, Typography } from "@mui/material";
import DividerCustom from "../Divider/Divider.custom";

const TitlePage = ({ title }) => {
  const isXs = window.innerWidth < 600;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isXs ? "center" : "flex-start",
        width: "100%",
        flexDirection: "column",
        my: 5,
      }}
    >
      <Typography
        sx={{
          color: "text.primary",
          fontSize: "1.5rem",
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <DividerCustom />
    </Box>
  );
};

export default TitlePage;
