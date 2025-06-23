import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

function Pricing() {
const packages = [
  {
    type: 'Wash & Fold',
    description: 'Perfect for your everyday laundry needs. We wash, remove stains, and fold your clothes neatly, saving you time and effort.',
    benefits: ['Washing', 'Stain Removal', 'Fold'],
    amount: '6,000'
  },
  {
    type: 'Premium',
    description: 'Ideal for delicate or high-value clothing. Includes deep cleaning, ironing, starching, and professional garment treatment.',
    benefits: ['Washing', 'Stain Removal', 'Ironing', 'Starching', 'Clothe Treatment', 'Dry Cleaning'],
    amount: '25,000'
  },
  {
    type: 'Deluxe',
    description: 'A great choice for a polished look. Enjoy clean, crisp, and fresh-smelling clothes with washing, ironing, stain removal, and starching all in one package.',
    benefits: ['Washing', 'Stain Removal', 'Ironing', 'Starching'],
    amount: '10,000'
  }
]

  return (
    <section className='flex flex-col px-5 md:px-30 py-10 gap-10 flex-wrap font-poppins'>
      <h2 className='font-semibold'>Our Services</h2>
      <div className='flex md:flex-row flex-wrap gap-4'>
        {packages.map((item, index) => (
          <div
            key={index}
            className={`bg-white flex flex-col justify-between gap-4 border border-gray-200 p-6 rounded-2xl flex-1 ${
              index == 1 && ""
            } shadow-sm`}>
            <div className=''>
              <span
                className={`bg-primary rounded-lg text-white p-2 ${
                  index == 1 ? "bg-secondary" : "bg-primary"
                }`}>
                {item.type}
              </span>
              <p className='text-gray-500 mt-4'>{item.description}</p>
            </div>
            <span className='text-2xl'>
              {item.amount}
              <span className='text-gray-400 text-sm font-normal'>
                /monthly
              </span>
            </span>

            <ul className='border-t border-t-gray-300 border-b border-b-gray-300 py-6'>
              {item.benefits.map((list, i) => (
                <li key={i} className='flex flex-row items-center gap-2'>
                  <Check size={16} /> {list}
                </li>
              ))}
            </ul>

            <div className='flex flex-row'>
              <Link
                className={`p-2 text-center w-full rounded-lg ${
                  index !== 1
                    ? "border-2 border-gray-300 bg-white text-gray-700"
                    : "bg-gradient-to-r from-[#c85f0b] via-[#f97a1d] to-[#fb8c3b] text-white"
                }`}>
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing
