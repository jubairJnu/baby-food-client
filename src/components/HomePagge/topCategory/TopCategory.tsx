import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import category1 from "@/assest/cereals/cereals-1.jpg";
import healthImg from "@/assest/healthy.jpg";
import pureedImg from "@/assest/pureed/pureed-2.jpg";
import processImg from "@/assest/process/process-2.jpg";
import vegitableImg from "@/assest/vegitables/vegitable-4.png";
import cerealsImg from "@/assest/cereals.jpg";
import dairyImg from "@/assest/dairy/dairy-4.jpg";
import Link from "next/link";

const TopCategory = () => {
  return (
    <Box
      sx={{
        // marginTop: "120px",
        mt: "120px",
      }}
    >
      <Container
        sx={{
          mt: "70px",
          mb: "20px",
        }}
      >
        <div>
          {/* title */}
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h5" component="h1" fontWeight={600}>
              Top Category
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={400}
              color="gray"
              mt={2}
            >
              Pick Top Pure Delights Category
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={400}
              color="gray"
            >
              For Your Baby Food
            </Typography>
          </Box>
          {/* category grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10"> */}
          <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
            mt={8}
          >
            {/* 1st */}

            <div style={{ position: "relative" }}>
              <Link href={`/baby-food?category=cereals`}>
                <Image
                  src={cerealsImg}
                  alt="category1"
                  width={300}
                  height={350}
                />
                <Typography
                  variant="h5"
                  component="p"
                  fontWeight={600}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    color: "black",
                  }}
                >
                  Cereals
                </Typography>
              </Link>
            </div>

            {/* 2nd */}

            <Box>
              <Stack
                direction={{ xs: "column", lg: "row" }}
                justifyContent="space-between"
              >
                <div style={{ position: "relative", marginRight: "16px" }}>
                  <Link href={`/baby-food?category=pureed`}>
                    <Image src={pureedImg} alt="pureed" width={250} />
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        color: "black",
                      }}
                    >
                      Pureed
                    </Typography>
                  </Link>
                </div>

                <div style={{ position: "relative" }}>
                  <Link href={`/baby-food?category=process`}>
                    <Image src={processImg} alt="process" width={250} />
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        color: "black",
                      }}
                    >
                      Process
                    </Typography>
                  </Link>
                </div>
              </Stack>

              {/* 6th */}
              <Stack direction={{ xs: "column", lg: "row" }} mt={1}>
                <div
                  style={{
                    position: "relative",
                    marginRight: "16px",
                  }}
                >
                  <Link
                    href={`/baby-food?category=vegitable`}
                    style={{ textDecoration: "none" }}
                  >
                    <Image src={vegitableImg} alt="vegitable" width={250} />
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        color: "black",
                      }}
                    >
                      Vegetable
                    </Typography>
                  </Link>
                </div>

                <div style={{ position: "relative" }}>
                  <Link href={`/baby-food?category=dairy`}>
                    <Image src={dairyImg} alt="dairy" width={250} />
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        color: "black",
                      }}
                    >
                      Dairy
                    </Typography>
                  </Link>
                </div>
              </Stack>
            </Box>

            {/* 3rd */}

            {/* 4th */}

            <div style={{ position: "relative" }}>
              <Link href={`/baby-food?category=healthy`}>
                <Image src={healthImg} alt="health" width={300} height={350} />
                <Typography
                  variant="h5"
                  fontWeight={600}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    color: "white",
                  }}
                >
                  Healthy
                </Typography>
              </Link>
            </div>

            {/* 5th */}
          </Stack>
        </div>
      </Container>
    </Box>
  );
};

export default TopCategory;
