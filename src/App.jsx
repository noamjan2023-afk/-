import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Scene3D from './Scene3D';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Trust from './components/Trust';
import Booking from './components/Booking';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import SchemaMarkup from './components/SchemaMarkup';

gsap.registerPlugin(ScrollTrigger);

const USE_CUSTOM_CURSOR = true;

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    // Canvas global scroll animation
    gsap.to("#canvas-container", {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      scale: 0.6,
      opacity: 0.3,
      y: "10%",
      ease: "none"
    });
  }, [isLoaded]);

  return (
    <div className="relative w-full bg-obsidian text-neutral-100 min-h-screen font-sans selection:bg-accent selection:text-obsidian">
      <SchemaMarkup />
      
      {USE_CUSTOM_CURSOR && (
        <>
          <div className="hidden md:block pointer-events-none">
            <CustomCursor />
          </div>
          <style>{`
            @media (pointer: fine) {
              * { cursor: none !important; }
            }
          `}</style>
        </>
      )}
      
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <div id="canvas-container" className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene3D />
        </Canvas>
      </div>

      <main className="relative z-10">
        <Hero isLoaded={isLoaded} />
        <Services />
        <Showcase />
        <Trust />
        <Booking />
      </main>

    </div>
  );
}
