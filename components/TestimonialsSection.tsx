import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from the businesses that have transformed their operations with our services
          </p>
        </div>
        
        <div className="mt-8">
          <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'
            className="py-4"
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
