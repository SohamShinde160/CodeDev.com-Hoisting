import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FreeMode,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "react-loading-skeleton/dist/skeleton.css";
import CourseCard from "./CourseCard";
const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          mousewheel={{
            enabled: true,
            forceToAxis: true,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          allowSlidePrev={true}
          slidesPerView={1}
          loop={false}
          spaceBetween={20}
          pagination={true}
          modules={[Pagination, Navigation, FreeMode, Mousewheel, Keyboard]}
          className="mySwiper md:pt-5"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-size": "20px",
          }}
          freeMode={true}
          navigation={true}
          // navigation={
          //     {
          //         nextEl: ".swiper-button-next",
          //         prevEl: ".swiper-button-prev",
          //     }
          // }
          breakpoints={{
            300: { slidesPerView: 2.1, spaceBetween: 10 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} Height={"lg:h-[50px] h-[100px]"} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      ) : (
        <div className={`mt-24 p-5 flex flex-col justify-center gap-4  `}>
          <div className="flex flex-col sm:flex-col-reverse  gap-4 ">
            <p className="h-44 sm:h-24 sm:w-[60%] rounded-xl skeleton"></p>
            <p className="h-9 sm:w-[39%] rounded-xl skeleton"></p>
          </div>

          <p className="h-4 w-[55%] lg:w-[25%] rounded-xl skeleton"></p>
          <p className="h-4 w-[75%] lg:w-[30%] rounded-xl skeleton"></p>
          <p className="h-4 w-[35%] lg:w-[10%] rounded-xl skeleton"></p>

          {/* Floating Courses Card */}
          <div
            className="right-[1.5rem] top-[20%] hidden lg:block lg:absolute min-h-[450px] w-1/3 max-w-[410px] 
            translate-y-24 md:translate-y-0 rounded-xl skeleton"
          ></div>

          <p className="mt-24 h-60 lg:w-[60%] rounded-xl skeleton"></p>
        </div>
      )}
    </>
  );
};

export default CourseSlider;
