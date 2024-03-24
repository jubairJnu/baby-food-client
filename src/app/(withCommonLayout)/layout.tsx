import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default layout;
