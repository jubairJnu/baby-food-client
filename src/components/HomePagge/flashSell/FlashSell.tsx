import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { relative } from "path";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Link from "next/link";

export type Tprodcut = {
  _id: string;
  images: string;
  title: string;
  price: number;
  rating: number;
  discountPrice: string;
  flashSale: boolean;
  category: string;
  description: string;
  date: string;
};

const FlashSell = async () => {
  const res = await fetch("https://baby-care-server.vercel.app/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const flashProducts = await res.json();
  console.log(flashProducts);

  return (
    <Container
      sx={{
        my: "50px",
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between "
          alignItems="center"
        >
          <Typography variant="h5" component="h1" fontWeight={600}>
            Flash Sell
          </Typography>
          <Link href="/flash-sale">
            <Button>View All</Button>
          </Link>
        </Stack>
        {/* card */}
        <Box
          sx={{
            my: 10,
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignContent="center"
          >
            {flashProducts?.slice(0, 4).map((product: Tprodcut) => (
              <Grid item lg={3} key={product._id}>
                <Card sx={{ maxWidth: 345 }}>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Image
                      src={product.images}
                      alt="product"
                      width={500}
                      height={180}
                    />
                    <Box
                      sx={{
                        bgcolor: "#ff3d00",
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        padding: "10px 8px",
                        borderRadius: "50%",
                        color: "white",
                      }}
                    >
                      {product.discountPrice}
                    </Box>
                  </Box>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      color="text.secondary"
                      alignItems="start"
                    >
                      <AttachMoneyIcon /> {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default FlashSell;
