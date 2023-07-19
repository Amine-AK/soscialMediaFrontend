import React from 'react'




const StorieCard = ({content}:any,active='false') => {
  return (
    <div className='w-[120px] h-full rounded-2xl  duration-700 ease-in-out' data-carousel-item={active}>
      <img className='w-full h-full rounded-2xl ' src={content.img} alt={`${content.img} ${content.name}`} />
      <span>{content.name}</span>
    </div>
  )
}

export default StorieCard