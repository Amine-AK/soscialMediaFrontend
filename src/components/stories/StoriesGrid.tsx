import React from 'react'
import StorieCard from './StorieCard'



const StoriesGrid = () => {
 

  const content = {
    id:1,
    img:'./images/girl.jpg',
    name:''
  }
  


  return (
    <div id="default-carousel" className='relative min-w-max mb-5 group h-[200px] max-md:w-full w-4/5 mx-auto max-lg:w-3/5'  data-carousel="slide">
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
  /*return(
    
    <div className="flex space-x-2 relative max-md:w-full w-4/5 mx-auto min-w-max mb-5 group h-[200px] max-lg:w-3/5">





        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
            <img className="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="./images/0001.jpg" alt="MD. Shibbir Ahmed"/>
            <div className="bg-gray-800 relative flex-1 flex flex-col">
                <div className="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <div className="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
                    <p>
                        Create Story
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>



        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
            <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=1" alt="MD. Shibbir Ahmed"/>

            <div className="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img className="w-full h-full object-cover" src="./images/0001.jpg" alt="MD. Shibbir Ahmed"/>
            </div>

            <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Your Story</p>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

        </div>



        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
            <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="MD. Shibbir Ahmed"/>

            <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img className="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="MD. Shibbir Ahmed"/>
            </div>

            <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Baky Billah</p>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

        </div>



        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
            <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=5" alt="MD. Shibbir Ahmed"/>

            <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img className="w-full h-full object-cover" src="https://picsum.photos/200/300?random=6" alt="MD. Shibbir Ahmed"/>
            </div>

            <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Mobarak Hossain Joy</p>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

        </div>



        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
            <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=7" alt="MD. Shibbir Ahmed"/>
            <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img className="w-full h-full object-cover" src="https://picsum.photos/200/300?random=8" alt="MD. Shibbir Ahmed"/>
            </div>

            <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Mahmudul Hasan</p>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>






        <div className="absolute bg-gray-700 hover:bg-gray-600 transition-colors ease-in-out duration-200 p-2 rounded-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    </div>
  )*/
}

export default StoriesGrid

