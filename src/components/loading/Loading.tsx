import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingPage = () => {
  return (
    <Box sx={{ display: "flex" }} justifyContent="center" alignItems="center">
      <CircularProgress color="info" />
    </Box>
  );
};

export default LoadingPage;
