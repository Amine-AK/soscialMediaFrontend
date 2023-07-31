import React from 'react'
import {dark_posts} from '../../styling'
import ProfileBtn from '../global/ProfileBtn'

const CreatPost = () => {

    

  return (<>

    <div className={`min-h-max max-md:w-full w-4/5 mx-auto px-2 py-3 mb-10 rounded-lg ${dark_posts}`}>
    
     <div className='flex w-full mb-3'>
        <ProfileBtn/>
        <div className='w-4/5 h-8 rounded-full bg-[#4E4F50] text-gray-200 px-5 leading-8 cursor-pointer  hover:opacity-90'>
                Write something .....
        </div>
     </div>
     <div>
        <ul className='flex justify-around max-md:justify-start max-md:gap-7 items-center font-bold max-md:text-sm text-gray-600 dark:text-gray-400 w-full text-sm pt-5 border-t border-gray-400 leading-8'>
            <li className='flex w-1/3'>
                <button className='flex w-8 h-8 max-md:w-6 max-md:h-6 leading-8'>
                <img srcset="https://img.icons8.com/?size=512&amp;id=CrCfeOiVJcWs&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=CrCfeOiVJcWs&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=CrCfeOiVJcWs&amp;format=png 2x" alt="Live Video On icon"className="w-full h-full"/>
                </button>
               Live Video
            </li>
            <li className='w-1/3'>
                <button className='flex w-8 h-8 max-md:h-6 min-w-max leading-8 max-md:w-6'>
                <img srcset="https://img.icons8.com/?size=512&amp;id=1FE2HGszFS4w&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=1FE2HGszFS4w&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=1FE2HGszFS4w&amp;format=png 2x" alt="Video icon" className="w-full h-full"/>
               /
               <img srcset="https://img.icons8.com/?size=512&amp;id=8ax09IWlr80n&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=8ax09IWlr80n&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=8ax09IWlr80n&amp;format=png 2x" alt="Add Image icon" className="w-full h-full"/>
               Foto/Video
                </button>
            </li>
            <li className='w-1/3 max-sm:hidden'>
                <button className='flex w-8 h-8 max-md:w-6 max-md:h-6 leading-8'>
                <img alt="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/pkbalDbTOVI.png"></img>
                Peristiwa
                </button>
            </li>
        </ul>
     </div>
     <br/>
    
    </div>
    </>  )
}

export default CreatPost