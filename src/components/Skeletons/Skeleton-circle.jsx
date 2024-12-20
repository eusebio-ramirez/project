import { Skeleton } from "@mui/material";

const SkeletonItem = () => {
  return (
    <Skeleton variant="rectangular" width={80} height={24} animation="wave" />
  );
};

export default SkeletonItem;
