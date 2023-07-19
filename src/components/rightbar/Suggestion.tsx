import React from 'react'
import { Link } from 'react-router-dom'

const Suggestion = () => {
  return (
    <div className=' text-xs lg:text-sm flex flex-col justify-between gap-6'>
        <div className='flex justify-between items-center h-6'>
            <img className='rounded-full w-9 h-9' src="http://localhost:5173/images/girl.jpg" alt="" />
            <Link to='#'>
                <span className='font-bold cursor-pointer'>Friend Name</span>
            </Link>
            <form className='flex gap-2' action="">
                <input className=' rounded-md  px-1 bg-blue-800 text-white cursor-pointer' type="button" value="Fllow" />
                <input className=' rounded-md  px-1 bg-red-800 text-white cursor-pointer' type="button" value="Delete" />
            </form>
        </div>
        <div className='flex justify-between items-center h-6'>
            <img className='rounded-full w-9 h-9' src="http://localhost:5173/images/man.jpg" alt="" />
            <Link to='#'>
                <span className='font-bold cursor-pointer'>Friend Name</span>
            </Link>
            <form className='flex gap-2' action="">
                <input className=' rounded-md  px-1 bg-blue-800 text-white cursor-pointer' type="button" value="Fllow" />
                <input className=' rounded-md  px-1 bg-red-800 text-white cursor-pointer' type="button" value="Delete" />
            </form>
        </div>
    </div>
  )
}

export default Suggestion