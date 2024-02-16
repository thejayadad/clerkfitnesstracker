import TopHeader from '@/components/HomePage/TopHeader'
import React from 'react'

const layout = ({children}) => {
  return (
    <main className='h-full'>
      
       <div className="h-full pt-40">
        {children}
       </div>
    </main>
  )
}

export default layout