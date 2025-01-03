import React from 'react'
import { useTranslations } from 'next-intl'
const page = () => {

    const t=useTranslations("Whatwedo")
  return (
    <div className='flex flex-col h-screen items-center justify-center text-center text-neutral-700 text-4xl lg:text-7xl'>
    
    <h1 className='uppercase text-center text-neutral-700 text-4xl lg:text-7xl'>{t('Title_Whatwedo')}</h1>
    </div>
    
  )
}

export default page

