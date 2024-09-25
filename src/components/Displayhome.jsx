import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'
import { songsData } from '../assets/assets'
import Songitems from './Songitems'

const Displayhome = () => {
  return (
    <>
        <Navbar/>
        <div className='mb-4 mt-4'>
          <h1 className='font-bold text-2xl'>Featured Charts</h1>
          <div className='flex overflow-auto'>
          {albumsData.map((elem,index)=>(<Albumitem key={index} name={elem.name} desc={elem.desc} id={elem.id} image={elem.image}/>))}
          </div>
          
        </div>
        <div className='mb-4'>
          <h1 className='font-bold text-2xl'>Today's biggest hit </h1>
          <div className='flex overflow-auto'>
          {songsData.map((elem,index)=>(<Songitems key={index} name={elem.name} desc={elem.desc} id={elem.id} image={elem.image}  />))}
          </div>
          
        </div>
    </>
  )
}

export default Displayhome