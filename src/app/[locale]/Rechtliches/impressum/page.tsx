import React from 'react'
import Image from 'next/image' 
const page = () => {
  return (
    <div className="min-h-screen bg-[url('/images/impressum.jpg')] bg-cover bg-no-repeat flex flex-col items-center justify-center text-center text-neutral-700 text-4xl lg:text-7xl">
    
 <Image src="/images/impressum.jpg" alt="impressum" width={1920} height={1080} />   
    </div>
    
  )
}

export default page
