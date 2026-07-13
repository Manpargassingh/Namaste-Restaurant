import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative min-h-[440px] overflow-hidden">
        <Image
          src="/menu-hero.jpg"
          alt="A selection of Namaste Indian Cuisine dishes"
          width={1050}
          height={500}
          sizes="100vw"
          className="h-[60vh] min-h-[440px] w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-7xl">
            OUR MENU
            </h1>
            <div className="mx-auto mt-6 border-y border-[#d99e5f] bg-[#110c09]/90 px-4 py-4 shadow-[0_12px_36px_rgba(17,12,9,0.35)] backdrop-blur-sm sm:px-8">
              <p className="text-lg font-extrabold uppercase tracking-[0.12em] text-[#f0b36f] sm:text-xl md:text-2xl">
                Dinner Buffet Every Saturday
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-white sm:text-base md:text-lg">
                Adult $26 <span className="px-1 text-[#d99e5f] sm:px-3">|</span> Seniors $25 <span className="px-1 text-[#d99e5f] sm:px-3">|</span> Kid Age x $1.50
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
