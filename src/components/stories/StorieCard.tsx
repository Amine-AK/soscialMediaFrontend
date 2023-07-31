import React from 'react'




const StorieCard = ({content}:any,active='false') => {
  return (<>
    {/*<div className='w-[120px] h-full rounded-2xl  duration-700 ease-in-out' data-carousel-item={active}>
      <img className='w-full h-full rounded-2xl ' src={content.img} alt={`${content.img} ${content.name}`} />
      <span>{content.name}</span>
    </div>*/}

      <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
        <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"src={content.img} alt={`${content.img} ${content.name}`}/>

        <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
          <img className="w-full h-full object-cover" src={content.img} alt={`${content.img} ${content.name}`}/>
        </div>

        <div className="absolute inset-x-3 bottom-1">
          <p className="text-white font-semibold">{content.name}</p>
        </div>

        <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

      </div>
      </>
  )
}

export default StorieCard




