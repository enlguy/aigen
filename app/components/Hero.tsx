import Image from "next/image";
import { useEffect } from "react";
import { animateWave } from "../utils/waveAnimation";

const Hero = () => {
  useEffect(() => {
    animateWave();
  }, []);

  return (
    <div className="relative inset-0 bg-black bg-opacity-10">
      <section className="relative w-full h-screen flex justify-center items-center">
        <canvas
          id="waveCanvas"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

        {/* Background Image - Full Screen */}
        <Image
          src="/high-res.webp"
          alt="Futuristic SaaS Dashboard"
          layout="fill"
          objectFit="container"
          className="absolute inset-0 w-full h-full"
          priority
          z-0="true"
        />

        {/* Animated Wave Overlay */}
        <canvas
          id="waveCanvas"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

        {/* Overlay (Ensures Visibility & Proper Layering) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Overlay (Above the Image) */}
        <div className="relative z-10 text-center max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            The Future of{" "}
            <span className="text-indigo-400 font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Business Automation
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 drop-shadow-lg">
            Optimize your workflow with cutting-edge analytics and automation.
          </p>
          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
