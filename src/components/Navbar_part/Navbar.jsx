import React from 'react'
import Logo from "../../assets/images/logo.png"
import LoginIcon from "../../assets/images/login-icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='py-10'>
        <div className='container flex justify-between items-center'>
            <div className=''>
                <img src={Logo} alt="Logo" />
            </div>
            <div className=''>
                <ul className='flex gap-9 '>
                    <li className='lato_thin text-lg font-normal text-[#8b8787] '>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='lato_thin text-lg font-normal text-[#8b8787] '>
                        <Link to="/">Shop</Link>
                    </li>
                    <li className='lato_thin text-lg font-normal text-[#8b8787] '>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className=''>
                <button className='block'>
                    <img className='w-[80%]' src={LoginIcon} alt="LoginIcon" />
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
