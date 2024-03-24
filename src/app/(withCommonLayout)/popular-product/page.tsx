import { Tprodcut } from "@/components/HomePagge/flashSell/FlashSell";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const PopularProducts = async () => {
  const res = await fetch(
    "https://baby-care-server.vercel.app/popular-products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const popularProducts = await res.json();
  return (
    <Container>
      <div>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          mb={3}
          mt={1}
          fontWeight={600}
        >
          Our Popular Products
        </Typography>
        <Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignContent="center"
          >
            {popularProducts.map((product: Tprodcut) => (
              <Grid item lg={4} key={product._id}>
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
                      height={280}
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
                      {product.rating}
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
                      $ {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Container>
  );
};

export default PopularProducts;
