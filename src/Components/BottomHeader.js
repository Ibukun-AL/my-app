/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const BottomHeader = () => {
    const [tabPosition, setTabPosition] = useState(0);

  const handleTabClick = (index) => {
    setTabPosition(index);
  };
  return (
    <div className='flex flex-col justify-items-center p-3'>
        <div className=' p-2 ml-6 '>
            <a href="/" className='flex items-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
Back</a>
        </div>

        {/* Navigation bar */}
  <nav className='flex justify-between max-w-full overflow-x-auto ml-6'>
    {/* Links to the left */}
    <div className='flex relative'>
      <a href="#" className={`mr-4 ${tabPosition === 0 ? 'active-tab' : ''}`}
      onClick={() => handleTabClick(0)}
      >All</a>
      <a href="#" className={`mr-4 ${tabPosition === 1 ? 'active-tab' : ''}`}
      onClick={() => handleTabClick(1)}>Event 1</a>
      <a href="#" className={`mr-4 ${tabPosition === 2 ? 'active-tab' : ''}`}
      onClick={() => handleTabClick(2)}>Event 2</a>
      <a href="#" className={`mr-4 ${tabPosition === 3 ? 'active-tab' : ''}`}
      onClick={() => handleTabClick(3)}>Event 3</a>
      <a href="#" className={`mr-4 ${tabPosition === 4 ? 'active-tab' : ''}`}
      onClick={() => handleTabClick(4)}>Event 4</a>
      {/* Add more links as needed */}
       {/* Black Tab */}
       {tabPosition !== null && (
          <div className="absolute bottom-0 left-0 h-1 bg-black" style={{ width: 'auto', marginLeft: 'calc(50% - 30px)' }} />
        )}
    </div>
    {/* Divider line */}
    <br></br>
    
    
      
    {/* Icons/Buttons to the right */}
    <div className="flex items-center">
      <button className="mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" 
  d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 
  0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 
  3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 
  15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 
  3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 
  3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd" />
</svg>

      </button>
      <button className="mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
</svg>

      </button>
      <button className="mr-4 bg-black text-white rounded-lg border-2 border-solid
      border-black-500 p-2 text-lg">Add File</button>
      {/* Add more icons/buttons as needed */}
    </div>
    
  </nav>

{/* Divider line */}
  <div className="h-0.5 bg-black flex-grow my-auto mx-4" />
    </div>
  )
}

export default BottomHeader