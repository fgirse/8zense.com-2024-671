"use client";

import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar/navbar";
import Benefits from "@/src/sections/Benefits";
import HowItWorks from "@/src/sections/HowItWorks";
import AuthInfo from "@/src/components/layout/AuthInfo/AuthInfoBar";
import IntroWebside from "@/src/sections/Intro";
import Hero from "@/src/sections/Hero";
import FeatureAnimated from "@/src/sections/FeatureAnimated";
import CollapseCardFeatures from "@/src/sections/ColllapsCardFeatures";
import ColorChangeCards from "@/src/sections/ColorChangeCards";
import CallToAct from "@/src/sections/CallToAct";
//import Pricing from "@/src/sections/Pricing";
//import Testimonials from "@/sections/Testimonials";
//import WhyUs from "@/sections/WhyUs";

export default function Home() {
	return (
	<>
			<div className="bg-[#0D121F] px-[100px] text-white">
			<AuthInfo />
      	<Navbar />
				
			</div>
      <div className="bg-[#0D121F] px-[2.5vw] lg:px-[1.vw] text-white">
        <Hero />
        <IntroWebside />
        <CollapseCardFeatures/>
      </div>
			<Benefits />
			<HowItWorks />
		
			<Footer />
		à </>
	);
}


{/*import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/AuthInfo/AuthInfoBar";
import IntroWebside from "@/src/sections/Intro";
import Hero from "@/src/sections/Hero";
import FeatureAnimated from "@/src/sections/FeatureAnimated";
import CollapseCardFeatures from "@/src/sections/ColllapsCardFeatures";
import ColorChangeCards from "@/src/sections/ColorChangeCards";
import CallToAct from "@/src/sections/CallToAct";
import HorizontalScroll from "@/src/components/HorizontalScrollCarousel";

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