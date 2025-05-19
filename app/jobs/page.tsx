import Link from 'next/link'
import React from 'react'
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-10 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-200 opacity-10 blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
              Find Your Dream Job in Sales & Support | 2-5 LPA CTC
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Browse opportunities with top companies across India for sales, telecalling, BPO, and customer support roles with competitive salary packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#job-listings" 
                className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-300 text-center"
              >
                View Job Listings
              </Link>
              <Link 
                href="#apply-form" 
                className="px-6 py-3 bg-white text-gray-600 font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-300 text-center"
              >
                Submit Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply through nexture */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
                Why Apply Through Nexture
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                We support you throughout your job search for 2-5 LPA roles in sales, BPO, and telemarketing
              </p>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  Nexture is more than just a job portal. We provide comprehensive support
                  to help you secure your dream role in sales, telecalling, customer support, or BPO sectors.
                  Our team works closely with both candidates and employers to ensure
                  the right fit for long-term success and career growth with competitive salary packages.
                </p>
                
                <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">How Nexture Supports Job Seekers:</h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Resume Enhancement",
                        description: "Get expert feedback to optimize your resume for maximum impact with hiring managers"
                      },
                      {
                        title: "Interview Preparation",
                        description: "Coaching on common industry questions for BPO, sales, and telecalling roles"
                      },
                      {
                        title: "Skill Assessment",
                        description: "Identify your strengths for telesales, customer support, and BPO opportunities"
                      },
                      {
                        title: "Direct Employer Connections",
                        description: "Skip the CV black hole with our direct placement services for 2-5 LPA positions"
                      }
                    ].map((benefit, index) => (
                      <li key={index} className="flex">
                        <div className="mr-3 mt-1 text-green-600">
                          <CheckCircle size={18} />
                        </div>
                        <div>
                          <span className="font-medium">{benefit.title}:</span> {benefit.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Our Placement Success</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-3xl font-bold text-black mb-2">200+</p>
                  <p className="text-gray-600">Successful Placements</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-3xl font-bold text-black mb-2">50+</p>
                  <p className="text-gray-600">Partner Companies</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-3xl font-bold text-black mb-2">15+</p>
                  <p className="text-gray-600">Cities Covered</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-3xl font-bold text-black mb-2">85%</p>
                  <p className="text-gray-600">First-try Success</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex">
                  <div className="mr-4 text-gray-600">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1 text-gray-800">Not ready for direct placement?</h4>
                    <p className="text-sm mb-3 text-gray-600">
                      Upskill with our Business Development Course and improve your chances for 2-5 LPA sales and BPO roles.
                    </p>
                    <Link 
                      href="/courses" 
                      className="text-gray-600 font-medium flex items-center text-sm"
                    >
                      Learn more about our sales upskilling courses <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Promotion */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Finding the Right Fit?</h2>
                <p className="mb-6">
                  Enhance your skills with our comprehensive Business Development Course and improve 
                  your chances of landing your dream job.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <CheckCircle size={16} />
                    </div>
                    <span>60+ hours of live training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <CheckCircle size={16} />
                    </div>
                    <span>Learn from industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <CheckCircle size={16} />
                    </div>
                    <span>Pay-after-placement option available</span>
                  </li>
                </ul>
                <Link 
                  href="/courses" 
                  className="px-6 py-3 bg-white text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
                >
                  Explore Our Course
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Business Development Course" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the Next Step in Your Career</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Apply now or explore our training programs to enhance your skills and employability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#job-listings" 
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              Browse Jobs
            </Link>
            <Link 
              href="#apply-form" 
              className="px-6 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors duration-300 text-center"
            >
              Submit Your Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
