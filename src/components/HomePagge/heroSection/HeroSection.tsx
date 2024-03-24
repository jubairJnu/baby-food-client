"use client";

import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import carousel1 from "@/assest/carousel-1.jpg";
import carousel2 from "@/assest/carousel-2.jpg";
import carousel3 from "@/assest/carousel-3.jpg";
import carousel4 from "@/assest/carousel-4.jpg";
import carousel5 from "@/assest/carousel-5.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: "40px 0",
        backgroundColor: "#FEE2E2",
      }}
    >
      <Box
        sx={{
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        {/* text here */}
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="primary.main"
            mb={2}
          >
            Tiny Tummies, Big Nutrition Our
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={600}>
            <span className="text-green-600">Promise</span> of Nourishing Baby
            Meals
          </Typography>
        </Box>
        {/* carousel */}
        <Box
          sx={{
            margin: "0 auto",
            // backgroundColor: "green",
            padding: "2px 3px",
            marginTop: "40px",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Swiper
            speed={1200}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper "
            breakpoints={{
              // when window width is >= 640px (sm)
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px (md)
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            autoplay={{ delay: 3000, waitForTransition: true }}
          >
            <SwiperSlide>
              <Box
                sx={{
                  border: "0",
                  borderRadius: "10px",
                  width: "300px",
                  height: "200px",
                }}
              >
                <Image
                  src={carousel1}
                  alt="carousel"
                  width={330}
                  height={300}
                />
                {/* <h1 className="">Nutritious food</h1> */}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={carousel2} alt="carousel" width={330} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={carousel3} alt="carousel" width={330} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={carousel4} alt="carousel" width={330} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={carousel5} alt="carousel" width={330} height={200} />
            </SwiperSlide>
          </Swiper>
        </Box>

        {/* main box close */}

        {/*  */}
      </Box>
    </Box>
  );
};

export default HeroSection;
