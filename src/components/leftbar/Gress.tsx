import React from 'react'
import { RiGroup2Fill } from 'react-icons/ri'
import { FaStore } from 'react-icons/fa'
import { MdVideoSettings } from 'react-icons/md'
import { FaStopwatch } from 'react-icons/fa'
import { p_10, p_11, p_8, p_9 } from '../../../public/images'

type Props = {
    titleClass?:string,
    listClass?:string,
    iconClass?:string,
    itemClass?:string
}

const Gress = ({titleClass,listClass,iconClass,itemClass}:Props) => {
  return (
    <div>
        <h2 className={titleClass}>Account Attributs</h2>
        <ul className={listClass}>
            <li className={`${itemClass}`}>
                <img src={p_9} className={`${iconClass}`}/>
                &nbsp; Groups
            </li>
            <li className={`${itemClass}`}>
                <img src={p_8} className={`${iconClass}`}/>
                &nbsp; MarketPlace
            </li>
            <li className={`${itemClass}`}>
                <img src={p_11} className={`${iconClass}`}/>
                &nbsp; Watch
            </li>
            <li className={`${itemClass}`}>
                <img src={p_10} className={`${iconClass}`}/>
                &nbsp; Watch
            </li>
            
        </ul>
        <hr/>
    </div>
  )
}

export default Gress