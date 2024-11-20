import React from 'react'

const DetailsPopup = ({selectedPet, closePopup}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
                <img src={selectedPet?.image} alt="" />
              <h2 className="text-xl lato_thin font-bold mt-3 mb-3">{selectedPet?.pet_name}</h2>
              <ul className="mb-4 lato_thin">
                <li className='mb-2'><strong>Breed:</strong> {selectedPet?.breed || "NOT FOUND..!"}</li>
                <li className='mb-2'><strong>Birth:</strong> {selectedPet?.date_of_birth || "NOT FOUND..!"}</li>
                <li className='mb-2'><strong>Gender:</strong> {selectedPet?.gender || "NOT FOUND..!"}</li>
                <li className='mb-2'><strong>Price:</strong> {selectedPet?.price || "NOT FOUND..!"}</li>
              </ul>
              <button 
                className="px-7 py-2 bg-gray-500 text-white rounded-lg" 
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
    </>
  )
}

export default DetailsPopup
