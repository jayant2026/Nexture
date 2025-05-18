import { Book, Briefcase, Phone, Users } from 'lucide-react'
import React from 'react'
import { NavbarButton } from './ui/resizable-navbar'

const SectionTitle = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
            Comprehensive Solutions for Business Growth
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            One platform for all your sales, training, recruitment, and placement needs.
          </p>
        </div>
        <div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-neutral-800">Sales Outsourcing</h2>
              <p className="text-neutral-600 mb-6">Expert sales agents & customer support teams for EdTech, BFSI, E-commerce & more.</p>
              <NavbarButton variant="primary" className="w-full">Learn More</NavbarButton>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Book className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-neutral-800">Sales Courses</h2>
              <p className="text-neutral-600 mb-6">Comprehensive training with pay-after-placement model for aspiring sales professionals.</p>
              <NavbarButton variant="primary" className="w-full">Learn More</NavbarButton>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-neutral-800">Recruitment Services</h2>
              <p className="text-neutral-600 mb-6">Hire trained BD and customer support professionals from our curated talent pool.</p>
              <NavbarButton variant="primary" className="w-full">Learn More</NavbarButton>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                <Briefcase className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-neutral-800">Placement Services</h2>
              <p className="text-neutral-600 mb-6">Find your dream job in sales and support roles with top companies across India.</p>
              <NavbarButton variant="primary" className="w-full">Learn More</NavbarButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTitle
