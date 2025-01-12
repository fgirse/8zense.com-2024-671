import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTranslations } from 'next-intl';
import EmailModal from "@/src/components/EmailModal";  
import EmailForm from '@/src/components/emails/welcome';
import Trigger  from '@/src/components/emails/Trigger';

const CallToAct: React.FC = () => {
  const t = useTranslations('CallToAct');

  return (
    <div className='bg-orange-400/90 flex flex-col justify-center items-center'> 
      <h1 className='font-bold text-neutral-100 py-20 text-4xl text-center'>{t('Fragen')}</h1>
      <p className='text-center text-neutral-100 text-lg font-raleway'>{t('FragenText01')}</p>
      <div className=''>
        {/* Other content */}
      </div>
      <Trigger />
      <DotLottieReact
        src="/images/calltoact.lottie"
        loop
        autoplay
        className='relative -top-20 w-[85vw] h-[86vh] mx-auto'
      />
    </div>
  );
};

export default CallToAct;           


