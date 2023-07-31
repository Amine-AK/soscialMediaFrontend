import React, { useState } from 'react'
import ProfileBtn from '../global/ProfileBtn'


type MyChildComponentProps = {
    myVar: boolean;
    setMyVar: (value: boolean) => void;
  };

  const MyChildComponent: React.FC<MyChildComponentProps> = ({ myVar }) => {
    const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const element = event.currentTarget as HTMLTextAreaElement;
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
      };
    return (
      <div className='w-full h-8 min-h-max'>
        <textarea
          className='w-full h-8 min-h-max px-4 bg-[#4E4F50] rounded-xl outline-none overflow-hidden resize-none'
          name=''
          id=''
          cols={30}
          rows={1}
          placeholder='Write your comment ... '
          onInput={()=>{}}
        ></textarea>
      </div>
    );
  };

const Comments = () => {
    const [myVar, setMyVar] = useState(false);
  return (
    <div>
        <div className='flex w-full mb-3'>
        <ProfileBtn/>
        <div className='w-4/5 min-h-max rounded-full bg-[#4E4F50] text-gray-200 leading-8 cursor-pointer hover:opacity-90 group'>
            <span className='hidden'>Write something .....</span>
            <MyChildComponent myVar={myVar} setMyVar={setMyVar} />
            <div></div>
        </div>
     </div>
    </div>
  )
}

export default Comments