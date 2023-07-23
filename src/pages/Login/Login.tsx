import React, { useRef,SyntheticEvent, ReactNode, useContext, useState  } from 'react'
import {input,FormContainer,HelloDear,RegesterBtn,loginBtn,formStyle,HelloDearBg} from '../../styling'
import { Link } from 'react-router-dom'

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)

  return (
    <div className={FormContainer}>
      <div className="w-1/2 h-[400px] relative">
        <div className={HelloDear}>
        <h1 className='text-6xl w-full '>Hello Dear.</h1>
        <p className=''>
          this is just a test of login designe page of a soscial media website
          this is just a test of login designe page of a soscial media website
        </p>
        <p>Don't have an account ?</p>
        <Link to="/regester">
        <button className={loginBtn}>
          Regester
        </button></Link>
        </div>
        <div className={HelloDearBg}></div>
      </div>
      <div className={` gap-20 ${formStyle}`}>
        <div>
          <h1 className=' text-4xl mt-'>Login</h1>
        </div>
        <div>
          <form className='flex flex-col gap-4 text-black' action="">
            <input ref={userRef} className={input} type="text" />
            <input ref={passRef} className={input} type="password" name="" id="" />
            <button className={RegesterBtn}  type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login