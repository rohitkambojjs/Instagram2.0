import React from 'react'
import { Facebook, GooglePlay, Microsoft} from '../../public'

function SingupPage() {
  return (
  <div className='flex flex-col justify-center items-center'>
    <h1 className="text-4xl font-bold opacity-75 my-6">Instagram</h1>
    <div className='flex flex-col justify-center items-center text-sm mb-4'>
      <h2>Sign up to see photos and videos</h2>
      <h2>from your friends.</h2>
    </div>

    <div>
      <button className='flex justify-center items-center gap-3 w-64 bg-blue-400 py-2 px-4 text-white text-sm font-bold rounded-lg'>
        <img src={Facebook} width={"25px"} alt=""/>
        Log in with Facebook
      </button>
    </div>

    <h1 className='my-2 font-semibold'>OR</h1>

    <form action="" className='flex flex-col justify-center items-center'>
      <input type="email" 
      placeholder="Phone number or Email"
      className="w-64 rounded bg-[#FAFAFA] border-[1px] border-solid pl-2 pt-[9px] pb-[7px] text-sm mb-4"
      />
        
      <input type="text" 
      placeholder="Full Name"
      className="w-64 rounded border-[1px] border-solid pl-2 pt-[9px] pb-[7px] text-sm mb-4"
      />

      <input type="text" 
      placeholder="Username"
      className="w-64 rounded border-[1px] border-solid pl-2 pt-[9px] pb-[7px] text-sm mb-4"
      />

      <input type="password" 
      placeholder="Password"
      className="w-64 rounded border-[1px] border-solid pl-2 pt-[9px] pb-[7px] text-sm mb-4"
      />

      <button className="w-64 bg-blue-400 py-2 px-4 text-white text-sm font-bold rounded-lg ">Sign Up</button>
    </form>
    <div className="flex items-center justify-center my-4 border-2 w-fit m-auto py-2 px-10  border-solid ">
      <h1 className="text-sm mr-2">Don't have account?</h1>
      <button className="text-[#0095f7] text-sm font-bold">Sign Up</button>
    </div>
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-sm m-2">Get the app</h1>
      <div className="mb-4 flex items-center justify-center gap-3">
        <img src={GooglePlay} alt="" width={"122px"}/>
        <img src={Microsoft} alt="" width={"100px"}/>
      </div>
    </div>
  </div>
  )
}

export default SingupPage
