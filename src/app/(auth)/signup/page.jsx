import React from 'react'
import {handleSignup} from '@/actions/auth'

const page = () => {
  return (
   <div className='p-5 flex flex-col w-full items-center bg-white gap-3'>
          <h1 className='text-2xl'>Create a new account</h1>
          <form action={handleSignup} className='flex flex-col items-center p-5 gap-5 w-full max-w-md border border-slate-200 rounded-md text-base'>
              <div className='flex flex-col gap-2 self-start w-full'>
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" id="username" className='bg-[#F8F8F9] border border-slate-200 rounded-md outline-none py-1 px-2 focus:ring focus:ring-indigo-500 transition-all duration-150'/>
              </div>

              <div className='flex flex-col gap-2 self-start w-full'>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className='bg-[#F8F8F9] border border-slate-200 rounded-md outline-none py-1 px-2 focus:ring focus:ring-indigo-500 transition-all duration-150' />
              </div>

              <p className='text-sm self-start'>Already have an account? <span className='font-medium text-emerald-600 cursor-pointer'>Sign In</span></p>

              <button type="submit" className='cursor-pointer border border-[#4F46E5] bg-[#4F46E5] text-white py-1 px-3 rounded-md hover:border-[#4338CA] hover:bg-[#4338CA] transition-all duration-150'>Sign Up</button>
          </form>
    </div>
  )
}

export default page
