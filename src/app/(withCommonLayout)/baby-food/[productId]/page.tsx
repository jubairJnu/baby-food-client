import { Tprodcut } from "@/components/HomePagge/flashSell/FlashSell";
import {
  Box,
  Container,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
type TParams = {
  params: {
    productId: string;
  };
};
// ssg

export const generateStaticParams = async () => {
  const res = await fetch("https://baby-care-server.vercel.app/products");
  const prodcuts = await res.json();
  console.log(prodcuts);
  return prodcuts.slice(0, 10).map((item: Tprodcut) => ({
    productId: item._id,
  }));
};

const SingleProductPage = async ({ params }: TParams) => {
  console.log(params.productId);
  const res = await fetch(
    `https://baby-care-server.vercel.app/products/${params.productId}`
  );
  const product = await res.json();

  return (
    <div>
      <Container>
        <div className="mt-20">
          {/* 1st part iamge and title */}
          <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* images */}
            <div>
              <Image
                src={product.images}
                alt="product"
                width={500}
                height={280}
              />
            </div>
            {/* infos */}
            <div>
              <Typography variant="h6" component="p" fontWeight={600}>
                {" "}
                {product.title}{" "}
              </Typography>
              <Stack direction="row" alignItems="center">
                <Typography variant="h6" component="p" fontWeight={400}>
                  {" "}
                  {product.price} |
                </Typography>
                <Rating name="read-only" value={product?.rating} readOnly />
                <Box component="span">( {product.rating} rating) </Box>
              </Stack>
              <Divider
                sx={{
                  marginTop: "30px",
                }}
              />
              <Typography variant="h6" component="p" fontWeight={400}>
                {" "}
                Category: {product.category}
              </Typography>
            </div>
          </Stack>
          {/* 2nd part description */}
        </div>
      </Container>
      <Box
        sx={{
          marginTop: "120px",
          bgcolor: "#EEEEEE",
          padding: "10px",
          marginBottom: "40px",
        }}
      >
        <Container>{product.description}</Container>
      </Box>
    </div>
  );
};

export default SingleProductPage;
