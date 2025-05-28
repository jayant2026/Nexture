
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

export const useResumeUpload = (jobId: string) => {
  const [isUploading, setIsUploading] = useState(false);
  
  const uploadResume = async (resumeFile: File | null) => {
    if (!resumeFile) {
      console.log("No resume file provided");
      return { resumeUrl: '', resumeFilePath: '' };
    }
    
    setIsUploading(true);
    console.log('Uploading resume file:', resumeFile.name);
    
    try {
      // Create a unique file path without checking/creating bucket
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${jobId}_${Date.now()}.${fileExt}`;
      const resumeFilePath = `resumes/${fileName}`;
      
      console.log('Resume file path:', resumeFilePath);
      
      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('job_applications')
        .upload(resumeFilePath, resumeFile, {
          cacheControl: '3600',
          upsert: false
        });
        
      if (uploadError) {
        console.error('Resume upload error:', uploadError);
        toast.error("Failed to upload resume. Please try again.");
        setIsUploading(false);
        return { resumeUrl: '', resumeFilePath: '' };
      }
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('job_applications')
        .getPublicUrl(resumeFilePath);
        
      console.log('Resume public URL:', publicUrl);
      setIsUploading(false);
      return { resumeUrl: publicUrl, resumeFilePath };
      
    } catch (uploadException) {
      console.error('Exception during upload:', uploadException);
      toast.error("An error occurred during resume upload. Please try again.");
      setIsUploading(false);
      return { resumeUrl: '', resumeFilePath: '' };
    }
  };
  
  return { uploadResume, isUploading };
};
