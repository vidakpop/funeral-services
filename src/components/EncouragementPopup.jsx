import React, { useState } from 'react'

const EncouragementPopup = () => {
    const [isVisible, setIsVisible] = useState(true);
  return isVisible? (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <p className='text-gray-700 font-semibold text-lg'>"Sending you love and strength during this tough time."</p>
            <button className='mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700' onClick={()=>setIsVisible(false)}>Close</button>

            
        </div>

    </div>
  ):null;
}

export default EncouragementPopup