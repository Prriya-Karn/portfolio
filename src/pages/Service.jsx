import React, { Fragment } from 'react'

export const Service = () => {
  return (
    <Fragment>
    <div className='mx-12 mt-30'>
    <div className='flex flex-col justify-center items-center gap-5'>
    <h1 className='text-center text-5xl font-semibold'>Service</h1>
    <span className='text-center bg-black text-6xl font-semibold underline w-20 mx-auto h-1'></span>
    </div>

    <div className='flex justify-center mt-10  items-center gap-5'>
    <div data-aos="fade-up" className='w-1/2 flex flex-col gap-20'>
    <div className=''>
    <h1 className='text-3xl text-center font-semibold'>Retina Surgery</h1>
    <p className='text-lg  text-center  mt-2'>Electrical signals sent to the brain.</p>
    </div>
    <div className=''>
    <h1 className='text-3xl text-center font-semibold'>Retina Surgery</h1>
    <p className='text-lg  text-center  mt-2'>Electrical signals sent to the brain.</p>
    </div>
    <div className=''>
    <h1 className='text-3xl text-center font-semibold'>Retina Surgery</h1>
    <p className='text-lg  text-center  mt-2'>Electrical signals sent to the brain.</p>
    </div>
    </div>

    <div data-aos="fade-down" className='w-80 '>
    <img src='../../public/images/a5832d50be6f727118831955a125685d.jpeg' className='w-full object-cover'/>
    </div>

    <div data-aos="fade-up" className='w-1/2 flex flex-col gap-20'>
    <div className=''>
    <h1 className='text-3xl text-center font-semibold'>Retina Surgery</h1>
    <p className='text-lg  text-center  mt-2'>Electrical signals sent to the brain.</p>
    </div>
    <div className=''>
    <h1 className='text-3xl text-center font-semibold'>Retina Surgery</h1>
    <p className='text-lg  text-center  mt-2'>Electrical signals sent to the brain.</p>
    </div>
    <div className=''>
    <h1 className='text-3xl text-center font-semibold'>Retina Surgery</h1>
    <p className='text-lg  text-center  mt-2'>Electrical signals sent to the brain.</p>
    </div>
    </div>
    </div>


    <div className='flex justify-center mt-5 items-center'>
    <button className='bg-gray-950 mt-7 hover:bg-gray-600  transition-all duration-300  rounded-lg px-10 py-2 cursor-pointer text-white'>More</button>
    </div>
  


    </div>
    </Fragment>
  )
}
