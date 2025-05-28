import React from 'react';

const ApplicationFormSection = () => {
    return (
        <section id='apply-form' className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
                                Don't See the Right Job?
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8">
                                Submit your resume and we'll notify you when matching opportunities arise.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-6 text-gray-800">What happens next?</h3>
                            <ol className="space-y-6 mt-4">
                                {[
                                    "Our team reviews your profile and identifies your strengths",
                                    "We match you with suitable opportunities in our network",
                                    "You receive job alerts for positions matching your profile",
                                    "We provide interview preparation support when you apply",
                                    "Our placement team assists throughout the hiring process"
                                ].map((step, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700 pt-1">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                        <div className="relative">
                            <div className="absolute -z-10 w-64 h-64 bg-indigo-100 rounded-full opacity-70 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            
                            <h3 className="text-2xl font-bold mb-6 bg-black bg-clip-text text-transparent">Contact Our Recruitment Team</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Email Your Resume</h4>
                                    <p className="text-gray-600 mb-3">Send your resume directly to our recruitment team for review:</p>
                                    <a href="mailto:jobs@nexture.live" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                        jobs@nexture.live
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Call Us</h4>
                                    <p className="text-gray-600 mb-3">Speak directly with our recruitment specialists:</p>
                                    <a href="tel:+919876543210" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                        +91 88005 89923
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </a>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Visit Our Office</h4>
                                    <p className="text-gray-600">
                                        RMZ Ecospace<br />
                                        Bellandur<br />
                                        Bengaluru, Karnataka<br />
                                        India
                                    </p>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-gray-500 text-sm italic">Our recruitment team typically responds within 48 hours. We look forward to exploring opportunities with you!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationFormSection;