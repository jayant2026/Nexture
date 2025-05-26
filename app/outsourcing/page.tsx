"use client";

import React from 'react';
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Phone, Shield, Users, BarChart3, Headset, Building, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { industryServices } from '@/data';
import ContactForm from '@/components/ContactForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientLogos from '@/components/ClientLogos';

const OutsourcingPage = () => {
  // Performance optimization - only animate after component is mounted
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Added BPO service categories
  const bpoCategories = [
    {
      title: "Call Center Services",
      icon: <Headset size={24} />,
      description: "Inbound and outbound call center solutions with trained professionals for customer support and sales."
    },
    {
      title: "Sales BPO",
      icon: <Briefcase size={24} />,
      description: "Outsourced sales teams specializing in lead generation and conversion for businesses across industries."
    },
    {
      title: "EdTech Support",
      icon: <GraduationCap size={24} />,
      description: "Specialized agents for educational technology platforms handling student queries and enrollment."
    },
    {
      title: "Corporate Solutions",
      icon: <Building size={24} />,
      description: "End-to-end telemarketing and customer relationship management for enterprise clients."
    }
  ];

  // Handle smooth scrolling to sections
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 scroll-smooth">
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
                <button 
                  onClick={() => scrollToSection('contact-form')} 
                  className="group relative overflow-hidden rounded-lg bg-black px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/40 cursor-pointer"
                >
                  <span className="relative z-10">Request Proposal</span>
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="relative rounded-lg border-2 border-slate-200 bg-white/80 px-8 py-4 font-medium text-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-blue-100/60 cursor-pointer"
                >
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
                    text: "98% Client Satisfaction",
                  },
                  {
                    icon: (
                      <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ),
                    text: "500+ Trained Agents",
                  },
                  {
                    icon: (
                      <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    ),
                    text: "24/7 Support Available",
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
                
                {/* Main image with enhanced styling */}
                <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50 relative">
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2784&q=80"
                      alt="Call center team"
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Image overlay caption */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-3 backdrop-blur-sm">
                    <p className="text-sm font-medium text-slate-800">
                      Our expert BPO team delivering exceptional customer service
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
                  <p className="text-xs font-medium text-slate-500">Client Satisfaction</p>
                  <p className="text-xl font-bold text-green-600">98%</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute -right-5 bottom-1/4 z-20 rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-lg"
                >
                  <p className="text-xs font-medium text-slate-500">Cost Savings</p>
                  <p className="text-xl font-bold text-blue-600">40%</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
              Why Choose Nexture for BPO & Sales Support
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our training-first approach ensures consistent, high-quality outcomes for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Trained Agents</h3>
              <p className="text-gray-600">Our call center agents undergo rigorous training and certification before client assignment, ensuring high-quality interactions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Robust QA Systems</h3>
              <p className="text-gray-600">Regular quality checks, call monitoring, and performance tracking guarantee consistent service excellence.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Flexible Scaling</h3>
              <p className="text-gray-600">Easily scale your BPO team size based on your business needs, campaigns, or seasonal demands.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Performance Analytics</h3>
              <p className="text-gray-600">Detailed reporting on key metrics, conversion rates, and customer satisfaction scores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BPO Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
              Comprehensive BPO Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From call center operations to specialized telesales services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bpoCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Tailored BPO services for your industry's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryServices.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">{industry.industry}</h3>
                <ul className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Client Logos */}
      <ClientLogos />

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
                Request a BPO Services Proposal
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Let us know your business needs, and we'll create a tailored call center solution for you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600"/>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Speak directly with our BPO sales team</h3>
                    <a href="tel:+918800589923" className="text-blue-600 hover:underline flex items-center mt-1">
                      <Phone size={16} className="mr-2" />
                      <span>+91 8800589923</span>
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">What to expect:</h3>
                  <ul className="space-y-3">
                    {[
                      "Initial consultation within 24 hours",
                      "Customized proposal within 3 business days",
                      "Flexible contract terms",
                      "Transparent pricing with no hidden fees"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-100 p-1 rounded-full mt-1">
                          <CheckCircle size={16} className="text-green-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm
                title="Contact Our BPO Sales Team"
                subtitle="Fill the form below for a customized call center proposal"
                submitButtonText="Request Proposal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Nexture for trained agents, robust QA, and industry-specific expertise.
          </p>
          <button
            onClick={() => scrollToSection('contact-form')}
            className="inline-block px-8 py-4 bg-white text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default OutsourcingPage;
