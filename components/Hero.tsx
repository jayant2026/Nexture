"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  // Performance optimization - only animate after component is mounted
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative elements with improved aesthetics */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-indigo-200 opacity-20 blur-3xl" />
      
      {/* Subtle animated grid pattern for depth */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEgMSAyLjEgMi4yczEgMi4xIDIuMSAyLjFjMS4yIDAgMi4xLTEgMi4xLTIuMXMxLTIuMSAyLjEtMi4xYzEuMiAwIDIuMSAxIDIuMSAyLjFzMSAyLjEgMi4xIDIuMWMxLjIgMCAyLjEtMSAyLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xLTEtMi4xLTIuMXMtLjktMi4xLTIuMS0yLjFjLTEuMiAwLTIuMSAxLTIuMSAyLjFzLS45IDIuMS0yLjEgMi4xYy0xLjIgMC0yLjEtMS0yLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xIDEtMi4xIDIuMXMtLjkgMi4xLTIuMSAyLjFjLTEuMiAwLTIuMS0xLTIuMS0yLjEiIHN0cm9rZT0iI2JmZDNmMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-40" />

      <div className="container relative z-10 mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Content Column */}
          <div className="w-full max-w-2xl lg:w-[45%]">
            {/* Headline with improved animation */}
            <h1 className="text-left text-3xl font-bold leading-tight text-slate-800 md:text-4xl lg:text-5xl xl:text-6xl">
              {isMounted && 
                "Expert Sales Agents & Customer Support Outsourcing"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))
              }
            </h1>
            
            {/* Subheading with gradient text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="mt-6 text-left text-lg font-normal leading-relaxed text-slate-600 md:text-xl"
            >
              Enhance your revenue and customer satisfaction with our{" "}
              <span className="bg-gray-600 bg-clip-text font-medium text-transparent">
                expert BPO and call center professionals
              </span>.
            </motion.p>
            
            {/* CTA buttons with improved design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              className="mt-8 flex flex-wrap items-start gap-4 sm:flex-row"
            >
              <button className="group relative overflow-hidden rounded-lg bg-black px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/40 cursor-pointer">
                <span className="relative z-10">Request Proposal</span>
                <span className="absolute bottom-0 left-0 h-1 w-full transform bg-white/20 transition-all duration-300 group-hover:h-full"></span>
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button className="relative rounded-lg border-2 border-slate-200 bg-white/80 px-8 py-4 font-medium text-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-blue-100/60 cursor-pointer">
                View Services
              </button>
            </motion.div>
            
            {/* Enhanced trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                {
                  icon: (
                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ),
                  text: "200+ Successful Placements",
                },
                {
                  icon: (
                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: "50+ Partner Companies",
                },
                {
                  icon: (
                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  ),
                  text: "15+ Cities Covered",
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center rounded-lg border border-slate-100 bg-white/80 p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md"
                >
                  <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Column with advanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="relative w-full max-w-lg lg:w-[50%]"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-100 opacity-70 blur-lg" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-indigo-100 opacity-70 blur-lg" />
              
              {/* Main image with Next.js Image component */}
              <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50 relative">
                  <Image
                    src="/hero.avif"
                    alt="Business professionals in a collaborative meeting"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 hover:scale-105"
                    priority
                  />
                </div>
                
                {/* Image overlay caption */}
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-3 backdrop-blur-sm">
                  <p className="text-sm font-medium text-slate-800">
                    Our team of expert sales agents delivering exceptional results
                  </p>
                </div>
              </div>
              
              {/* Floating stat cards for visual interest */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-5 top-1/4 z-20 rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-lg"
              >
                <p className="text-xs font-medium text-slate-500">Customer Satisfaction</p>
                <p className="text-xl font-bold text-slate-500">97%</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -right-5 bottom-1/4 z-20 rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-lg"
              >
                <p className="text-xs font-medium text-slate-500">Revenue Growth</p>
                <p className="text-xl font-bold text-slate-500">+43%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;