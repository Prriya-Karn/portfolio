import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon, Star, Stars, StarsIcon } from "lucide-react";

const Testimonial = () => {
    const slides = [
        {
            img: "../../public/images/1792x960_slide3.jpg",
            title: "Eye Surgeon",
            name: "Dr. Sudhank Bharti",
            consultant:"vitreo-retina, rop and uvea",
            desc:"dr. sudhank bharti is a leading eye surgeon with over 30 years of experience in the field of ophthalmology."
        },
        {
            img: "../../public/images/1792x960_slide3.jpg",
            title: "Eye Surgeon",
            name: "Dr. Sudhank Bharti",
            consultant:"vitreo-retina, rop and uvea",
            desc:"dr. sudhank bharti is a leading eye surgeon with over 30 years of experience in the field of ophthalmology."
        },
        {
            img: "../../public/images/1792x960_slide3.jpg",
            title: "Eye Surgeon",
            name: "Dr. Sudhank Bharti",
            consultant:"vitreo-retina, rop and uvea",
            desc:"dr. sudhank bharti is a leading eye surgeon with over 30 years of experience in the field of ophthalmology."
        },
    ];

    return (
        <Fragment>
            <div className="mx-12 mt-30">
            <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-center text-5xl font-semibold'>Testimonial</h1>
            <span className='text-center bg-black text-6xl font-semibold underline w-20 mx-auto h-1'></span>
            </div>
        <div className="w-full max-w-7xl mx-auto my-16 relative">
        <style>
            {`
        .swiper-pagination-bullet-active {
            background-color: black !important;
        }
    `}
        </style>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-50 rounded-xl p-8">
                        <div className="flex bg-green-600 rounded-full justify-center">
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="rounded-lg object-contain"
                            />
                        </div>
                        <div className="text-center  mt-10">
                            <h2 className=" uppercase pl-10 mb-4">Hospital testimonials often praise compassionate and professional care from staff and doctors, highlighting specific positive interactions and successful treatments. They also frequently mention the cleanliness of the facilities, efficient insurance processes, and the overall comforting atmosphere during a difficult time, with many patients expressing gratitude for the care they received. </h2>
                            
                       
                       <div className="flex justify-center items-center mt-5 "><Star className="text-yellow-400"/>
                       <Star className="text-yellow-400"/>
                       <Star className="text-yellow-400"/>
                       <Star className="text-yellow-400"/>
                       </div>
                            </div>
                    </div>
                </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons in Center Bottom */}
            <div className="absolute top-10 -right-2 transform -translate-x-1/2 flex items-center space-x-6 z-10">
                <div className="custom-prev p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <ChevronLeftIcon className="w-6 h-6" />
                </div>
                <div className="custom-next p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <ChevronRightIcon className="w-6 h-6" />
                </div>
            </div>
        </Swiper>
    </div>
</div>
        </Fragment>
       
    );
};

export default Testimonial;
