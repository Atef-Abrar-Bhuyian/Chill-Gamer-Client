import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import images
import godOfWar from "../../assets/images/godofwarragnarok.jpg";
import rdr2 from "../../assets/images/rdr2.jpeg";
import witcher from "../../assets/images/witchersilder.jpg";
import lastofus from "../../assets/images/lastofus.jpg";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        {/* swiperSlide 1 */}
        <SwiperSlide className="p-8 animate__animated animate__fadeIn">
          <div
            className="flex items-center justify-center w-full h-full rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${godOfWar})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
            }}
          >
            <div className="text-center ">
              <h2 className="text-2xl md:text-5xl text-blue-400 font-bold  animate__animated animate__slideInLeft">
                God OF War Ragnarok
              </h2>
              <p className=" md:text-lg w-9/12 md:w-1/2 mx-auto pt-2 text-white animate__animated animate__slideInRight">
                God Of War Ragnarok offers an epic journey through Norse
                mythology, delivering an unforgettable experience
              </p>
              <button className="animate__animated animate__backInUp mt-2 btn bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-950 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                Explore Review
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* SwiperSlide 2 */}
        <SwiperSlide className="p-8 animate__animated animate__fadeIn ">
          <div
            className="flex items-center justify-center bg-cover bg-opacity-0 w-full h-full rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${rdr2})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
            }}
          >
            <div className="text-center ">
              <h2 className="text-2xl md:text-5xl text-orange-700 font-bold  animate__animated animate__slideInLeft">
                Red Dead Redemption 2
              </h2>
              <p className=" md:text-lg w-9/12 mx-auto pt-2 text-white animate__animated animate__slideInRight">
                Red Dead Redemption 2 immerses players in the rugged landscapes
                of the American frontier, providing a captivating and
                unforgettable adventure
              </p>
              <button className="animate__animated animate__backInUp mt-2 btn bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-950 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                Explore Review
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* SwiperSlide 3 */}
        <SwiperSlide className="p-8 animate__animated animate__fadeIn ">
          <div
            className="flex items-center justify-center bg-cover bg-opacity-0 w-full h-full rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${witcher})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
            }}
          >
            <div className="text-center ">
              <h2 className="text-2xl md:text-5xl text-red-600 font-bold  animate__animated animate__slideInLeft">
                The Witcher 3: Wild Hunt
              </h2>
              <p className=" md:text-lg w-9/12 mx-auto pt-2 text-white animate__animated animate__slideInRight">
                The Witcher 3: Wild Hunt takes players on a thrilling journey
                through a richly detailed fantasy world, offering an
                unparalleled and immersive experience
              </p>
              <button className="animate__animated animate__backInUp mt-2 btn bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-950 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                Explore Review
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* SwiperSlider 4 */}
        <SwiperSlide className="p-8 animate__animated animate__fadeIn ">
          <div
            className="flex items-center justify-center bg-cover bg-opacity-0 w-full h-full rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${lastofus})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
            }}
          >
            <div className="text-center ">
              <h2 className="text-2xl md:text-5xl text-violet-500 font-bold  animate__animated animate__slideInLeft">
                The Witcher 3: Wild Hunt
              </h2>
              <p className=" md:text-lg w-9/12 mx-auto pt-2 text-white animate__animated animate__slideInRight">
                The Witcher 3: Wild Hunt takes players on a thrilling journey
                through a richly detailed fantasy world, offering an
                unparalleled and immersive experience
              </p>
              <button className="animate__animated animate__backInUp mt-2 btn bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-950 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                Explore Review
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
