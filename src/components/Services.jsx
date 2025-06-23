import React from "react";

const services = [
  {
    image: "./pickup-laundryaid.jpg",
    tiltle: "We Pick Up",
    description:
      "We come to your doorstep to collect your laundry, so you don’t have to lift a finger.",
  },
  {
    image: "./washandfold-laundryaid.jpg",
    tiltle: "We Wash",
    description:
      "Your laundry gets our full attention. We wash and care for your clothes like they’re our own.",
  },
  {
    image: "./dry-cleaning-laundryaid.jpg",
    tiltle: "We Dry Clean",
    description: "Expert dry cleaning for your delicate and special garments",
  },
];

function Services() {
  return (
    <section className="bg-white flex flex-col justify-center gap-8 px-10 md:px-30 py-10 font-poppins">
      <h2 className="font-semibold text-[#127733] text-3xl text-center">
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {services.map((items, index) => (
          <div
            className="flex flex-col flex-1 gap-3 pb-3 font-poppins"
            key={index}
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url(${items.image})` }}
            ></div>
            <div>
              <p className="text-[#fb8c3b] text-base font-semibold leading-normal">
                {items.tiltle}
              </p>
              <p className="text-[#fb8c3b] text-sm font-normal text-gray-500 leading-normal">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
