import React from 'react'
import {compass} from "../../public/Icon/index"

function TabButton() {
  return (
    <div 
    className='bg-black border-r-[1px] border-solid text-[#f5f5f5] w-64 pt-6 pl-6 h-screen flex flex-col justify-between'
    >
      <div>
        <h1 
        className="text-4xl font-bold opacity-90 mb-8"
        >
          Instagram
        </h1>
        
        <ul className='text-[#f5f5f5] opacity-90 text-[16px] font-bold'>
          <li className='py-2 flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </li>

          <li className='py-2 flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            Search
          </li>

          <li className='py-2 flex items-center gap-2'>
          <i className="fa-regular fa-compass"></i>
          Explore
          </li>
          <li className='py-2 relative flex items-center gap-2'>
            <i className="fa-solid fa-clapperboard">
              <div className='text-black inline absolute top-[20px] left-[6px] text-[6px]'>
              <i className="fa-solid fa-play" ></i>
              </div>
            </i>
            Reels
          </li>
          <li className='py-2 flex items-center gap-2'>
            <i className="fa-brands fa-facebook-messenger"></i>
            Messages
          </li>
          <li className='py-2 flex items-center gap-2'>
          <i className="fa-regular fa-heart"></i>
            Notifications
            </li>
          <li className='py-2 flex items-center gap-2'>
            <i className="fa-regular fa-square-plus"></i>
            Create
          </li>
          <li className='py-2 flex items-center gap-2'>
            <i className="fa-regular fa-user"></i>
            Profile
          </li>
        </ul>
      </div>

      <div>
        <ul 
        className='text-[#f5f5f5] opacity-90 font-bold text-[16px] mb-12'
        >
          <li className='flex items-center gap-2'>
            <h1>@</h1>
            Threads
          </li>
          <li className='flex items-center gap-2'>
            <i className="fa-solid fa-bars"></i>
            More
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TabButton
