import React, { useEffect, useState } from 'react'
import Section from './Section'
import Suggestion from './Suggestion'
import FriendList from '../../api/FriendList'
import { Link } from 'react-router-dom'
import axios from 'axios';


const RightSideBar =  () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(response => {
        setFriends(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(friends)
    //const onlineStyle = 'after:w-3 after:h-3 after:bg-green-400 after:content-[""]'
    
    //console.log(onligneFriendsList)
    console.log('---------------------- holla ---------------------------')
  return (
    <div className='sm:flex sm:visible hidden flex-col gap-3 lg:w-1/5 w-2/5  border-l right-[5%] h-full '>
        <Section title='Suggestion for you'>
           <Suggestion/>
        </Section>
        <Section title="i don't know">
            Hello secound
        </Section>
        <Section title='Onligne friends' styleClass={'flex flex-col gap-3'}>
           {friends.map((friend:any)=>{
            const isOnline = true
            return (
              <div className='flex justify-between items-center h-9 min-x-max pb-1 px-1 w-full duration-300 hover:bg-blue-100 ' dir="rtl">
                 <div className='flex relative'>
                  <img className={`rounded-full w-9 h-9`} src={friend.picture.thumbnail} alt="" />
                  {isOnline ? <i className='absolute w-3 h-3 bg-green-400 translate-y-6 translate-x-[-24px] rounded-full'/> : ''}
                 </div>
                 
                 <Link to={`/profile/${friend.dob.date}`}>
                   <span className='font-bold cursor-pointer'>{friend.name.first + friend.name.last}</span>
                 </Link>
               </div>
            )
               
             }) 
        }
        </Section>
    </div>
  )
}

export default RightSideBar