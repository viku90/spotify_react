import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
    const data=[{icon: assets.home_icon, title: "Home"},{icon: assets.search_icon, title: "Search"}];
    const dat=[{heading: "Create your first playlist",p:"it's easy we will help you",buttonText: "Create Playlist"},{heading: "Let's findsome podcast to follow",p:"We'll keep you update on new episodes",buttonText: "Browse Podcast"}];
  return (
    <div className='w-[25%] h-full p-2 flex-col text-white hidden lg:flex gap-3'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justifiy-around gap-6'>
           {data.map((elem,index)=>( 
            <div className='flex items-center gap-6 pl-8 cursor-pointer'>
              <img className='w-6' src={elem.icon} alt="" />  
              <p className='font-bold'>{elem.title}</p>
            </div>))}
        </div>
        <div className='h-[85%] bg-[#121212] rounded'>
            <div className='p-4 flex items-center justify-between '>
                <div className='flex items-center gap-3 '>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex item-center gap-2'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />

                    
                </div>
            </div>
           {dat.map((elem,inde)=>(
             <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-strat justify-start gap-1 pl-4 '>
             <h1>{elem.heading}</h1>
             <p className='font-light'>{elem.p}</p>
             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-5'>{elem.buttonText}</button>
         </div>
           ))}
        </div>
    </div>
  )
}

export default Sidebar