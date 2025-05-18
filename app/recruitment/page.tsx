"use client";

import React from 'react';
import { Users, CheckCircle, Briefcase, FileCheck, UserCheck, Building2 } from 'lucide-react';
import { hiringProcess } from '@/data';
import ContactForm from '@/components/ContactForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeatureCard from '@/components/ui/FeatureCard';

const RecruitmentPage = () => {
  // Recruitment services
  const recruitmentServices = [
    {
      title: "Sales Talent",
      icon: <Briefcase size={24} />,
      description: "Hire experienced sales professionals with proven track records in closing deals and generating revenue."
    },
    {
      title: "Customer Support",
      icon: <Users size={24} />,
      description: "Find skilled customer support representatives who can provide exceptional service to your clients."
    },
    {
      title: "BPO Specialists",
      icon: <Building2 size={24} />,
      description: "Access trained BPO specialists with expertise in handling various business processes efficiently."
    },
    {
      title: "Quality Assurance",
      icon: <FileCheck size={24} />,
      description: "Recruit QA professionals who ensure high standards and consistent quality in all operations."
    }
  ];

  // Benefits of our recruitment services
  const recruitmentBenefits = [
    "Pre-screened candidates with verified skills",
    "Industry-specific talent pools",
    "Reduced time-to-hire",
    "Lower recruitment costs",
    "Trained professionals ready to start",
    "Ongoing support and performance monitoring"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-10 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-200 opacity-10 blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gray-800 bg-clip-text text-transparent">
                Find the Perfect Talent for Your Business
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8">
                Our recruitment services connect you with pre-trained, qualified professionals ready to drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-300 text-center"
                >
                  Hire Talent Now
                </a>
                <a 
                  href="#hiring-process" 
                  className="px-6 py-3 bg-white text-gray-600 font-medium rounded-md border border-gray-200 hover:bg-gray-150 transition-colors duration-300 text-center"
                >
                  Our Process
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Recruitment team" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <UserCheck size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">500+ Placements</p>
                    <p className="text-xs text-gray-500">In the last 12 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
              Specialized Recruitment Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Find the right talent for your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {recruitmentServices.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section id="hiring-process" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
              Our Streamlined Hiring Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              A simple, efficient approach to finding the perfect candidates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hiringProcess.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center text-purple-600 mb-4 mx-auto">
                  <span className="font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gray-800 bg-clip-text text-transparent">
                Why Choose Our Recruitment Services
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                We provide a comprehensive recruitment solution that saves you time, money, and resources.
              </p>
              
              <div className="space-y-4">
                {recruitmentBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <CheckCircle size={18} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Recruitment benefits" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section id="contact-form">
        <ContactForm />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Nexture for access to pre-trained, qualified professionals who can hit the ground running.
          </p>
          <a 
            href="#contact-form" 
            className="inline-block px-8 py-4 bg-white text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Start Recruiting Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentPage;
