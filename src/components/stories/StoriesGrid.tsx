import React from 'react'
import StorieCard from './StorieCard'



const StoriesGrid = () => {
 

  const content = {
    id:1,
    img:'./images/girl.jpg',
    name:''
  }
  


  return (
    <div id="default-carousel" className='relative w-full min-w-max mb-5 group h-[200px]'  data-carousel="slide">
        <div className='flex absolute justify-start items-center gap-1 overflow-hidden w-full h-[200px] '>
          <StorieCard content={content} active='false'/>
          <StorieCard content={content}/>
          <StorieCard content={content}/>
          <StorieCard content={content}/>
        </div>
       
        <button type="button" className="absolute left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer  focus:outline-none" data-carousel-prev>
        <span className="group-hover:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:group-hover:bg-gray-800/60 hidden group-hover:visible group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
        </button>
        <button type="button" className="absolute right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer  focus:outline-none" data-carousel-next>
            <span className="group-hover:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 hidden group-hover:visible dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
    
  )
}

export default StoriesGrid