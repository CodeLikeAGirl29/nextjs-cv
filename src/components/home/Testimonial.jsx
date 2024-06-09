"use client";

import { testimonials } from "@/src/staticData/home/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const navigateToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const navigateToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    const realIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setActiveSlide(realIndex);
  };

  return (
    <div
      data-scroll-index="7"
      id="testimonial"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading {...testimonials?.testimonialsHeading} />

        <div className="mt-12 testimonial-slider">
          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                breakpoints={{
                  350: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                  waitForTransition: false,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {testimonials?.testimonialsData?.map((testimonial, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-slide">
                      <div className="text-center slider-inner md:px-5">
                        <div className="image flex-center">
                          <Image
                            width={90}
                            height={90}
                            style={{ objectFit: "contain" }}
                            src={testimonial?.image}
                            alt={testimonial?.name}
                          />
                        </div>
                        <div className="mt-6 mb-3 text-center rating text-lightOrange">
                          {Array.from({ length: 5 }).map((item, i) => (
                            <MdOutlineStarPurple500 size={18} key={i} />
                          ))}
                        </div>
                        {testimonial?.desc}
                        <div className="mt-5 text-center author">
                          <h6 className="text-lg font-medium text-black dark:text-white">
                            {testimonial?.name}
                          </h6>
                          <p className="text-sm">{testimonial?.position}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="testimonial-slider-navigation flex justify-center items-center gap-2.5 mt-10 lg:mt-12">
              <button
                className="group transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                aria-label="Previous"
                onClick={navigateToPreviousSlide}
              >
                <BsArrowLeft size={18} className="group-hover:text-white" />
              </button>
              <div className="text-sm font-light text-center text-black dark:text-white counter w-7">
                {activeSlide + 1}/{testimonials?.testimonialsData?.length}
              </div>
              <button
                className="group transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                aria-label="Next"
                onClick={navigateToNextSlide}
              >
                <BsArrowRight size={18} className="group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
