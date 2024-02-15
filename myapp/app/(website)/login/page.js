import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle'
import React from 'react'

const LoginPage = () => {
  return (
    <main className="min-h-full flex flex-col ">
    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <p
        className="text-base sm:text-xl md:text-2xl font-medium"
        >
            LoginBelow
        </p>
        <LoginWithGoogle />
    </div>        
    </main>
  )
}

export default LoginPage