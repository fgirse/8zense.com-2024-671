import React from 'react'
import Image from 'next/image'  
const page = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center text-center text-neutral-700 text-4xl lg:text-7xl'>
    <Image src='/images/cookies.png' width={500} height={500} alt='cookies' />  
    <h1 className='uppercase text-center text-neutral-700 text-4xl lg:text-7xl'>cookies</h1>
    </div>
    
  )
}

export default page
