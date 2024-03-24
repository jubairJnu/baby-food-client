import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assest/logo-01.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#00224D",
        paddingTop: "10px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: { md: "flex" },
          }}
          justifyContent="space-between"
          alignItems="start"
        >
          {/* one div */}
          <Box>
            <Typography
              variant="h4"
              component="p"
              color="white"
              fontWeight={600}
            >
              Baby Luxe
            </Typography>
          </Box>

          {/* 2nd div */}

          <Stack>
            <Typography
              variant="h6"
              component="p"
              fontWeight={500}
              color="#EEEEEE"
            >
              Products
            </Typography>

            {/* producs list */}

            <Typography
              style={{ textDecoration: "none" }}
              component={Link}
              href="/popular-product"
              color="#DDDDDD"
            >
              Most Popular
            </Typography>

            <Typography
              component={Link}
              href="/baby-food"
              color="#DDDDDD"
              style={{ textDecoration: "none" }}
            >
              Categories
            </Typography>
          </Stack>
          {/* 3rd */}
          <Stack>
            <Typography
              variant="h6"
              component="p"
              fontWeight={500}
              color="#EEEEEE"
            >
              Contact
            </Typography>
            <Typography
              style={{ textDecoration: "none" }}
              component={Link}
              href="/about-us"
              color="#DDDDDD"
            >
              About Us
            </Typography>

            <Typography
              style={{ textDecoration: "none" }}
              component={Link}
              href="/contact-us"
              color="#DDDDDD"
            >
              Contact Us
            </Typography>
            <Typography
              style={{ textDecoration: "none" }}
              component={Link}
              href="/customer-care"
              color="#DDDDDD"
            >
              Customer Care
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
