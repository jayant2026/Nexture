"use client";

import { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Clock, IndianRupee, Building2, ArrowRight } from 'lucide-react';
import { motion } from "motion/react";

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <section id='job-listings' className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-indigo-200 opacity-10 blur-3xl" />
      
      {/* Subtle animated grid pattern for depth */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEgMSAyLjEgMi4yczEgMi4xIDIuMSAyLjFjMS4yIDAgMi4xLTEgMi4xLTIuMXMxLTIuMSAyLjEtMi4xYzEuMiAwIDIuMSAxIDIuMSAyLjFzMSAyLjEgMi4xIDIuMWMxLjIgMCAyLjEtMSAyLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xLTEtMi4xLTIuMXMtLjktMi4xLTIuMS0yLjFjLTEuMiAwLTIuMSAxLTIuMSAyLjFzLS45IDIuMS0yLjEgMi4xYy0xLjIgMC0yLjEtMS0yLjEtMi4xcy0uOS0yLjEtMi4xLTIuMWMtMS4yIDAtMi4xIDEtMi4xIDIuMXMtLjkgMi4xLTIuMSAyLjFjLTEuMiAwLTIuMS0xLTIuMS0yLjEiIHN0cm9rZT0iI2JmZDNmMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-40" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Title with animation */}
        <div className="text-center mb-16">
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-block rounded-full bg-blue-100/80 px-4 py-2 backdrop-blur-sm"
            >
              <p className="text-sm font-medium text-blue-800">Career Opportunities</p>
            </motion.div>
          )}
          
          {isMounted && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
            >
              Current Job Openings
            </motion.h2>
          )}
          
          {isMounted && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Find opportunities that match your skills and aspirations. Join our team and grow your career with us.
            </motion.p>
          )}
        </div>
        
        {/* Enhanced Search and Filter Section */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 max-w-5xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-8 border border-white/20">
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by job title, company, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                />
              </div>
              
              {/* Filter Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md bg-blue-100">
                        <MapPin className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>Location</span>
                    </div>
                  </label>
                  <select
                    id="location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="jobType" className="block text-sm font-semibold text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md bg-blue-100">
                        <Briefcase className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>Job Type</span>
                    </div>
                  </label>
                  <select
                    id="jobType"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800"
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
        )}
        
        {/* Job Results */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              isMounted && (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 overflow-hidden relative"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100 p-2">
                        <img 
                          src={job.logoSrc} 
                          alt={`${job.company} logo`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Job Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="p-1 rounded-md bg-gray-100">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="p-1 rounded-md bg-gray-100">
                          <IndianRupee className="h-4 w-4" />
                        </div>
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="p-1 rounded-md bg-gray-100">
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                    </div>
                    
                    {/* Apply Button */}
                    <a 
                      href={`/jobs/${job.id}`}
                      className="group/btn flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-600 hover:to-gray-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        ) : (
          isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-w-2xl mx-auto border border-white/20"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No jobs found</h3>
              <p className="text-gray-600 text-lg">Try adjusting your search criteria or check back later for new opportunities.</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default JobListings;
