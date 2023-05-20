import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/cars/car-2.jpeg";
import img2 from "../../assets/cars/car-7.jpg";
import img3 from "../../assets/cars/car-8.jpg";
import img4 from "../../assets/cars/truck-2.jpeg";
import img5 from "../../assets/cars/truck-3.jpeg";
import img6 from "../../assets/cars/truck-5.jpeg";
import img7 from "../../assets/cars/fire-truck-1.jpeg";
import img8 from "../../assets/cars/fire-truck-2.jpeg";
import img9 from "../../assets/cars/fire-truck-5.jpg";

const Carousel = () => {
  return (
    <div data-aos="flip-left">
      <p className="text-center text-4xl lg:text-5xl text-tdeep font-semibold mt-20 mb-10">
        Top Selling Car's
      </p>
      <div className="my-bg p-5 lg:p-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
