import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

     const navigation= useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
        <img onClick={()=>navigation(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
        <img onClick={()=>navigation(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
      </div>
      <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Permium</p>
        <p className='bg-black px-1 py-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p> 
        <p className='bg-purple-500 text-black justify-center items-center rounded-full flex w-7 h-7'>V</p>
      </div> 
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <div className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</div>
      <div className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</div>
      <div className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</div>
   
    </div>
    </>
  )
}

export default Navbar