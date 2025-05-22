"use client";

import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  number: string;
  age: number;
  qualification: string;
};

export const useWebinarForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare data for Supabase
      const submission = {
        name: data.fullName,
        phone: data.number,
        age: data.age,
        qualification: data.qualification,
      };
      
      // Save to Supabase
      const { error } = await supabase
        .from('webinar_registrations')
        .insert([submission]);
        
      if (error) {
        console.error('Database error:', error);
        throw error;
      }
      
      toast.success("Registration successful! We'll notify you about the webinar.");
      
      // Reset form
      reset();
    } catch (error) {
      toast.error("Something went wrong with your registration. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting
  };
};


