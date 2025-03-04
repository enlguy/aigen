import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
      {/* Background Image - Full Screen */}
      <Image
        src="/high-res.webp"
        alt="Futuristic SaaS Dashboard"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 w-full h-full"
        priority
      />

      {/* Content Overlay (Above the Image) */}
      <div className="relative z-10 text-center max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          The Future of{" "}
          <span className="text-indigo-400">Business Automation</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 drop-shadow-lg">
          Optimize your workflow with cutting-edge analytics and automation.
        </p>
        <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>

      {/* Waveform Animation Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="waveform"></div>
      </div>

      {/* CSS for Enhanced Waveform Animation */}
      <style jsx>{`
        .waveform {
          position: absolute;
          top: 60%;
          left: 50%;
          width: 80%;
          height: 15%;
          background: rgba(79, 70, 229, 0.7);
          opacity: 0.8;
          filter: blur(10px);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: waveformMove 3s infinite ease-in-out alternate;
        }

        @keyframes waveformMove {
          0% {
            transform: translate(-50%, -48%) scaleX(1.1);
          }
          100% {
            transform: translate(-50%, -52%) scaleX(0.9);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
