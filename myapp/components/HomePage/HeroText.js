import React from 'react'

const HeroText = ({heading, subtext, children}) => {
  return (
    <div className='max-w-2xl text-center mx-auto space-y-4'>
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">{heading}</h1>
      <p className="text-base sm:text-xl md:text-2xl font-medium">{subtext}</p>
      {children}
    </div>
  )
}

export default HeroText