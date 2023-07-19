import React from 'react'
import {input,FormContainer,HelloDear,RegesterBtn,loginBtn,formStyle,HelloDearBg} from '../../styling'
import { Link } from 'react-router-dom'


const Regester = () => {
  return (
    <div className={FormContainer}>
       <div className={` gap-5 ${formStyle}`}>
        <div>
          <h1 className=' text-4xl'>Regester</h1>
        </div>
        <div>
          <form className='flex flex-col gap-4 text-black' action="">
            <input className={input} type="text" />
            <input className={input} type="text" />
            <input className={input} type="password" name="" id="" />
            <input className={input} type="password" name="" id="" />
            <button className={RegesterBtn} type="submit">
              Regester
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-[400px] relative">
        <div className={HelloDear}>
        <h1 className='text-6xl w-full '>Hello Dear.</h1>
        <p className=''>
          this is just a test of login designe page of a soscial media website
          this is just a test of login designe page of a soscial media website
        </p>
        <p>Do you have an account ?</p>
        <Link to="/login">
          <button className={RegesterBtn} type="submit">
            login
          </button>
        </Link>
        </div>
        <div className={HelloDearBg}></div>
      </div>
     
    </div>
  )
}

export default Regester