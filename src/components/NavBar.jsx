"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const { data: session, status } = useSession();
    console.log(session)
  return (
    <nav className='flex justify-between py-4 px-5 bg-white sticky mb-5 items-center'>
      <Link href="/" className='cursor-pointer'>Home</Link>
    <div className='flex gap-3 items-center'>
              {status === "authenticated" ? (
                  <>
                      <button className='cursor-pointer text-red-600 hover:bg-red-50 py-1 px-3 rounded-md transition-all duration-150 font-medium' onClick={signOut}>Log Out</button>
                  </>
              ) : (<>
              <Link href="/signin" className='cursor-pointer border border-[#4F46E5] bg-[#4F46E5] text-white py-1 px-3 rounded-md hover:border-[#4338CA] hover:bg-[#4338CA] transition-all duration-150'>Sign In</Link>
        <Link href="/signup" className='cursor-pointer border border-[#4F46E5] text-[#4F46E5] bg-transparent hover:bg-indigo-50 py-1 px-3 rounded-md transition-all duration-150'>Sign Up</Link></>
                  
           )}   
        
       </div>
    </nav>
  )
}

export default NavBar
