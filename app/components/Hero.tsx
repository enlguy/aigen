import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The Future of <span className="text-indigo-400">Your Business</span>{" "}
            Starts Here
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Automate. Optimize. Scale. Our SaaS platform gives you the tools to
            grow effortlessly.
          </p>
          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <Image
            src="/hero-image.png"
            alt="SaaS Dashboard"
            width={500}
            height={500}
            className="rounded-lg shadow-lg relative z-10"
          />
        </div>
      </div>

      {/* SVG Wave Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-40 animate-wave"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,197.3C1120,224,1280,224,1360,224L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#6366F1" offset="0%" />
              <stop stopColor="#111827" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-wave {
          animation: waveAnimation 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
