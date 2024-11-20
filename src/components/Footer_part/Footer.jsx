import React from 'react'
import LogoF from "../../assets/images/logo-f.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-[#131313] py-6'>
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
            <div className="w-full py-3 col-span-2">
                <img src={LogoF} alt="" />
                <ul className='mt-5 text-[#c7c7c7] lato_thin text-[16px] font-normal'>
                    <li className='mb-2'>Location: av. Washington 165, NY CA 54003</li>
                    <li className='mb-2'>Phone: +31 85 964 47 25</li>
                    <li className='mb-2'>Email: info@yourdomain.com</li>
                    <li className='mb-2'>Openings hours: 9.00 AM - 5.00 PM</li>
                </ul>
                <div className="flex text-[25px] text-white gap-8 mt-6">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><CiYoutube /></a>
                    <a href="#"><FaTwitter /></a>
                </div>
            </div>
            <div className="w-full py-3">
                <h2 className='lato_thin text-[18px] font-bold text-white'>Useful Links</h2>
                <ul className='mt-5 text-[#c7c7c7] lato_thin text-[16px] font-normal'>
                    <li className='mb-2'>Home</li>
                    <li className='mb-2'>About Us</li>
                    <li className='mb-2'>Animals</li>
                    <li className='mb-2'>Foundation</li>
                    <li className='mb-2'>Contact</li>
                </ul>
            </div>
            <div className="w-full py-3 ">
                <h2 className='lato_thin text-[18px] font-bold text-white'>Drop a Message</h2>
                <div className="mt-5 text-center">
                    <input className='w-full h-[45px] pl-5 bg-inherit border border-gray-600 rounded-lg placeholder:text-[#f7f7f7] text-white' type="text" placeholder='Enter your email' />
                    <button className='px-[50px] py-3 bg-gray-600 lato_thin text-[18px] text-[#f7f7f7] font-medium mt-5 rounded-xl' type='button'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
