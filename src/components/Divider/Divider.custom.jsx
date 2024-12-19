import { Box } from "@mui/material";

const DividerCustom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        flexDirection: "row",
        marginLeft: "auto",
        width: "100%",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "3%",
          backgroundColor: "primary.main",
          height: "10px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          width: "97%",
          backgroundColor: "primary.main",
          height: "1px",
        }}
      />
    </Box>
  );
};

export default DividerCustom;
