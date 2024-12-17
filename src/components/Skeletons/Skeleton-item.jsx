import { Skeleton } from "@mui/material";

const SkeletonCircle = () => {
  return (
    <Skeleton
      variant="circular"
      width={40}
      height={40}
      sx={{
        display: { xs: "flex", md: "none" },
      }}
    />
  );
};

export default SkeletonCircle;
