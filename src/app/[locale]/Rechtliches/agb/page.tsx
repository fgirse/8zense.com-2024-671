import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'  
const page = () => {
  const t=useTranslations('AGB')
  return (
    <div className='flex flex-col h-screen items-center justify-center text-center text-neutral-700 text-4xl lg:text-7xl'>
    <Image src='/images/agb.png' width={500} height={500} alt='cookies' />  
    <h1 className='uppercase text-center text-neutral-c700 text-4xl lg:text-7xl'>{t('AGB')}</h1>
    </div>
    
  )
}

export default page
