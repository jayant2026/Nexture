"use client";

import { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

// Mock job listings data
const jobListingsData = [
  {
    id: "job1",
    title: "Business Development Executive",
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
    title: "Inside Sales Representative",
    company: "Nexture",
    location: "Remote",
    salary: "₹2.5-3.5 LPA",
    type: "Full-time",
    experience: "0-2 years",
    postedDate: "1 week ago",
    logoSrc: "/nexture.png"
  },
  {
    id: "job3",
    title: "Customer Support Specialist",
    company: "Nexture",
    location: "Remote",
    salary: "₹2.5-3.5 LPA",
    type: "Full-time",
    experience: "0-2 years",
    postedDate: "2 days ago",
    logoSrc: "/nexture.png"
  },
];

const JobListings = () => {
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
    <section id='job-listings' className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title - Inline implementation */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
            Current Job Openings
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Find opportunities that match your skills and aspirations
          </p>
        </div>
        
        <div className="mb-12 mt-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6">
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by job title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>Location</span>
                  </div>
                </label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-500" />
                    <span>Job Type</span>
                  </div>
                </label>
                <select
                  id="jobType"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
                >
                  <option value="">All Types</option>
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              // Job Card - Inline implementation
              <div 
                key={job.id} 
                className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={job.logoSrc} 
                      alt={`${job.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{job.title}</h3>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Company:</span> {job.company}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {job.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Salary Range:</span> {job.salary}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Experience:</span> {job.experience}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    <span className="font-medium">Posted:</span> {job.postedDate}
                  </p>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a 
                    href={`/jobs/${job.id}`}
                    className="block w-full py-2 text-center bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
