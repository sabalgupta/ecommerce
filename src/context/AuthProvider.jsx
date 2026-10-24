"use client";
import { SessionProvider } from 'next-auth/react'
import React, { useState } from 'react'

const AuthProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState("");
  return (
      <SessionProvider>
          {children}
    </SessionProvider>
  )
}

export default AuthProvider
