import ContactForm from '@/components/ContactForm';

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

                    <div>
                        <ContactForm
                            title='Submit Your Application'
                            subtitle='Share your details and upload your resume to join our talent pool'
                            includeCompany={false}
                            showCityField={true}
                            showResumeUpload={true}
                            submitButtonText='Submit Application'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationFormSection;