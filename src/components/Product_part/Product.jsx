import React, { useState } from 'react'
import Category from '../Cetagory_part/Category'
import { dog, petsAll } from '../../assets/data'
import { AiOutlineLike } from "react-icons/ai";
import DetailsPopup from '../Details_popup/DetailsPopup';
import AdoptCount from '../AdoptCount_part/AdoptCount';

const Product = () => {

    const [likepet, setLikepet] = useState([]); 
    const [selectedPet, setSelectedPet] = useState(null); 
    const [adoptCount, setAdoptCount] = useState(3); 
    const [showCongratsPopup, setShowCongratsPopup] = useState(false);
    
    
    
    const handleDetailsClick=(pet)=>{
        setSelectedPet(pet)        
    }

    const handleAdoptClick = ()=>{
        setShowCongratsPopup(true);
        let timer = adoptCount;
        const stopCount = setInterval(() => {
          timer -= 1;
          setAdoptCount(timer);
          if (timer <= 0) {
            clearInterval(stopCount);
            setShowCongratsPopup(false); 
            setAdoptCount(3); 
          }
        }, 1000);
    }

    const handleLickClick = (pet) => {
        if (!likepet.find((imgpet) => imgpet.image === pet.image)) {
            setLikepet([...likepet, pet]); 
          }     
    }
    
    const closePopup = () => {
        setSelectedPet(null);
    };
    

    const onclickHandleCategoru = (categoryId)=>{
        console.log(categoryId)
    }   

  return (
    <>
    <Category onChangeCatagory={onclickHandleCategoru} />
    <div id='product' className=" h-[2700px] md:h-[3490px] lg:h-[4000px] xl:h-[2700px]">
    <div className="container">
        <div className="grid grid-cols-4 gap-7">
            <div className=" col-span-3 w-full h-20">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {petsAll.map((item, index)=>(
                        <div key={index} className="w-full p-5 bg-[#f7f7f7] rounded-2xl">
                            <img src={item.image} alt="" />
                            <div className="mt-4">
                                <h2 className='lato_thin text-[20px] font-bold'>{item.pet_name}</h2>
                                <ul className='lato_thin text-[15px] font-medium text-[#131313B2]'>
                                    <li>Breed: {item.breed ? item.breed : "NOT FOUND..!"}</li>
                                    <li>Birth: {item.date_of_birth ? item.date_of_birth : "NOT FOUND..!"}</li>
                                    <li>Gender: {item.gender ? item.gender : "NOT FOUND..!"}</li>
                                    <li>Price: {item.price ? item.price : "NOT FOUND..!"}</li>
                                </ul>
                                <div className="flex justify-between mt-4 text-white">
                                    <button onClick={()=>handleLickClick(item)} className='px-5 md:px-3 lg:px-5 py-2 bg-gray-700 rounded-lg' type='button'><AiOutlineLike className='text-[25px] md:text-[20px]' /></button>
                                    <button onClick={handleAdoptClick} className='px-5 md:px-2 lg:px-5 py-2 bg-gray-700 rounded-lg' type='button'>Adopt</button>
                                    <button onClick={() => handleDetailsClick(item)} className='px-5 md:px-2 lg:px-5 py-2 bg-gray-700 rounded-lg' type='button'>Details</button>
                                </div>
                            </div>
                        </div>                   
                    ))}
                </div>
            </div>
            <div className=" w-full py-4">
                <div className="grid grid-cols-2 gap-6">
                    {likepet.map((petImg, index)=>(
                        <div key={index} className="w-full h-[70px] xl:h-[120px] bg-fuchsia-900">
                            <img className='w-full h-full object-cover' src={petImg.image} alt="" />
                        </div>
                    ))}                                       
                </div>
            </div>
        </div>
    </div>
    {/* -----------details-popup--------- */}
    {selectedPet && (
        <DetailsPopup selectedPet={selectedPet} closePopup={closePopup} />
    )}
    {/* -----------Adopt-popup--------- */}
    {showCongratsPopup && (
        <AdoptCount adoptCount={adoptCount}/>
    )}  
    </div>
    
    </>
  )
}

export default Product
