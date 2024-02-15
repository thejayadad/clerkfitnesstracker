import React from 'react'

const SetupContainer = ({children}) => {
  return (
    <main className="min-h-full flex flex-col ">
    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">

        {children}
        </div>
    </main>
  )
}

export default SetupContainer