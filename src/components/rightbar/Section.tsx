import React from 'react'
import { dark_RsideBare } from '../../styling'

type Props = {
    children    : React.ReactNode,
    styleClass? : any,
    title?:string
}


const Section = ({children,styleClass,title}:Props) => {
    console.log
  return (
    <div className={`${dark_RsideBare} w-full rounded-md px-2 pb-5 ${styleClass?.main}`}>
        <h2 className='text-sm font-bold text-gray-400'>
            {title}
        </h2><br/>
        {children}
    </div>
  )
}

export default Section