import ClientLogos from '@/components/ClientLogos'
import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import TestimonialsSection from '@/components/TestimonialsSection'
import WebinarSection from '@/components/WebinarSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <SectionTitle />
      <WhyChooseUs />
      <TestimonialsSection />
      <ClientLogos />

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">Request a Proposal</h1>
              <p className="text-lg text-neutral-600 mb-8">Let us know about your requirements and we'll get back to you with a tailored solution.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600"/>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email Us</p>
                    <a href="mailto:info@nexture.com" className="text-blue-600 hover:underline">info@nexture.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Call Us</p>
                    <a href="tel:+918800589923" className="text-green-600 hover:underline">+91 8800589923</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm
                title="Business Enquiry"
                subtitle="Tell us about your requirements and our team will contact you shortly."
                submitButtonText="Submit Request"
              />
            </div>
          </div>
        </div>
      </section>
      
      <WebinarSection />
    </>
  )
}

export default page
