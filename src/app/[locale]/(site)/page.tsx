

import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar/navbar";
import Benefits from "@/src/sections/Benefits";
import HowItWorks from "@/src/sections/HowItWorks";
//import AuthInfo from "@/src/components/layout/AuthInfo/AuthInfoBar";
import IntroWebside from "@/src/sections/Intro";
import Hero from "@/src/sections/Hero";
import FeatureAnimated from "@/src/sections/FeatureAnimated";
import ColorChangeCards from "@/src/sections/ColorChangeCards";
import CallToAct from "@/src/sections/CallToAct";
import HorizontalScroll from "@/src/components/HorizontalScrollCarousel";
import CollapseCardFeatures from "@/src/sections/ColllapsCardFeatures";
import { NextIntlClientProvider } from "next-intl";

export default function Home() {
	return (
	
	
		
		
		
     <>
      <div className="flex-col bg-[#0D121F] px-[2.5vw] lg:px-[1.0vw] text-white">
      <div className="flex-grow">
      <Hero />
      <IntroWebside />
      <CollapseCardFeatures/>
      <FeatureAnimated />
      <ColorChangeCards />
      <CallToAct />
      <HorizontalScroll />            
      </div>
      </div>
		</>

	);
}


{/*import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/AuthInfo/AuthInfoBar";
import IntroWebside from "@/src/sections/Intro";
import Hero from "@/src/sections/Hero";


export default function Home() {

  return (

    
    <main>
      <div className="bg-[#0D121F] px-[2.5vw] lg:px-[1.vw] text-white">
        <Hero />
      </div>
   ©
      <section className="mt-60 bg-[#0D121F] px-[2.5vw] lg:px-[1.0vw] text-white">
      <CollapseCardFeatures />
      </section>
      <FeatureAnimated />
      <ColorChangeCards />
      <CallToAct />
      <HorizontalScroll />
      <Footer />                                       
    </main>
  );
}
*/}