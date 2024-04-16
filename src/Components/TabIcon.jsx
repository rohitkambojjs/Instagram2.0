import React from 'react'

function TabIcon() {
  return (
    <div
    className='bg-black border-r-[1px] border-solid text-[#f5f5f5] w-24 pt-6 h-screen flex flex-col justify-between items-center'
    >
      <div>
        <h1 
        className="text-4xl font-bold opacity-90 mb-8"
        >
          <i class="fa-brands fa-instagram"></i>
        </h1>
        <ul className='text-[#f5f5f5] opacity-90 text-[22px] font-bold'>
          <li className='py-3 flex items-center'>
            <i class="fa-solid fa-house"></i>
          </li>

          <li className='py-3 flex items-center'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>

          <li className='py-3 flex items-center'>
            <i className="fa-regular fa-compass"></i>
          </li>
          <li className='py-3 relative flex items-center'>
            <i className="fa-solid fa-clapperboard">
              <div className='text-black inline absolute top-[23.5px] left-[9px] text-[6px]'>
              <i className="fa-solid fa-play" ></i>
              </div>
            </i>
          </li>
          <li className='py-3 flex items-center'>
            <i className="fa-brands fa-facebook-messenger"></i>
          </li>
          <li className='py-3 flex items-center'>
          <i className="fa-regular fa-heart"></i>
            </li>
          <li className='py-3 flex items-center'>
            <i className="fa-regular fa-square-plus"></i>
          </li>
          <li className='py-3 flex items-center'>
            <i className="fa-regular fa-user"></i>
          </li>
        </ul>
      </div>

      <div>
        <ul 
        
        >
          <li className='flex items-center'>
            
          </li>
        </ul>
        <button 
        className='text-[#f5f5f5] opacity-90 text-[22px] font-bold mb-6'>
        <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  )
}

export default TabIcon
