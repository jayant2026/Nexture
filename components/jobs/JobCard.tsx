
import { ArrowRight, MapPin, Briefcase, Clock, IndianRupee, Award } from 'lucide-react';
import { useState } from 'react';
import JobApplicationDialog from './JobApplicationDialog';
import { Card, CardContent, CardFooter } from '../ui/card';
import { motion } from 'motion/react';

interface JobCardProps {
  id: string; 
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  postedDate: string;
  logoSrc: string;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
  type,
  experience,
  postedDate,
  logoSrc,
}: JobCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card 
        className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-slate-100 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 flex-grow">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
              <img src={logoSrc} alt={`${company} logo`} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1 overflow-hidden">
              <h3 className="font-bold text-lg line-clamp-2 text-gray-800">{title}</h3>
              <p className="bg-gray-800 bg-clip-text text-transparent font-medium">{company}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-6">
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs">Location</p>
                <p className="font-medium text-gray-700">{location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Briefcase className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs">Job Type</p>
                <p className="font-medium text-gray-700">{type}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <IndianRupee className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs">Salary Range</p>
                <p className="font-medium text-gray-700">{salary}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Award className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs">Experience</p>
                <p className="font-medium text-gray-700">{experience}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5 flex items-start space-x-2">
            <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-500 text-xs">Posted</p>
              <p className="text-gray-700">{postedDate}</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0 mt-auto">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
          >
            Apply Now
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16} className="ml-2" />
            </motion.span>
          </button>
        </CardFooter>
      </Card>

      <JobApplicationDialog
        jobId={id}
        jobTitle={title}
        company={company}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default JobCard;
