"use client";

import React from 'react';
import { Phone, Shield, Users, BarChart3, Headset, Building, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { industryServices } from '@/data';
import ContactForm from '@/components/ContactForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientLogos from '@/components/ClientLogos';

const OutsourcingPage = () => {
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-10 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-200 opacity-10 blur-3xl" />

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gray-800 bg-clip-text text-transparent">
                Expert Sales Agents & Customer Support Outsourcing
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8">
                Enhance your revenue and customer satisfaction with our BPO and call center professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-300 text-center cursor-pointer"
                >
                  Request Proposal
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-6 py-3 bg-white text-gray-600 font-medium rounded-md border border-gray-200 hover:bg-gray-150 transition-colors duration-300 text-center cursor-pointer"
                >
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2784&q=80"
                alt="Call center team"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">98% Client Satisfaction</p>
                    <p className="text-xs text-gray-500">Based on 200+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
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
