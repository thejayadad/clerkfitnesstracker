import React from 'react'

const HeroContainer = ({children}) => {
  return (
  <section className='flex flex-col items-center justify-center max-w-5xl'>
  <div className='flex items-center'>
  {children}
    </div>
  </section>    
  )
}

export default HeroContainer