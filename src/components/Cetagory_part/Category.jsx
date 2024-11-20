import React, { useState } from 'react'
import { categories } from '../../assets/data'

const Category = () => {

    let [activeTab, setActiveTab] = useState(1)
    


    const handleClickCategory = (id)=>{       
        setActiveTab(id)     
        console.log(id)   
    }

  return (
    <>
    <div className="mb-9">
        <div className="container">
            <div className="text-center">
                <h2 className='lato_thin text-4xl font-semibold'>Adopt  Your  Best Friend</h2>
                <p className='lato_thin text-[16px] font-normal w-[243px] md:w-[632px]  m-auto mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The point of using Lorem Ipsum is that it has a.</p>
            </div>
            <div className="mt-10 w-full md:w-3/4 m-auto text-center">
                <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-center group'>
                    {categories.map((item)=>(
                    <li onClick={() => handleClickCategory(item.id)} key={item.id} className={`px-7 py-3 border flex items-center justify-center gap-8 rounded-full cursor-pointer ${activeTab === item.id ? "bg-blue-500 text-white" : "bg-gray-100"} `}>
                        <img className='w-9' src={item.category_icon} alt="" />
                        <span>{item.category}</span>
                    </li>
                    ))}                  
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Category
