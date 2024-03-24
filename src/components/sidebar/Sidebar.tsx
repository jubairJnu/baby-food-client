import { Box, Stack } from "@mui/material";

import Link from "next/link";
import { useState } from "react";

const Sidebar = async () => {
  return (
    <Box
      sx={{
        border: "1px solid gray",
        padding: "5px",
      }}
    >
      <Stack justifyContent="space-between" gap={2}>
        <p>
          <Box component="span" fontWeight={500}>
            Categories
          </Box>
        </p>
        <Link
          href={`/baby-food?category=cereals`}
          style={{ textDecoration: "none" }}
        >
          Cereals
        </Link>

        <Link
          href={`/baby-food?category=vegitable`}
          style={{ textDecoration: "none" }}
        >
          Vegitable
        </Link>

        <Link
          href={`/baby-food?category=dairy`}
          style={{ textDecoration: "none" }}
        >
          Dairy
        </Link>

        <Link
          href={`/baby-food?category=process`}
          style={{ textDecoration: "none" }}
        >
          Process
        </Link>
        <Link
          href={`/baby-food?category=pureed`}
          style={{ textDecoration: "none" }}
        >
          Pureed
        </Link>
        <Link
          href={`/baby-food?category=healthy`}
          style={{ textDecoration: "none" }}
        >
          Healthy
        </Link>
      </Stack>
    </Box>
  );
};

export default Sidebar;
