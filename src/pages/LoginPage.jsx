import React from "react";
import { GooglePlay, Microsoft, Facebook, image1, image2, image3  } from "../../public/index"

function LoginPage(){
    
    return(
    <div className="flex justify-evenly items-center h-screen">
        <div className="relative w-80 h-[476px]">
            <img src={image1} width={"220px"} className="absolute left-28 top-0" alt="images" />
            <img src={image2} width={"220px"} className="absolute left-28 top-0" alt="images" />
            <img src={image3} width={"220px"} className="absolute left-52 top-0" alt="images" />
        </div>
        <div className="px-10 flex flex-col justify-center items-center border-2 border-solid">
            <h1 className="text-4xl font-bold opacity-75 my-6">Instagram</h1>
            <form 
            className="flex flex-col items-center justify-center"
            >
                <input type="text" 
                placeholder="Phone number, username, or email"
                className="w-64 rounded bg-[#FAFAFA] border-[1px] border-solid pl-2 pt-[9px] pb-[7px] text-sm mb-4"
                />
                
                <input type="text" 
                placeholder="Password"
                className="w-64 rounded border-[1px] border-solid pl-2 pt-[9px] pb-[7px] text-sm mb-4"
                />

                <button className="w-64 bg-blue-400 py-2 px-4 text-white text-sm font-bold rounded-lg">Login</button>
            </form>

            <div className="my-4 font-bold opacity-55 text">OR</div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <img src={Facebook} alt="" width={"20px"}/>
                    <h1 className="text-lg text-[#385185] ml-2">Log in with facebook</h1>
                </div>
                <p className="text-[#00376b] mt-4 mb-2">Forgot Password?</p>
            </div>
        
        <div className="flex items-center justify-center my-4 border-2 w-fit m-auto py-2 px-6  border-solid ">
            <h1 className="text-sm mr-2">Don't have an account?</h1>
            <button className="text-[#0095f7] text-base font-bold">Sign Up</button>
        </div>
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-sm m-2">Get the app</h1>
            <div className="mb-4 flex items-center justify-center gap-3">
                <img src={GooglePlay} alt="" width={"122px"}/>
                <img src={Microsoft} alt="" width={"100px"}/>
            </div>
        </div>
        </div>
    </div>
    )
}

export default LoginPage