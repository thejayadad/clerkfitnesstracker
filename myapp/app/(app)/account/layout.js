import SideNavbar from '@/components/Account/SideNavbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNavbar />
     </div>
     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>

    </div>
  )
}

export default layout