import SideNavbar from '@/components/Account/SideNavbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNavbar />
     </div>
      <main className="md:pl-20 pt-16 h-full">
        {children}
      </main>
    </div>
  )
}

export default layout