import React from 'react'
import HeroImg from "../../assets/images/hero.png"

const Hero = () => {
  return (
    <>
      <div className='h-[900px]'>
        <div className="container">
            <div className='text-center'>
                <span className='lato_thin font-bold text-2xl text-[#8b8787]'>Bringing Families Together ❤️‍🔥 </span>
                <h1 className='lato_thin font-black text-[72px] w-[750px] m-auto leading-tight mt-5'>Your Path to Adoption Starts Here</h1>
                <p className='lato_thin font-normal text-[16px] w-[734px] m-auto leading-7 mt-5 text-[#131313]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The point of using Lorem Ipsum is that it has a.</p>
                 <button className='py-3 px-8 bg-[#0E7A81] rounded-lg lato_thin font-bold text-[20px] text-white mt-8'>View More</button>
                 <div className='mt-10'>
                    <img className='m-auto' src={HeroImg} alt="" />
                 </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
