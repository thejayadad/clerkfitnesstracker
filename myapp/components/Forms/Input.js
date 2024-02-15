import React from 'react'

const Input = ({ placeholder }) => {
  return (
    <input
    type="text"
    placeholder={placeholder}
    className="px-4 py-2 w-56  rounded focus:outline-none focus:border-primary"
    />
  )
}

export default Input