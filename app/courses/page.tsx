"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from "motion/react";
import { mentors, courseHighlights, faqs, clientLogos } from '@/data/index';
import ClientLogos from '@/components/ClientLogos';
import CallbackForm from '@/components/CallbackForm';
import { cn } from '@/lib/utils';

const Page = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section - Improved with animations and decorative elements */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gray-800 bg-clip-text text-transparent"
              >
                Business Development Course
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-neutral-600 mb-8"
              >
                Launch your sales career with our comprehensive training program designed for aspiring professionals.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="#payment" 
                  className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-300 text-center cursor-pointer"
                >
                  Enroll Now
                </Link>
                <Link 
                  href="#brochure" 
                  className="px-6 py-3 bg-white text-gray-600 font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-300 text-center"
                >
                  Download Brochure
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm border border-gray-100 max-w-md ml-auto"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Get Course Details</h3>
              <p className="text-neutral-600 mb-6">Leave your details and our counselor will contact you with full course information</p>
              <CallbackForm inline={true} />
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Quick response within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        
        {/* Course Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
                  Transform Your Career in Sales
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Comprehensive training with job guarantee for aspiring sales professionals
                </p>
                
                <div className="space-y-6">
                  <p className="text-neutral-600">
                    Our Business Development Course is designed to equip you with the skills, knowledge,
                    and practical experience needed to excel in today's competitive sales environment.
                    With a focus on real-world applications, you'll learn from industry experts who
                    bring years of professional experience to the classroom.
                  </p>
                  
                  <div className="flex items-center p-5 bg-blue-50 rounded-lg shadow-sm">
                    <div className="mr-4 text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-indian-rupee"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="M11 9v8"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Pay-After-Placement Model</h3>
                      <p className="text-neutral-600">
                        ₹3,999 upfront + 4% of CTC after placement. 
                        We succeed when you succeed!
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                      <h3 className="font-semibold text-gray-800">Course Duration</h3>
                      <p className="text-neutral-600">60+ hours of live training</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                      <h3 className="font-semibold text-grayt-800">Next Batch</h3>
                      <p className="text-neutral-600">Starting June 15, 2025</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#payment" 
                    className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-300 text-center"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    href="#brochure" 
                    className="px-6 py-3 bg-white text-gray-600 font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-300 text-center"
                  >
                    Download Brochure
                  </Link>
                </div>
              </div>
              
              <div>
                {/* Course highlights in a modern card layout */}
                <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">What You'll Learn</h3>
                  <div className="space-y-4">
                    {[
                      "Sales fundamentals and modern techniques",
                      "Building and nurturing client relationships",
                      "Objection handling and negotiation",
                      "CRM systems and sales automation",
                      "Social selling and LinkedIn strategies",
                      "Industry-specific sales approaches"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-neutral-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Course Highlights - 4 cards */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">Course Highlights</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              What makes our business development course stand out from the rest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {courseHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                  "hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                )}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{highlight.title}</h3>
                <p className="text-neutral-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">Course Curriculum</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive training to build your sales expertise
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                week: "Weeks 1-2",
                title: "Introduction to Sales & Business Development",
                topics: [
                  "Sales fundamentals and modern techniques",
                  "Understanding the sales funnel and customer journey",
                  "Communication skills for sales professionals",
                  "Market research and prospecting"
                ]
              },
              {
                week: "Weeks 3-4",
                title: "Sales Strategy & Relationship Building",
                topics: [
                  "Building and nurturing client relationships",
                  "Consultative selling approach",
                  "Objection handling and negotiation techniques",
                  "Sales psychology and consumer behavior"
                ]
              },
              {
                week: "Weeks 5-6",
                title: "Digital Sales & Modern Tools",
                topics: [
                  "CRM systems and sales automation",
                  "Social selling and LinkedIn strategies",
                  "Sales analytics and performance tracking",
                  "Email sequences and follow-up strategies"
                ]
              },
              {
                week: "Weeks 7-8",
                title: "Industry-Specific Training & Placement Prep",
                topics: [
                  "Vertical-specific sales techniques (EdTech, BFSI, etc.)",
                  "Mock interviews and feedback sessions",
                  "Resume building and personal branding",
                  "Final project and certification"
                ]
              }
            ].map((module, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{module.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-50 rounded-full text-sm text-gray-800 font-medium mt-2 md:mt-0">
                    {module.week}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-gray-800 mr-2">•</span>
                      <span className="text-neutral-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Learn From Industry Leaders</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our mentors bring years of real-world experience to the classroom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white/20">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{mentor.name}</h3>
                <p className="text-white/80 mb-2">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">Success Stories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Hear from our graduates who transformed their careers through our course
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Samiksha Vishwakarma",
                from: "Gwalior, Madhya Pradesh",
                placed: "Sales Executive at ProSalesNexus",
                story: "The team is very supportive throughout the process - I could feel like they were invested in my career.",
                ctc: "₹3.2 LPA"
              },
              {
                name: "Pravesh Sharma",
                from: "Surat, Gujarat",
                placed: "Senior Counselor at Educrafters",
                story: "The course content is not random gyaan, but actual learnings that I am using every day in my role.",
                ctc: "₹4.0 LPA"
              },
              {
                name: "Nihar Ranjan Kar",
                from: "Lucknow, UP",
                placed: "Associate Manager at ProSalesNexus",
                story: "I might have been stuck without a career if I had not enrolled at Nexture.",
                ctc: "₹3.5 LPA"
              }
            ].map((story, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold mb-1">{story.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{story.from}</p>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="font-semibold text-gray-800">{story.placed}</p>
                  <p className="text-gray-600 font-bold">CTC: {story.ctc}</p>
                </div>
                <p className="text-gray-600 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos 
        title="Our Placement Partners" 
        logos={clientLogos}
        className="bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need to know about our business development course
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Sales Career?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join our next batch and transform your career with our industry-leading training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#payment" 
                className="px-8 py-4 bg-white text-gray-800 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                Enroll Now
              </Link>
              <Link 
                href="#brochure" 
                className="px-8 py-4 bg-transparent text-white font-bold rounded-md border border-white/30 hover:bg-white/10 transition-colors duration-300 text-center"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page;
