"use client";

import { Check } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import FeatureCard from "./ui/FeatureCard";


const WhyChooseUs = () => {
  // Performance optimization - only animate after component is mounted
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const benefitPoints = [
    "Hire trained BDEs at 20 percent lower cost compared to market rates.",
    "Robust quality assurance systems ensure consistent performance.",
    "Daily productivity is monitored with data-backed sales team reviews.",
    "Advanced sales training and quality assurance modules are customized as per client requirements.",
    "Sales funnel tracking provides full visibility and actionable insights for clients."
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
      {/* Decorative elements similar to hero */}
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-10 blur-3xl" />
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-200 opacity-10 blur-3xl" />
      
      {/* Subtle animated grid pattern for depth - same as hero */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEgMSAyLjEgMi4yczEgMi4xIDIuMSAyLjFjMS4yIDAgMi4xLTEgMi4xLTIuMXMxLTIuMSAyLjEtMi4xYzEuMiAwIDIuMSAxIDIuMSAyLjFzMSAyLjEgMi4xIDIuMWMxLjIgMCAyLjEtMSAyLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xLTEtMi4xLTIuMXMtLjktMi4xLTIuMS0yLjFjLTEuMiAwLTIuMSAxLTIuMSAyLjFzLS45IDIuMS0yLjEgMi4xYy0xLjIgMC0yLjEtMS0yLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xIDEtMi4xIDIuMXMtLjkgMi4xLTIuMSAyLjFjLTEuMiAwLTIuMS0xLTIuMS0yLjEiIHN0cm9rZT0iI2JmZDNmMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-40" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content Column */}
            <div className="relative">
              {/* Section label with animation */}
              {isMounted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-3 inline-block rounded-full bg-blue-100/80 px-4 py-1 backdrop-blur-sm"
                >
                  <p className="text-sm font-medium text-blue-800">Why Partner With Us</p>
                </motion.div>
              )}
              
              {/* Heading with animation */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-4xl lg:text-5xl"
              >
                Why Choose Nexture
              </motion.h2>
              
              {/* Description with animation */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isMounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-10 max-w-2xl text-lg font-normal leading-relaxed text-slate-600"
              >
                Our training-first approach ensures consistent, high-quality outcomes. By investing in rigorous Stage-1 onboarding for aspiring Business Development Executives (BDEs), we build a ready-to-deploy talent pipeline that delivers measurable impact from day one.
              </motion.p>
              
              {/* Benefits list with staggered animation */}
              <div className="space-y-4">
                {benefitPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isMounted ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + index * 0.1,
                    }}
                    className="flex rounded-lg bg-white/50 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-800">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-slate-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Features Grid Column with advanced effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isMounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100 opacity-40 blur-xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-indigo-100 opacity-40 blur-xl" />
              
              <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-100 bg-white/20 p-6 shadow-xl shadow-blue-100/20 backdrop-blur-sm md:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "In-depth QA Support",
                      description: "Our comprehensive QA systems and SOPs ensure consistent excellence in every interaction."
                    },
                    {
                      title: "Training Excellence",
                      description: "Comprehensive 15-days customised training program for every resource."
                    },
                    {
                      title: "Performance Check-ins",
                      description: "Data-driven reviews optimize productivity, quality, and conversions for your business."
                    },
                    {
                      title: "Expert-Led Revenue Growth",
                      description: "Seasoned sales leaders from multiple industries deliver strategic growth consulting for early-stage startups."
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isMounted ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                      }}
                      className="h-full"
                    >
                      <FeatureCard 
                        title={feature.title} 
                        description={feature.description} 
                        className="h-full flex flex-col"
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating stat card for visual interest - similar to hero */}
                {/* <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -right-5 -top-5 z-20 rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-lg"
                >
                  <p className="text-xs font-medium text-slate-500">Retention Rate</p>
                  <p className="text-xl font-bold text-slate-500">94%</p>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;