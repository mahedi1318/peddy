import React from 'react'

const AdoptCount = ({adoptCount}) => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="lato_thin text-xl font-bold">Congratulations!</h2>
            <p className="text-gray-700 mt-3">You have successfully adopted a pet!</p>
            <h3 className='lato_thin text-[30px] font-bold mt-3 text-[#474747]'>{adoptCount}</h3>
        </div>
    </div>
    </>
  )
}

export default AdoptCount
