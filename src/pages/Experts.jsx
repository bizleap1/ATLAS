import React from 'react';
import { motion } from 'framer-motion';

export default function Experts() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/30 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/50">
          
          {/* Left Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16"
          >
            <h1 className="text-[2.5rem] font-extrabold text-teal-950 mb-10 tracking-tight leading-tight">Consultation Form</h1>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] font-medium text-teal-900 mb-2">First Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3.5 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-teal-950" />
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-teal-900 mb-2">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3.5 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-teal-950" />
                </div>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-teal-900 mb-2">Age <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Ex. 22" className="w-full px-4 py-3.5 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-teal-950" />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-teal-900 mb-2">Weight (in kg) <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Ex. 45" className="w-full px-4 py-3.5 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-teal-950" />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-teal-900 mb-2">Phone/Mobile (With Country Code) <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="917750824146" className="w-full px-4 py-3.5 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-teal-950" />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-teal-900 mb-2">Email</label>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-teal-950" />
              </div>

              <div className="pt-2">
                <label className="block text-[15px] font-medium text-teal-900 mb-4">Health Issues (Select At least One) <span className="text-red-500">*</span></label>
                <div className="space-y-3.5">
                  {['Thyroid', 'Weight gain', 'Hormonal issues', 'Hair fall', 'PCOS / PCOD', 'Diabetes'].map((issue) => (
                    <label key={issue} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border border-teal-300 rounded focus:ring-2 focus:ring-teal-500 checked:bg-teal-600 checked:border-teal-600 transition-colors cursor-pointer" />
                        <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-teal-900 text-[15px] group-hover:text-teal-600 transition-colors">{issue}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all tracking-wide text-lg">
                  Submit Details
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Info & Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 bg-teal-50/30 flex flex-col relative"
          >
            {/* Top Text Section */}
            <div className="p-10 lg:p-14 pb-0 text-center relative z-10 bg-gradient-to-b from-teal-50/50 to-transparent">
              <p className="text-teal-700 font-medium tracking-wide mb-3 text-lg">Your Health, Our Priority</p>
              <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-teal-950 mb-12 tracking-tight leading-none">5 Lakh Happy Customers</h2>
              
              <div className="grid grid-cols-3 gap-0 mb-6 bg-white/60 backdrop-blur-sm rounded-xl py-6 shadow-sm border border-teal-100/50">
                <div className="flex flex-col items-center justify-center text-center px-4 border-r border-teal-200/60">
                  <span className="text-lg font-bold text-teal-900 leading-tight">50+<br/><span className="font-medium text-teal-700 text-base">Experts</span></span>
                </div>
                <div className="flex flex-col items-center justify-center text-center px-4 border-r border-teal-200/60">
                  <span className="text-lg font-bold text-teal-900 leading-tight">Free<br/><span className="font-medium text-teal-700 text-base">Consultation</span></span>
                </div>
                <div className="flex flex-col items-center justify-center text-center px-4">
                  <span className="text-lg font-bold text-teal-900 leading-tight">Regular<br/><span className="font-medium text-teal-700 text-base">Follow-ups</span></span>
                </div>
              </div>
            </div>

            {/* Bottom Image Section */}
            <div className="flex-1 min-h-[500px] w-full relative">
              <img 
                src="/expert_presentation.png" 
                alt="Expert Consultation" 
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%)',
                  maskImage: 'linear-gradient(to bottom, transparent, black 15%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
