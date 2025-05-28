
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import JobApplicationForm from "./JobApplicationForm";
  
  interface JobApplicationDialogProps {
    jobId: string;
    jobTitle: string;
    company: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  const JobApplicationDialog = ({
    jobId,
    jobTitle,
    company,
    isOpen,
    onOpenChange
  }: JobApplicationDialogProps) => {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Apply for {jobTitle}</DialogTitle>
            <DialogDescription>
              Submit your application for {jobTitle} at {company}
            </DialogDescription>
          </DialogHeader>
          
          <JobApplicationForm 
            jobId={jobId}
            jobTitle={jobTitle}
            company={company}
            onSuccess={() => onOpenChange(false)}
          />
        </DialogContent>
      </Dialog>
    );
  };
  
  export default JobApplicationDialog;
  