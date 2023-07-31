import React from 'react'
//import { WhiteFlag } from 'fluent-emoji'
import { Thumb,Heart,Laughs,Happy,Woow,Said,Angry } from '../Emojis/Emojis'


const Reaction = () => {
  return (
    <div className={`bg-blue-100 max-w-max absolute translate-y-[-90%] rounded-full duration-300`}>
       <ul className='flex gap-2 group-hover:w-72 group-hover:h-11 w-0 h-0 duration-300 '>
            <li className='w-11 h-full cursor-pointer'>
                <img className='w-full h-full' src="https://www.dropbox.com/s/rgfnea7od54xj4m/like.gif?raw=1"  alt="Like emoji" />
            </li>
            <li className='w-11 h-full cursor-pointer'>
                <img className='w-full h-full' src="https://www.dropbox.com/s/sykc43x39wqxlkz/love.gif?raw=1"  alt="Love emoji" />
            </li>
            <li className='w-11 h-full cursor-pointer'>
                <img className='w-full h-full' src="https://www.dropbox.com/s/vdg0a8i0kyd16zk/haha.gif?raw=1"  alt="Haha emoji" />
            </li>
            <li className='w-11 h-full cursor-pointer'>
                <img className='w-full h-full' src="https://cliply.co/wp-content/uploads/2021/03/392103020_WOW_EMOJI_400px.gif"   alt="Wow emoji" />
            </li>
            <li className='w-11 h-full cursor-pointer'>
                <img className='w-full h-full' src="https://cliply.co/wp-content/uploads/2021/03/392103840_SAD_EMOJI_WITH_TEAR_400px.gif"   alt="Sad emoji" />
            </li>
            <li className='w-11 h-full cursor-pointer'>
                <img className='w-full h-full' src="https://www.dropbox.com/s/kail2xnglbutusv/angry.gif?raw=1" alt="Angry emoji" />
            </li>
       </ul>
            
        
    </div>
  )
}

export default Reaction