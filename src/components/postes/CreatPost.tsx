import React from 'react'
import {dark_posts} from '../../styling'
import ProfileBtn from '../global/ProfileBtn'

const CreatPost = () => {

    

  return (<>

    <div className={`min-h-max w-full px-2 py-3 mb-10 rounded-lg ${dark_posts}`}>
    
     <div className='flex w-full mb-3'>
     <ProfileBtn/>
     <div className='w-4/5 h-8 rounded-full bg-[#4E4F50] text-gray-200 px-5 leading-8 cursor-pointer  hover:opacity-90'>
            Write something .....
     </div>
     </div>
     <div>
        <ul className='flex justify-between items-center font-bold text-gray-600 dark:text-gray-400 w-full text-sm pt-5 border-t border-gray-400 leading-8'>
            <li className='flex w-1/3'>
                <button className='flex w-8 h-8'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" preserveAspectRatio="xMidYMid meet" 
                className="w-full h-full">
                    <defs>
                    <clipPath id="__lottie_element_11">
                    <rect width="48" height="48" x="0" y="0"></rect>
                    </clipPath></defs><g clip-path="url(#__lottie_element_11)">
                    <g transform="matrix(1,0,0,1,3.75,11.75)" opacity="1" className="block">
                    <g opacity="1" transform="matrix(1,0,0,1,15.25,12.25)">
                    <path fill="rgb(175,189,197)" fill-opacity="1" d=" M-11,-12 C-11,-12 11,-12 11,-12 C13.199999809265137,-12 15,-10.199999809265137 15,-8 C15,-8 15,8 15,8 C15,10.199999809265137 13.199999809265137,12 11,12 C11,12 -11,12 -11,12 C-13.199999809265137,12 -15,10.199999809265137 -15,8 C-15,8 -15,-8 -15,-8 C-15,-10.199999809265137 -13.199999809265137,-12 -11,-12z">
                    </path></g><g opacity="1" transform="matrix(1,0,0,1,35.25,12.25)">
                    <path fill="rgb(120,144,156)" fill-opacity="1" d=" M5,11 C5,11 -5,5 -5,5 C-5,5 -5,-5 -5,-5 C-5,-5 5,-11 5,-11 C5,-11 5,11 5,11z">
                    </path></g></g><g transform="matrix(1,0,0,1,13.75,18.75)" opacity="1" className="block">
                    <g opacity="1" transform="matrix(1,0,0,1,5.25,5.25)">
                    <path fill="rgb(244,67,54)" fill-opacity="1" d=" M0,-5 C2.760999917984009,-5 5,-2.760999917984009 5,0 C5,2.76200008392334 2.760999917984009,5 0,5 C-2.760999917984009,5 -5,2.76200008392334 -5,0 C-5,-2.760999917984009 -2.760999917984009,-5 0,-5z"></path></g></g></g></svg>
                   
                </button>
                Video langsung
            </li>
            <li className='w-1/3'>
                <button className='flex min-w-max leading-8'>
                <img srcset="https://img.icons8.com/?size=512&amp;id=1FE2HGszFS4w&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=1FE2HGszFS4w&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=1FE2HGszFS4w&amp;format=png 2x" alt="Video icon" className="w-8 h-8"/>
               /
               <img srcset="https://img.icons8.com/?size=512&amp;id=8ax09IWlr80n&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=8ax09IWlr80n&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=8ax09IWlr80n&amp;format=png 2x" alt="Add Image icon" className="w-8 h-8"/>
               Foto/Video
                </button>
            </li>
            <li className='w-1/3'>
                <button className='flex w-8 h-8'>
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