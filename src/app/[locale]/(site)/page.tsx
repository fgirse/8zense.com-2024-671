"use client";

import IntroWebside from "@/src/sections/Intro";
import Hero from "@/src/sections/Hero";
import FeatureAnimated from "@/src/sections/FeatureAnimated";
import ColorChangeCards from "@/src/sections/ColorChangeCards";
import CallToAct from "@/src/sections/CallToAct";
import HorizontalScroll from "@/src/components/HorizontalScrollCarousel";
import CollapseCardFeatures from "@/src/sections/ColllapsCardFeatures";

export default function Page() {
	return (
	<>
		
      <div className="bg-[#7c7a76] px-[2.5vw] lg:px-[1.vw] text-white">
        <Hero />
        <IntroWebside />
        <div className="bg-[#0D121F] px-[2.5vw] lg:px-[1.vw] text-white">
        <CollapseCardFeatures/>
        <ColorChangeCards />
        
        
        </div>
      </div>
	
		
			
		</>
	);
}
