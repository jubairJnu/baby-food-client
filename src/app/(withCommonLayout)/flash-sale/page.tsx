import { Tprodcut } from "@/components/HomePagge/flashSell/FlashSell";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CountDown from "@/components/countDown/CountDown";

const FlashSalePage = async () => {
  const res = await fetch("https://baby-care-server.vercel.app/flash-sale", {
    cache: "no-store",
  });
  const flashProducts = await res.json();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600 * 10);
  return (
    <Container
      sx={{
        my: "20px",
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between "
          alignItems="center"
          mb={4}
        >
          <Typography variant="h5" component="h1" fontWeight={600}>
            Flash Sell
          </Typography>

          <CountDown expiryTimestamp={time} />
        </Stack>

        <Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignContent="center"
          >
            {flashProducts.map((product: Tprodcut) => (
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
                      height={200}
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

export default FlashSalePage;
