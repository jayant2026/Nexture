
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import JobCard from '@/components/jobs/JobCard';
import { Search, MapPin, Briefcase } from 'lucide-react';

// Mock job listings data
const jobListingsData = [
  {
    id: "job1",
    title: "Inside Sales Executive - Hinglish",
    company: "Nexture",
    location: "Remote",
    salary: "₹2.5-3.5 LPA",
    type: "Full-time",
    experience: "0-2 years",
    postedDate: "3 days ago",
    logoSrc: "/nexture.png"
  },
  {
    id: "job2",
    title: "Inside Sales Executive - Tamil & English",
    company: "Nexture",
    location: "Remote",
    salary: "₹2.5-3.5 LPA",
    type: "Full-time",
    experience: "0-2 years",
    postedDate: "3 days ago",
    logoSrc: "/nexture.png"
  },
  {
    id: "job3",
    title: "Inside Sales Executive - Kannada & English",
    company: "Nexture",
    location: "Remote",
    salary: "₹2.5-3.5 LPA",
    type: "Full-time",
    experience: "0-2 years",
    postedDate: "3 days ago",
    logoSrc: "/nexture.png"
  },
];

const JobListings = () => {
  // Performance optimization - only animate after component is mounted
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Extract unique locations and job types for filters
  const locations = [...new Set(jobListingsData.map(job => job.location))];
  const jobTypes = [...new Set(jobListingsData.map(job => job.type))];

  // Filter jobs based on search and filters
  const filteredJobs = jobListingsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
    const matchesType = selectedType ? job.type === selectedType : true;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <section id="job-listings" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      
      {/* Subtle animated grid pattern for depth */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEgMSAyLjEgMi4yczEgMi4xIDIuMSAyLjFjMS4yIDAgMi4xLTEgMi4xLTIuMXMxLTIuMSAyLjEtMi4xYzEuMiAwIDIuMSAxIDIuMSAyLjFzMSAyLjEgMi4xIDIuMWMxLjIgMCAyLjEtMSAyLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xLTEtMi4xLTIuMXMtLjktMi4xLTIuMS0yLjFjLTEuMiAwLTIuMSAxLTIuMSAyLjFzLS45IDIuMS0yLjEgMi4xYy0xLjIgMC0yLjEtMS0yLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xIDEtMi4xIDIuMXMtLjkgMi4xLTIuMSAyLjFjLTEuMiAwLTIuMS0xLTIuMS0yLjEiIHN0cm9rZT0iI2JmZDNmMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-40" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Current Job Openings
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Find opportunities that match your skills and aspirations
          </p>
        </motion.div> 

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 mt-8 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:shadow-lg">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input w-full h-12 pl-10 rounded-lg border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
              />
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="location" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  Location
                </label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="form-select w-full rounded-lg border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="jobType" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                  Job Type
                </label>
                <select
                  id="jobType"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="form-select w-full rounded-lg border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
                >
                  <option value="">All Types</option>
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>
        
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="h-full flex"
              >
                <JobCard {...job} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center py-12 bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">No matching jobs found</h3>
            <p className="text-gray-600">Try adjusting your search filters or check back later for new openings.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
