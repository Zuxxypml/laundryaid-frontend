import React from 'react'
import {Link} from 'react-router-dom'

function Discount() {
  return (
    <section className='bg-white px-10 md:px-30 py-10 '>
      <div className='relative flex flex-col bg-[url("./videos/hero1.gif")] bg-contain bg-center justify-center items-center py-10 px-5 rounded-lg font-poppins h-80 gap-4 leading-none'>
        {/* <img
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/videos/hero1.gif"
    // autoPlay
    // loop
    // muted
    // playsInline
  /> */}

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50 rounded-lg'></div>
        <p className='text-3xl text-white z-1000'>SCHEDULE TODAY</p>
        <div className='text-3xl font-bold text-secondary text-center z-1'>
          <p>To get 40% Off</p>
          <p>your first booking</p>
        </div>
        <div className='z-1'>
          <Link className='text-white bg-gradient-to-r from-[#c85f0b] via-[#f97a1d] to-[#fb8c3b] p-2 text-center w-full rounded-lg'>
            Schedule your first Pickup
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Discount
