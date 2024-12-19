import { Box, LinearProgress, Typography } from "@mui/material";

const MessageBox = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        height: "100%",
        gap: 2,
        margin: "auto",
        minHeight: "80vh",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      <Typography
        variant="h4"
        sx={{
          color: "text.primary",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default MessageBox;
