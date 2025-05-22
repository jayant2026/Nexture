"use client";

import { Button } from "@/components/ui/button";
import FormField from "@/components/form/FormField";
import ResumeUpload from "@/components/ResumeUpload";
import { useContactForm } from "@/hooks/useContactForm";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  includeCompany?: boolean;
  includeHiringNeeds?: boolean;
  submitButtonText?: string;
  showPhoneField?: boolean;
  showCityField?: boolean;
  showResumeUpload?: boolean;
}

const ContactForm = ({
  title = "Get In Touch",
  subtitle = "Fill out the form below and we'll get back to you shortly.",
  includeCompany = true,
  includeHiringNeeds = false,
  submitButtonText = "Submit",
  showPhoneField = true,
  showCityField = false,
  showResumeUpload = false,
}: ContactFormProps) => {
  const {
    formData,
    isSubmitting,
    handleChange,
    handleFileChange,
    handleSubmit
  } = useContactForm({ 
    includeCompany,
    includeHiringNeeds,
    showResumeUpload
  });

  return (
    <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
      {title && <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gray-800 bg-clip-text text-transparent">{title}</h3>}
      {subtitle && <p className="text-neutral-600 mb-8">{subtitle}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField
          type="text"
          id="name"
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-4"
        />
        
        <FormField
          type="email"
          id="email"
          name="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-4"
        />
        
        {showPhoneField && (
          <FormField
            type="tel"
            id="phone"
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mb-4"
          />
        )}
        
        {includeCompany && (
          <FormField
            type="text"
            id="company"
            name="company"
            label={`Company Name ${includeHiringNeeds ? '*' : ''}`}
            value={formData.company}
            onChange={handleChange}
            required={includeHiringNeeds}
            className="mb-4"
          />
        )}
        
        {showCityField && (
          <FormField
            type="text"
            id="city"
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="mb-4"
          />
        )}
        
        {includeHiringNeeds && (
          <FormField
            type="text"
            id="hiringNeeds"
            name="hiringNeeds"
            label="Hiring Needs"
            value={formData.hiringNeeds}
            onChange={handleChange}
            required
            className="mb-4"
          />
        )}
        
        {!includeHiringNeeds && !showResumeUpload && (
          <FormField
            type="textarea"
            id="message"
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            className="mb-4"
          />
        )}
        
        {showResumeUpload && (
          <div className="mb-6">
            <ResumeUpload
              onFileChange={handleFileChange}
            />
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-black hover:bg-gray-700 text-white font-medium py-3 rounded-md transition-colors duration-300 mt-6" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span> 
            : submitButtonText
          }
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
