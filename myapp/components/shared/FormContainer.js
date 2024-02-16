import React from 'react'
import { FaDumbbell } from 'react-icons/fa'

const FormContainer = ({children}) => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-screen-md justify-center">
        <span className="mr-4">
        <FaDumbbell className="text-3xl" />
      </span>
       <div>
       {children}
       </div>
    </div>
  )
}

export default FormContainer