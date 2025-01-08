import React from 'react'
import { useTranslations } from 'next-intl'
const page = () => {

    const t=useTranslations('Contact')
  return (
  
    

     <div className='min-h-lvh flex flex-col items-center justify-center text-neutral-700 text-4xl lg:text-7xl h-screen'>
    
     <h1 className='uppercase text-center text-neutral-700 text-4xl lg:text-7xl'>{t('Title_Contact')}</h1>
     </div>
     
    
  )
}

export default page