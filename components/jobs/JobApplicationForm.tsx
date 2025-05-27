
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { DialogClose } from "@/components/ui/dialog";
import ResumeUpload from "../ResumeUpload";
import { useResumeUpload } from "@/hooks/useResumeUpload";

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
  company: string;
  onSuccess?: () => void;
}

const JobApplicationForm = ({
  jobId,
  jobTitle,
  company,
  onSuccess
}: JobApplicationFormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [expectedCtc, setExpectedCtc] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { uploadResume, isUploading } = useResumeUpload(jobId);
  
  const handleResumeChange = (file: File | null) => {
    console.log("Resume file changed:", file?.name);
    setResumeFile(file);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !phone || !expectedCtc || !resumeFile) {
      toast.error("Please fill all required fields and upload your resume");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Starting application submission with resume:", resumeFile?.name);
      
      // First, upload the resume if available
      const { resumeUrl, resumeFilePath } = await uploadResume(resumeFile);
      console.log("Resume uploaded:", resumeUrl);
      
      // Save application to the job_applications table
      const jobApplication = {
        name,
        phone,
        job_id: jobId,
        job_title: jobTitle,
        company,
        expected_ctc: expectedCtc,
        resume_url: resumeUrl,
        resume_path: resumeFilePath
      };
      
      console.log('Submitting job application:', jobApplication);
      
      const { error } = await supabase
        .from('job_applications')
        .insert([jobApplication]);
        
      if (error) {
        console.error('Database error:', error);
        throw error;
      }
      
      toast.success("Application submitted successfully! Our team will contact you shortly.");
      setName('');
      setPhone('');
      setExpectedCtc('');
      setResumeFile(null);
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isProcessing = isSubmitting || isUploading;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="ctc">Expected CTC (₹ in LPA)</Label>
        <Input
          id="ctc"
          type="text"
          value={expectedCtc}
          onChange={(e) => setExpectedCtc(e.target.value)}
          placeholder="Example: 4.5"
          required
        />
      </div>
      
      <ResumeUpload onFileChange={handleResumeChange} />
      
      <div className="flex justify-end gap-2 pt-4">
        <DialogClose asChild>
          <Button variant="outline" type="button" disabled={isProcessing}>Cancel</Button>
        </DialogClose>
        <Button type="submit" disabled={isProcessing}>
          {isProcessing ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
