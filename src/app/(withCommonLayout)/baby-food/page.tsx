import { Tprodcut } from "@/components/HomePagge/flashSell/FlashSell";
import Sidebar from "@/components/sidebar/Sidebar";
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
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";

interface ISearchParams {
  searchParams: ReadonlyURLSearchParams;
  category: string;
}

const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  let products = [];
 

  if (searchParams.category) {
    const res = await fetch(
      `https://baby-care-server.vercel.app/category-product?category=${searchParams.category}`,
      {
        cache: "no-store",
      }
    );

    products = await res.json();
   
  } else {
    const res = await fetch("https://baby-care-server.vercel.app/products", {
      cache: "no-store",
    });

    products = await res.json();
  }

  return (
    <Container
      sx={{
        marginTop: "40px",
      }}
    >
      <div>
        <Stack direction="row" justifyContent="space-between" gap={1}>
          {/* side bar here */}
          <Box
            sx={{
              bgcolor: "#EEEEEE",
            }}
          >
            <Sidebar />
          </Box>
          {/* card or product here */}
          <div className=" grid col-span-4">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignContent="center"
            >
              {products.map((product: Tprodcut) => (
                <Grid item xs={12} lg={4} key={product._id}>
                  <Link
                    href={`/baby-food/${product._id}`}
                    style={{ textDecoration: "none" }}
                  >
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
                        <Typography gutterBottom variant="h5" component="p">
                          {product.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={500}
                          color="text.secondary"
                          alignItems="start"
                          fontStyle="normal"
                        >
                          $ {product.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </Stack>
      </div>
    </Container>
  );
};

export default AllProductsPage;
