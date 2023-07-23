import React, { ReactNode } from 'react'
import ProfileBtn from '../global/ProfileBtn'
import {CiMenuKebab} from 'react-icons/ci'
import {MdOutlineWatchLater,MdAddReaction} from 'react-icons/md'
import {AiOutlineShareAlt,AiOutlineComment} from 'react-icons/ai'
import {dark_posts} from '../../styling'



type Data = {
    id:number,
    poster:string,
    postTexe:string,
    img:string
}



const Poste = ({data}:Data) => {


    const imageStyle = 'w-full h-[200px]'
    let postImage:ReactNode
    if (data.img) {
        postImage = <img className={imageStyle} src={data.img} alt={`${data.id} ${data.poster}`}/>
    }

  return (
    <div className={`min-h-max w-full px-2 pt-3 rounded-lg ${dark_posts}`}>
        <div className='flex justify-between items-start h-10 mb-2'>
            <div className='relative'>
                <ProfileBtn/>
                <span className=' absolute flex items-center text-xs text-gray-500 t-[-4px]'>
                    <MdOutlineWatchLater/>
                    &nbsp; time 0000
                </span>
            </div>
            <div>
                <CiMenuKebab className='cursor-pointer'/>
            </div>
        </div>
        <div className='text-sm'>
            <p>{data.postTexe}
                545454
            </p>
            {postImage}
        </div>
        <div className='border-t border-grey-400 mt-5 flex items-center py-1'>
            <ul className='flex justify-start gap-4'>
                <li className='flex items-center gap-1 text-sm'>
                    <MdAddReaction/>
                    React
                </li>
                <li className='flex items-center gap-1 text-sm'>
                    <AiOutlineComment/>
                    Comments
                </li>
                <li className='flex items-center gap-1 text-sm'>
                    <AiOutlineShareAlt/>
                    Shars
                </li>
            </ul>
        </div>
        <div></div>
        
    </div>
  )
}

export default Poste