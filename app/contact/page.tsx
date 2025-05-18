
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600 mb-2">Sales & Support</p>
              <a href="tel:+918800589923" className="text-blue-600 font-medium hover:text-blue-700">
                +91 8800589923
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:info@nexture.live" className="text-green-600 font-medium hover:text-green-700">
                info@nexture.live
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Office</h3>
              <p className="text-gray-600 mb-2">Visit our location</p>
              <p className="text-purple-600 font-medium">
                RMZ Ecospace, Bellandur, Bengaluru, India
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h2 className="text-2xl font-bold mb-6 bg-gray-800 bg-clip-text text-transparent">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-[600px]">
              {/* Replace with an actual Google Map integration */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="mx-auto mb-4 text-purple-600" />
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Our Location</h3>
                  <p className="text-gray-600 max-w-md">
                    RMZ Ecospace, Bellandur, Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Department Contacts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
              Contact by Department
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Reach out to the specific team for faster assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                department: "Sales Outsourcing",
                email: "sales@nexture.live",
                phone: "+91 8800589923",
                bgColor: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                department: "Courses & Training",
                email: "courses@nexture.live",
                phone: "+91 8800589923",
                bgColor: "bg-green-100",
                textColor: "text-green-600"
              },
              {
                department: "Recruitment",
                email: "recruit@nexture.live",
                phone: "+91 8800589923",
                bgColor: "bg-purple-100",
                textColor: "text-purple-600"
              },
              {
                department: "Job Placements",
                email: "jobs@nexture.live",
                phone: "+91 8800589923",
                bgColor: "bg-amber-100",
                textColor: "text-amber-600"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center ${item.textColor} mb-4`}>
                  {index % 2 === 0 ? <Phone size={20} /> : <Mail size={20} />}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-800">{item.department}</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2 text-gray-400" />
                    <a href={`mailto:${item.email}`} className={`${item.textColor} hover:underline`}>{item.email}</a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2 text-gray-400" />
                    <a href={`tel:${item.phone}`} className="text-gray-700 hover:text-gray-900">{item.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Nexture for all your sales, training, recruitment, and placement needs.
          </p>
          <a 
            href="tel:+918800589923" 
            className="inline-block px-8 py-4 bg-white text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
