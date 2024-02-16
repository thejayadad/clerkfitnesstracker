'use client'


import React from 'react'
import {CircularProgress} from "@nextui-org/react";


const loading = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='min-h-screen flex items-center justify-center'>
      
      <CircularProgress
    aria-label="Loading..."
    size="lg"
    value={value}
    color="warning"
    showValueLabel={true}

/>
    </div>
  
  )
}

export default loading