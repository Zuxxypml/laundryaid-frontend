import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PickUpInput() {
  const navigate = useNavigate()

  function handlePickup() {
      navigate('/request')
  }
  return (
    <div
      className='bg-white flex flex-row rounded-full w-5/6 md:w-1/2 p-1 items-center'
      onClick={handlePickup}>
      <div className='flex flex-row'>
        <div className='px-4'>
          <p className='font-semibold'>Pick up</p>
          <p className='text-sm text-gray-600'>Today</p>
        </div>

        <div className='px-4 border-l border-l-gray-300 '>
          <p className='font-semibold'>Where</p>
          <p className='text-sm text-gray-600'>Add address</p>
        </div>
      </div>
      <div className='rounded-full bg-primary hover:bg-[#fb8c3b] cursor-pointer flex justify-center items-center p-4 ml-auto'>
        <ArrowRight className='text-white' />
      </div>
    </div>
  );
}

export default PickUpInput