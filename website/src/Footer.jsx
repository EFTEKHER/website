import React from 'react'

const Footer = () => {
    var date=new Date();
    var year=date.getFullYear();
  return (
    <div className='flex justify-center bg-violet-800 text-[white] min-w-full min-h-8 p-4'>
      All right reserved &copy; {year} Tailwind e-commerce
    </div>
  )
}

export default Footer
