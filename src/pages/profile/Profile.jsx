import React from 'react'
import {FcEditImage} from 'react-icons/fc'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FaUpload} from 'react-icons/fa'
import {dark_posts} from '../../styling'
import CreatPost from '../../components/postes/CreatPost'
import Poste from '../../components/postes/Poste'



const Profile = () => {
  const iconProfileCouvert = 'text-xl text-blue-400'


  const data = {
    id:1,
    poster:'poster Name',
    postTexe:'hbfidnb evdionemnf dn em nbqwnf c  wdvd en jmds w bd ewm nbef fdkbn window f ewdvkdcnkqw d v fnb dlnq ckb',
    img:'http://localhost:5173/images/man.jpg',
  }
  return (
    <div className='relative md:w-4/5 w-full h-[330px] max-md:h-[220px] max-md:mx-2 mx-auto mb-3 flex flex-col gap-1 pb-[200px]'>
      <div id='Pheader' className='flex flex-col items-center justify-center'>
        <div id='convertImage' className='h-[330px] max-xl:h-[220px] w-full'>
          <img className='w-full h-full' src="./images/convert.jpg" alt="" />
        </div>
        <div id='profileImg' className='rounded-full h-[200px] w-[200px] max-xl:h-[130px] max-xl:w-[130px] border-4 border-b-0 border-black absolute -translate-y-[-70%] '>
          <img className='rounded-full w-full h-full' src="./images/man.jpg" alt="" />
        </div>
        <div id='editCI' className='w-30 h-11 absolute right-0 bottom-0'>
          <ul className='flex gap-2 justify-between items-center '>
            <li>
              <button>
                  <FcEditImage className={iconProfileCouvert}/>
              </button>
            </li>
            <li>
              <button>
                  <RiDeleteBin6Line className={iconProfileCouvert}/>
              </button>
            </li>
            <li>
              <button>
                <FaUpload className={iconProfileCouvert}/>
              </button>
            </li>
          </ul>
        </div>
        
      </div>
      <div className={`min-h-max w-full px-2 py-3 mb-10 rounded-lg ${dark_posts}`}>
        <h2 className='text-xl font-bold max-w-max text-yellow-400'>About Me :</h2>
        fhgfdh dfh d hfdh hdfh dfgdsgsfgs 
      </div>
      <CreatPost/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>



      <br/>
      <br/>
    </div>
  )
}

export default Profile