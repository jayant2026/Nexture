
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
      // Check if the bucket exists and create it if it doesn't
      const { data: buckets } = await supabase.storage.listBuckets();
      const bucketExists = buckets?.some(bucket => bucket.name === 'job_applications');
      
      if (!bucketExists) {
        console.log('Creating job_applications bucket');
        const { error: bucketError } = await supabase.storage.createBucket('job_applications', {
          public: false,
          fileSizeLimit: 5242880, // 5MB
        });
        
        if (bucketError) {
          console.error('Bucket creation error:', bucketError);
          toast.error("Failed to set up storage. Please try again.");
          setIsUploading(false);
          return { resumeUrl: '', resumeFilePath: '' };
        }
      }
      
      // Create a unique file path
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
