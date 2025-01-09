// index.tsx
"use client"
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LottieAnimation from '@/src/components/LottiAnimation';
import animationData1 from '@/public/images/lotti.json';              
import animationData2 from '@/public/images/lotti01.json';
import animationData3 from '@/public/images/lotti02.json';                  
import animationData4 from '@/public/images/lotti03.json';    
import animationData5 from '@/public/images/lotti04.json';
import animationData6 from '@/public/images/lotti05.json';
import animationData7 from '@/public/images/lotti06.json';                                     
// Import other animation data as needed
import { useTranslations } from 'next-intl';
import  { FC } from 'react';

const stories = [animationData1, animationData2, animationData3, animationData4, animationData5, animationData6,  animationData7 /*, other animation data */];

 const FeatureAnimated: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const goToPreviousStory = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    }
  };

  const goToNextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
    }
  };

  const t = useTranslations('HowItWorks');             
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='uppercase text-4xl md:text-6xl lg:text-7xl'>{t('Howitworks')}</h1>
      <LottieAnimation animationData={stories[currentStory]} />
      <div className='mb-7 flex gap-x-5 justify-center'>
        <button className='rounded-lg border-2 border-stone-300 text-2xl px-2 hover:bg-stone-300 hover:text-stone-700 hover:cursor-pointer md:text-[1.66rem] lg:text-[2.33rem]'  onClick={goToPreviousStory} disabled={currentStory === 0}>
          {t('Previous')}
        </button>
        <button className='rounded-lg border-2 border-stone-300 text-2xl px-2 hover:bg-stone-300 hover:text-stone-700 hover:cursor-pointer md:text-[1.66rem] lg:text-[2.33rem]' onClick={goToNextStory} disabled={currentStory === stories.length - 1}>
         {t('Next')}
        </button>
      </div>
    </div>
    );}
    export default FeatureAnimated;