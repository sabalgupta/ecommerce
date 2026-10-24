"use client";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignin = async (e) => {
    setLoading(true);
    setError("");
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false
      })
      
      if (result.ok) {
        router.push("/");
      }
      
      if (result.error){
        setError(result.error);
      }
      
    } catch (error) {
      console.log(error);
      setError("Some error occured.");
    }
    finally {
      setLoading(false);
    }
  }

  return (
   <div className='p-5 flex flex-col w-full items-center bg-white gap-3'>
          <h1 className='text-2xl'>Sign into your account</h1>
          <form className='flex flex-col items-center p-5 gap-5 w-full max-w-md border border-slate-200 rounded-md text-base' onSubmit={(e)=>handleSignin(e)}>
              <div className='flex flex-col gap-2 self-start w-full'>
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" id="username" className='bg-[#F8F8F9] border border-slate-200 rounded-md outline-none py-1 px-2 focus:ring focus:ring-indigo-500 transition-all duration-150' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              </div>

              <div className='flex flex-col gap-2 self-start w-full'>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className='bg-[#F8F8F9] border border-slate-200 rounded-md outline-none py-1 px-2 focus:ring focus:ring-indigo-500 transition-all duration-150' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>

              <p className='text-sm self-start'>Don't have an account? <span className='font-medium text-emerald-600 cursor-pointer'>Sign Up</span></p>

              <button type="submit" className='cursor-pointer border border-[#4F46E5] bg-[#4F46E5] text-white py-1 px-3 rounded-md hover:border-[#4338CA] hover:bg-[#4338CA] transition-all duration-150'>{loading?"Signing In...":"Sign In"}</button>
          </form>
    </div>
  )
}

export default page
