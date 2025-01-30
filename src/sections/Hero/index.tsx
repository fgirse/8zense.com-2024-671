import Image from "next/image";
//import { useTranslations } from 'next-intl';
import React from "react";
import Gsap from "@/src/components/Gsap";

// import { useTranslationq55s } from 'next-intl';
import HeroImage from "@/public/images/interiore11.jpg";
import HeroImageMobile from "@/public/images/interiore14.jpg";
import Background from "@/public/images/footsteps.png";
import { Locale } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import TypeAnimation from "@/src/components/TypingAnimation"


const locale: string = "en";
export default function Hero () {
  

  const t = useTranslations("Hero");

  return (
<section id="section-Hero" className="bg-[url('/images/interiore27.jpg')] bg-contain bg-no-repeat full flex-col items-center lg:bg-[url('/images/interiore13.jpg')] lg:bg-cover lg:bg-no-repea ">
    
      <div className="  flex min-h-screen flex-col items-center">
      
 
               
        <div className="flex items-center justify-center">

        <div className="flex-col items-center justify-center p-6 md:w-4/5 md:px-28 md:py-12">
        <h1 className="relative mb-2 text-center top-5 text-[1.33rem] leading-9 lg:text-white font-robotoC uppercase text-neutral-100  sm:text-4xl md:text-6x lg:mb-7 lg:top-1 xl:text-[.66rem] md:text-5xl ">
        
          {t("präTitle")}
         </h1>
         <div className="flex flex-col items-center">
          t
        <h1 className="aligncontent -mb-3 font-bowlbySC relative top-[3vh] text-[3.0rem] uppercase leading-3 text-[#d3d355] headingC sm:text-4xl md:text-8xl md:top-3 lg:text-[8rem]   xl:text-[12rem] xl:top-8">
          {t("Title")}
        </h1>
        </div>
        <p className="relative top-12 text-center text-[1.0663rem] leading-8 text-neutral-100 sm:text-4xl md:top-3 md:tet-4xl lg:mb-4 lg:top-16 lg:text-center lg:text-5xl lg:text-neutral-50">
          {t("postTitle")}
        </p>
        <div className="mt-56 flex flex-col items-center justify-cente lg:mt-16">
        <Gsap/>
        </div>
        </div>                                                                                                                      
       </div>
     
      </div>
    </section>
  );
}