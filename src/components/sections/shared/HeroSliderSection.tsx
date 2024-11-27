import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function HeroSliderSection() {
  return (
    <div>
      {data && (
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="hidden h-[19.44vw] w-full lg:block">
                <Image
                  src={item?.desktop}
                  alt=""
                  width={1920}
                  height={1024}
                  className="h-full bg-cover"
                />
              </div>
              <div className="block h-auto max-h-[250px] w-full lg:hidden">
                <Image
                  src={item?.mobile}
                  alt=""
                  width={1024}
                  height={1024}
                  className="h-full bg-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

const data = [
  {
    desktop: "/assets/images/banner/1-desktop.webp",
    mobile: "/assets/images/banner/1-mobile.webp",
  },
  {
    desktop: "/assets/images/banner/2-desktop.webp",
    mobile: "/assets/images/banner/2-mobile.webp",
  },
  {
    desktop: "/assets/images/banner/3-desktop.png",
    mobile: "/assets/images/banner/3-mobile.png",
  },
  {
    desktop: "/assets/images/banner/4-desktop.webp",
    mobile: "/assets/images/banner/4-mobile.webp",
  },
];
