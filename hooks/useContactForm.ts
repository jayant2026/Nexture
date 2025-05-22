"use client"

import { useState } from 'react';
import { toast } from "sonner";
import { supabase } from '@/lib/supabaseClient';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  hiringNeeds: string;
  message: string;
  city: string;
  resume: File | null;
}

interface UseContactFormProps {
  includeCompany: boolean;
  includeHiringNeeds: boolean;
  showResumeUpload: boolean;
}

export const useContactForm = ({ 
  includeCompany, 
  includeHiringNeeds, 
  showResumeUpload 
}: UseContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    hiringNeeds: '',
    message: '',
    city: '',
    resume: null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (file: File | null) => {
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle resume upload if present
      let resumeUrl = '';
      let resumeFilePath = '';
      
      if (formData.resume && showResumeUpload) {
        // Create a unique file path
        const fileExt = formData.resume.name.split('.').pop();
        const fileName = `resume_${Date.now()}.${fileExt}`;
        resumeFilePath = `contact_resumes/${fileName}`;
        
        // Upload file to Supabase Storage
        try {
          const { error: uploadError } = await supabase.storage
            .from('job_applications')
            .upload(resumeFilePath, formData.resume);
            
          if (uploadError) {
            console.error('Resume upload error:', uploadError);
            toast.error("Failed to upload resume. Form submission will continue.");
          } else {
            // Get the public URL
            const { data: { publicUrl } } = supabase.storage
              .from('job_applications')
              .getPublicUrl(resumeFilePath);
              
            resumeUrl = publicUrl;
          }
        } catch (uploadError) {
          console.error('Upload exception:', uploadError);
          toast.error("Resume upload failed, but your form will still be submitted.");
        }
      }
      
      // Build submission object
      const submission = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        hiring_needs: formData.hiringNeeds || null,
        message: formData.message || null,
        city: formData.city || null,
        resume_url: resumeUrl || null,
        resume_path: resumeFilePath || null
      };
      
      // Save to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);
        
      if (error) {
        console.error('Database error:', error);
        throw error;
      }
      
      toast.success("Form submitted successfully! We'll contact you soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        hiringNeeds: '',
        message: '',
        city: '',
        resume: null,
      });
    } catch (error) {
      toast.error("Something went wrong with your submission. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleFileChange,
    handleSubmit
  };
};
