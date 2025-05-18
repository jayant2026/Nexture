import ClientLogos from '@/components/ClientLogos'
import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <SectionTitle />
      <WhyChooseUs />
      <TestimonialsSection />
      <ClientLogos />
      <ContactForm />
    </>
  )
}

export default page
