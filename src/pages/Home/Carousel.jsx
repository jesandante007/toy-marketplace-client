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
    <div>
      <p className="text-center text-5xl text-tdeep font-semibold mt-20 mb-10">
        Top Selling Car's
      </p>
      <div className="my-bg p-10" data-aos="flip-left">
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
