import React from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

const Carousel = () => {
  const settings = {
    // className: "center",
    // centerPadding: "60px",
    // dots: true,
    fade: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable:true
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 8000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <>
      <Slider {...settings}>
        <section className="relative h-screen bg-[#03d8f3]">
          <img
            src="/images/pexels-photo-8853536-modified.jpeg"
            alt=""
            className="object-cover object-center w-full h-full opacity-20"
          />
          <div className="absolute inset-0">
            <InView>
              {({ ref, inView, entry }) => (
                <div
                  ref={ref}
                  className="flex items-center justify-center space-x-12"
                >
                  {inView ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: -80 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1 },
                        }}
                        className="relative "
                      >
                        <div className="pl-20 space-y-4">
                          <div className="flex items-center justify-end h-10 p-3 text-xl font-bold text-white uppercase w-52 bg-gradient-to-r from-sky-700 to-blue-900">
                            reasons
                          </div>
                          <div className="flex items-center justify-end h-10 p-3 text-xl font-bold text-white uppercase w-96 bg-gradient-to-r from-sky-700 to-blue-900 whitespace-nowrap">
                            why you should choose
                          </div>
                          <div className="flex items-center justify-end h-10 p-3 text-xl font-bold text-white uppercase animate-wiggle w-60 bg-gradient-to-r from-gray-600 to-gray-800">
                            cambridge
                          </div>
                        </div>
                        <div className="absolute left-0 h-52 w-52 -top-3">
                          <div className="relative flex items-center justify-center text-center bg-white rounded-full h-44 w-44">
                            <div className="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-blue-500">
                              5
                            </div>
                          </div>
                          {/* <span className="absolute inline-flex border border-white rounded-full opacity-75 right-16 top-7 h-28 w-28 animate-slow"></span>
            <span className="absolute inline-flex border border-white rounded-full opacity-75 right-16 top-7 h-28 w-28 animate-slow2"></span>
            <span className="absolute inline-flex border border-white rounded-full opacity-75 right-16 top-7 h-28 w-28 animate-slow"></span>
            <span className="absolute inline-flex border border-white rounded-full opacity-75 right-16 top-7 h-28 w-28 animate-slow2"></span> */}
                        </div>
                      </motion.div>
                      <div className="space-y-5">
                        <motion.h1
                          initial={{ opacity: 0, x: -80 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                          }}
                          className="text-3xl font-bold text-white capitalize"
                        >
                          With us your satisfaction is guaranteed{" "}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: -80 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 },
                          }}
                          className="text-blue-100 "
                        >
                          You will be able to find 5 most important things for
                          your marketplace below.
                        </motion.p>
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </InView>
          </div>
        </section>
        <section className="relative h-screen bg-[#0a667f]">
          <img
            src="https://images.pexels.com/photos/4058530/pexels-photo-4058530.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="object-cover object-center w-full h-full opacity-20"
          />
        </section>
      </Slider>
      <button className="relative w-40 p-4 text-white before:absolute before:inset-0 before:focus:opacity-30 before:bg-slate-200 before:h-full before:w-full before:rounded-full before:focus:rounded-none before:transition-all before:scale-0 focus:before:scale-100  bg-emerald-500 hover:text-gray-700 hover:bg-white">
        Hover me
      </button>
    </>
  );
};

export default Carousel;
