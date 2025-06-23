import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tolu A.",
    message:
      "The Wash & Fold package is a lifesaver! My clothes come back neatly folded every time.",
    packageUsed: "WASH & FOLD",
  },
  {
    name: "Mrs. Chika N.",
    message:
      "My silk blouses and suits are handled with so much care. I love how my clothes feel brand new.",
    packageUsed: "Premium",
  },
  {
    name: "David O.",
    message:
      "I use the Deluxe plan weekly and it’s worth every naira. My clothes are always clean and crisp.",
    packageUsed: "Deluxe",
  },
  {
    name: "Zainab K.",
    message:
      "customer service to delivery, everything is top-notch. I used to hate laundry now I dont worry!",
    packageUsed: "Premium",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-green-50 px-10 md:px-30 py-10 font-poppins">
      <h2 className="text-2xl font-bold text-center mb-8 text-[#fb8c3b]">
        What Our Customers Say
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        speed={1000}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md p-6 h-full mb-10 mt-10 font-poppins">
              <Quote className="text-primary" />
              <p className="text-gray-700 italic mb-4">{testimonial.message}</p>
              <div>
                <p className="font-semibold text-[#03170a]-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.packageUsed} Package
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
