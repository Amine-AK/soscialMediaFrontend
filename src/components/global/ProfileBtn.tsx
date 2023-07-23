import React from 'react'
import { RiAccountCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'



const ProfileBtn = (props:{img?, name?,styling?}) => {
  const src = props.img ? props.img : 'http://localhost:5173/images/2.png'
  return (
    <div id="logo" className='flex justify-between items-center max-h-max'>
        <Link to='/profile 'className='flex justify-between sm:text-base text-xs'>
            <img src={src} className='text-2xl w-8 h-8 rounded-full md:text-xl'/>
            &nbsp; { props.name ? <span className={` leading-8 text-sm font-bold ${props.styling}`}>{props.name}</span> : '' }
        </Link>
    </div>
  )
}

export default ProfileBtn