"use client";

import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/AuthInfo/AuthInfoBar";
import IntroWebside from "@/src/sections/Intro";
import Hero from "@/src/sections/Hero";
import FeatureAnimated from "@/src/sections/FeatureAnimated";
import CollapseCardFeatures from "@/src/sections/ColllapsCardFeatures";
import ColorChangeCards from "@/src/sections/ColorChangeCards";
import CallToAct from "@/src/sections/CallToAct";
import HorizontalScroll from "@/src/components/HorizontalScrollCarousel";


import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('@/worker.js', import.meta.url));

      worker.onerror = function (event) {
        console.error('Error in Web Worker:', event.message);
        // Perform error handling here
      };

      worker.postMessage('Some data for the Web Worker');

      return () => {
        worker.terminate();
      };
    }
  }, []);

  return (

    
    <main>
      <div className="bg-[#0D121F] px-[2.5vw] lg:px-[1.vw] text-white">
        <Hero />
      </div>
      <IntroWebside />
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
