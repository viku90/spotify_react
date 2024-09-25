import React from 'react'

const Songitems = ({name,image,desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cusor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  ) 
}

export default Songitems