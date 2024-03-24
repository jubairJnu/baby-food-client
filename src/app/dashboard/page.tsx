import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "@/assest/logo-01.svg";
import Image from "next/image";
import { Tprodcut } from "@/components/HomePagge/flashSell/FlashSell";
import Link from "next/link";

const Dashboard = async () => {
  const res = await fetch("https://baby-care-server.vercel.app/products");

  const products = await res.json();

  return (
    <div>
      <Box
        sx={{
          bgcolor: "#EEEEEE",
          paddingLeft: "40px",
          width: "100%",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Box
          sx={{
            bgcolor: "#EEEEEE",
            maxWidth: "20%",
            minHeight: "100vh",
          }}
        >
          <Typography
            bgcolor="#C0C0C0"
            padding={{ md: "10px" }}
            sx={{
              paddingLeft: { xs: "5px", md: "40px" },
            }}
            mt={2}
            color="black"
          >
            All Products
          </Typography>
        </Box>
        {/* table */}
        <Box
          sx={{
            // maxWidth: "80%",
            width: { xs: "100%", lg: "900px" },
          }}
          mx="auto"
          mt={2}
        >
          <TableContainer component={Paper}>
            <Table
              aria-label="a dense table"
              sx={{
                width: "100%",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>SL NO</TableCell>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Product ID</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((prodcut: Tprodcut, index: number) => (
                  <TableRow
                    key={prodcut._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          src={prodcut.images}
                          alt="prodcut"
                          width={40}
                          height={30}
                        />
                        {prodcut.title}
                      </Stack>
                    </TableCell>
                    <TableCell align="right">{prodcut.category}</TableCell>
                    <TableCell align="right">{prodcut._id}</TableCell>
                    <TableCell align="right">{prodcut.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </div>
  );
};

export default Dashboard;
