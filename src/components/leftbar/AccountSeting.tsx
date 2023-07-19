import React from 'react'
import ProfileBtn from '../global/ProfileBtn'
import { RiGroup2Fill } from 'react-icons/ri'
import { FaStore } from 'react-icons/fa'
import { MdVideoSettings } from 'react-icons/md'
import { FaStopwatch } from 'react-icons/fa'
import {p_1, p_4, p_5, p_6} from '../../../public/images'
type Props = {
    titleClass?:string,
    listClass?:string,
    iconClass?:string,
    itemClass?:string
}

const AccountSeting = ({titleClass,listClass,iconClass,itemClass}:Props) => {
  return (
    <div>
        <h2 className={titleClass}>Account Attributs</h2>
        <ul className={listClass}>
            <li>
                <ProfileBtn img='http://localhost:5173/images/man.jpg'/>
            </li>
            <li className={`${itemClass}`}>
                <img src={p_1} className={`${iconClass}`}/>
                &nbsp; Groups
            </li>
            <li className={`${itemClass}`}>
                <img src={p_4} className={`${iconClass}`}/>
                &nbsp; MarketPlace
            </li>
            <li className={`${itemClass}`}>
                <img src={p_5} className={`${iconClass}`}/>
                &nbsp; Watch
            </li>
            <li className={`${itemClass}`}>
                <img src={p_6} className={`${iconClass}`}/>
                &nbsp; Watch
            </li>
            
        </ul>
        <hr/>
    </div>
  )
}

export default AccountSeting