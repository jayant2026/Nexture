"use client";

import { useState } from 'react';
import { Paperclip } from "lucide-react";
import { Label } from "@/components/ui/label";

interface ResumeUploadProps {
  onFileChange: (file: File | null) => void;
  required?: boolean;
}

const ResumeUpload = ({ onFileChange, required = true }: ResumeUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      console.log("File selected:", file.name);
      setSelectedFile(file);
      onFileChange(file);
    } else {
      setSelectedFile(null);
      onFileChange(null);
      console.log("No file selected");
    }
  };
  
  return (
    <div className="space-y-2">
      <Label htmlFor="resume">Upload Resume</Label>
      <div className="border border-input rounded-md p-2 flex items-center">
        <label 
          htmlFor="resume" 
          className="cursor-pointer flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 flex-grow"
        >
          <Paperclip size={18} />
          <span className="text-ellipsis overflow-hidden">{selectedFile ? selectedFile.name : "Select a file"}</span>
        </label>
        <input
          id="resume"
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          // required={required}  <-- Remove this line
        />
      </div>
      <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (max 5MB)</p>
    </div>
  );
};

export default ResumeUpload;
