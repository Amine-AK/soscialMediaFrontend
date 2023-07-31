import React, { ReactNode } from 'react'
import ProfileBtn from '../global/ProfileBtn'
import {CiMenuKebab} from 'react-icons/ci'
import {MdOutlineWatchLater,MdAddReaction} from 'react-icons/md'
import {AiOutlineShareAlt,AiOutlineComment} from 'react-icons/ai'
import {dark_posts} from '../../styling'
import Comments from './Comments'
import Reaction from './Reaction'



type Data = {
    id:number,
    poster:string,
    postTexe:string,
    img:string
}



const Poste = ({data}:Data) => {


    const imageStyle = 'w-full min-h-[300px] max-h-[400px]'
    let postImage:ReactNode
    if (data.img) {
        postImage = <img className={imageStyle} src={'https://picsum.photos/200/300?random='+(Math.floor(Math.random()*100))} alt={`${data.id} ${data.poster}`}/>
    }

  return (
    <div className={`flex flex-col gap-2 min-h-max max-md:w-full w-4/5 mx-auto px-2 pt-3 rounded-lg ${dark_posts}`}>
        <div className='flex justify-between items-start h-10 mb-2'>
            <div className='relative'>
                <ProfileBtn/>
                <span className=' absolute flex items-center min-w-max text-xs text-gray-500 t-[-4px]'>
                    <MdOutlineWatchLater className='text-lg'/>
                    &nbsp; 2 day ago
                </span>
            </div>
            <div>
                <CiMenuKebab className='cursor-pointer'/>
            </div>
        </div>
        <div className='text-sm'>
            <p>{data.postTexe}
                 fdfgdsg dsondn n d jv dv d dvn f nddndf d dfno knfnewk kv fonk kdf onfwekv df <br/>j fdibdj dvidbwf sdviibfd sdvbibddv sd<br/>
                 hfiujb iunjje fjmn vsjmsf sljnkf  jnl f,n ocxn<br/>
                 fdfgdsg dsondn n d jv dv d dvn f nddndf d dfno knfnewk kv fonk kdf onfwekv df <br/>j fdibdj dvidbwf sdviibfd sdvbibddv sd<br/>
                 hfiujb iunjje fjmn vsjmsf sljnkf  jnl f,n ocxn<br/>
            </p>
            {postImage}
        </div>
        <div className='border-t border-grey-400 mt-5 flex items-center py-1'>
            <ul className='flex justify-start gap-4'>
                <li className='flex items-center gap-1 text-sm cursor-pointer group'>
                    <MdAddReaction/>
                    Reaction
                    <Reaction />
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
        <div>
            
            <Comments/>
        </div>
        
    </div>
  )
}

export default Poste