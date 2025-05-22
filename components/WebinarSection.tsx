"use client";

import { Calendar, CheckCircle, MapPin, User } from 'lucide-react'
import React from 'react'
import { useWebinarForm } from '@/hooks/useWebinarForm';

const WebinarSection = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
        isSubmitting
    } = useWebinarForm();

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 bg-clip-text text-transparent">
                        Free Career Guidance Webinar
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Join us for an exclusive session on building a successful career in Business Development
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Webinar Details */}
                    <div className="bg-white p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <User className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">Digvijay Singh</h3>
                                    <p className="text-gray-600">Ex-VP, Zepto | Ex-Senior VP, Physics Wallah</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Calendar className="h-5 w-5 text-green-600" />
                                </div>
                                <p className="text-gray-600">Coming Soon - Register to get notified</p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <MapPin className="h-5 w-5 text-purple-600" />
                                </div>
                                <p className="text-gray-600">Online (Zoom)</p>
                            </div>
                        </div>
                        
                        <div className="mt-10">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Why Attend This Webinar?</h3>
                            <p className="text-gray-600 mb-6">
                                Are you confused about starting your career? Not sure if Business Development is right for you? 
                                This webinar is designed specifically for individuals like you and will cover:
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "What exactly is Business Development and Sales as a career path",
                                    "Skills required to excel in this high-growth field",
                                    "How to build a roadmap for your career progression",
                                    "Salary expectations and growth opportunities",
                                    "Common pitfalls to avoid when starting in sales"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="bg-green-100 p-1 rounded-full mt-1">
                                            <CheckCircle size={16} className="text-green-600" />
                                        </div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Registration Form */}
                    <div className="bg-white p-8 rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Register Now</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    {...register("fullName", { required: "Full Name is required" })}
                                    className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
                                    placeholder="Enter your Full Name"
                                />
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                                )}
                            </div>
                            
                            <div>
                                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number *
                                </label>
                                <input
                                    id="number"
                                    type="tel"
                                    {...register("number", {
                                        required: "Number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Enter a valid 10-digit number",
                                        },
                                    })}
                                    className={`w-full px-4 py-2 border ${errors.number ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
                                    placeholder="10-digit Phone Number"
                                />
                                {errors.number && (
                                    <p className="mt-1 text-sm text-red-600">{errors.number.message}</p>
                                )}
                            </div>
                            
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                                    Age *
                                </label>
                                <input
                                    id="age"
                                    type="number"
                                    {...register("age", {
                                        required: "Age is required",
                                        min: { value: 1, message: "Age must be at least 1" },
                                    })}
                                    className={`w-full px-4 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
                                    placeholder="25"
                                />
                                {errors.age && (
                                    <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                                )}
                            </div>
                            
                            <div>
                                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                                    Highest Qualification *
                                </label>
                                <select
                                    id="qualification"
                                    {...register("qualification", { required: "Qualification is required" })}
                                    className={`w-full px-4 py-2 border ${errors.qualification ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
                                >
                                    <option value="">Select</option>
                                    <option value="Class 10">Class 10</option>
                                    <option value="Class 12">Class 12</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Postgraduate">Postgraduate</option>
                                </select>
                                {errors.qualification && (
                                    <p className="mt-1 text-sm text-red-600">{errors.qualification.message}</p>
                                )}
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-black hover:bg-gray-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Register for Webinar"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebinarSection
