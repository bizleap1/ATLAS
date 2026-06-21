import React from 'react';
import { Link } from 'react-router-dom';
import { MdSelfImprovement, MdBedtime } from 'react-icons/md';
import { GiMuscleUp } from 'react-icons/gi';
import { FaBrain } from 'react-icons/fa';
import { Award, ShieldCheck, Microscope, Sparkles, FlaskConical, ClipboardCheck, Users, Shield, Globe, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
    <div className="min-h-screen pb-16 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 text-teal-950 font-sans relative overflow-hidden">
      {/* Video Background (Restricted to the Right) */}
      <div className="absolute top-24 bottom-0 right-0 w-full lg:w-[65%] z-0 pointer-events-none overflow-hidden flex justify-end">
        {/* Inner fade to seamlessly blend the video into the left content */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-cyan-50 to-transparent z-10"></div>
        {/* Top fade to seamlessly blend the video below the Navbar */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-cyan-50 to-transparent z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover object-[75%_center] mix-blend-multiply"
        >
          <source src="/ATLAS_MAG-B6_bottle_commercial_202606201352.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Clean Gradient over the left side to keep text perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-teal-50/90 to-transparent z-0 pointer-events-none w-full md:w-3/4"></div>

      <div className="w-full px-4 md:px-6 pt-32 pb-10 md:pt-36 md:pb-12 relative z-10 min-h-[85vh] flex items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-cyan-700 to-emerald-500 leading-tight tracking-tight pb-1">
              MAG-B6<sup className="text-xl sm:text-2xl md:text-5xl text-cyan-600 font-bold ml-1">&trade;</sup>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-teal-900 font-bold mt-2 md:mt-4 tracking-wide max-w-xl leading-relaxed">
              Advanced Magnesium Bisglycinate formula for maximum cellular absorption.
            </p>
            
            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-start pt-4 md:pt-6 max-w-3xl w-full gap-y-6 gap-x-2">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center basis-[45%] sm:flex-1 px-1 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/60 bg-white/50 backdrop-blur-md shadow-md flex items-center justify-center mb-3 md:mb-4 transition-transform group-hover:scale-105">
                  <MdSelfImprovement className="w-8 h-8 md:w-10 md:h-10 text-teal-800" />
                </div>
                <span className="text-xs md:text-sm font-bold text-teal-950 leading-tight">Promote<br/>Relaxation</span>
              </div>
              
              {/* Vertical Divider */}
              <div className="hidden sm:block w-px h-20 bg-gray-400 mt-2"></div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center basis-[45%] sm:flex-1 px-1 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/60 bg-white/50 backdrop-blur-md shadow-md flex items-center justify-center mb-3 md:mb-4 transition-transform group-hover:scale-105">
                  <MdBedtime className="w-8 h-8 md:w-10 md:h-10 text-teal-800" />
                </div>
                <span className="text-xs md:text-sm font-bold text-teal-950 leading-tight">Enhance<br/>Sleep Quality</span>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-px h-20 bg-gray-400 mt-2"></div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center basis-[45%] sm:flex-1 px-1 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/60 bg-white/50 backdrop-blur-md shadow-md flex items-center justify-center mb-3 md:mb-4 transition-transform group-hover:scale-105">
                  <GiMuscleUp className="w-8 h-8 md:w-10 md:h-10 text-teal-800" />
                </div>
                <span className="text-xs md:text-sm font-bold text-teal-950 leading-tight">Reduce Leg &<br/>Muscle Cramps</span>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-px h-20 bg-gray-400 mt-2"></div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center basis-[45%] sm:flex-1 px-1 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/60 bg-white/50 backdrop-blur-md shadow-md flex items-center justify-center mb-3 md:mb-4 transition-transform group-hover:scale-105">
                  <FaBrain className="w-8 h-8 md:w-10 md:h-10 text-teal-800" />
                </div>
                <span className="text-xs md:text-sm font-bold text-teal-950 leading-tight">Manage<br/>Migraines</span>
              </div>
            </div>
          </motion.div>

          {/* Product Image on Right Column - Removed because it is integrated in the background image */}
          <div className="relative flex justify-center items-center mt-10 md:mt-0 lg:ml-10">
            <div className="relative z-10 flex flex-col items-center">
            </div>
          </div>
          {/* Floating Order Now Button - Sparkle Position on Beaker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="absolute -bottom-6 right-2 md:-bottom-8 md:right-4 z-40"
          >
            <Link 
              to="/products/1"
              className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 text-white text-xl font-bold rounded-full shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all transform hover:scale-110 flex items-center gap-2 border-2 border-white/20 backdrop-blur-sm"
            >
              Description <Info className="w-6 h-6 ml-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>

    {/* Trust Banner Strip - Soft Blended Glassmorphism */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/40 backdrop-blur-2xl border-t border-white/50 border-b py-6 w-full z-20 relative shadow-[0_-10px_40px_-15px_rgba(20,184,166,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-teal-800/20">
          
          <div className="flex items-center gap-4 w-full justify-center md:justify-start pt-4 md:pt-0 pl-0 md:pl-4">
            <Award className="w-10 h-10 text-teal-700 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-teal-950 font-bold text-lg tracking-wide">Trusted Nutraceutical Brand</span>
          </div>

          <div className="flex items-center gap-4 w-full justify-center md:justify-center pt-6 md:pt-0 px-0 md:px-8">
            <ShieldCheck className="w-10 h-10 text-teal-700 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-teal-950 font-bold text-lg tracking-wide">Evidence-based nutrition for modern life</span>
          </div>

          <div className="flex items-center gap-4 w-full justify-center md:justify-end pt-6 md:pt-0 pr-0 md:pr-4">
            <Microscope className="w-10 h-10 text-teal-700 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-teal-950 font-bold text-lg tracking-wide">Clinical research backed formulation</span>
          </div>

        </div>
      </div>
    </motion.div>

    {/* Best Sellers Section */}
    <div className="py-24 bg-gradient-to-b from-teal-50 to-teal-100/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-950 tracking-tight">Featured Formulations</h2>
            {/* Search Bar matching screenshot */}
            <div className="w-full md:w-[450px]">
              <div className="flex items-center w-full h-14 bg-white border border-teal-300 hover:border-teal-400 focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/20 rounded-full shadow-md overflow-hidden pl-6 pr-2 transition-all duration-300">
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="flex-1 h-full outline-none text-teal-950 text-lg placeholder-teal-800/60 bg-transparent font-medium mr-2"
                />
                <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
          <p className="mt-6 text-lg text-teal-700/80 font-medium max-w-2xl">Discover our most trusted, scientifically backed formulations designed for your modern lifestyle.</p>
        </motion.div>

        {/* Grid: 3 columns, full width aligned, shorter height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Oscalbon", image: "/oscalbon_bottle_1781949612004.png" },
            { title: "AddPlus", image: "/addplus_bottle_1781949623355.png" },
            { title: "MAG-B6", image: "/mag_b6_bottle.png" },
            { title: "Myo-4D", image: "/myo4d_bottle_1781949646495.png" },
            { title: "Wel-15 W", image: "/wel_15_w_bottle_1781949666339.png" },
            { title: "Wel-9 M", image: "/wel_9_m_bottle_1781949676994.png" },
            { title: "Cdip Capsule", image: "/cdip_bottle_1781949634052.png" },
            { title: "Immuhance", image: "/immuhance_bottle_1781949690304.png" },
            { title: "Immuhance Kid", image: "/immuhance_kid_bottle_1781949702431.png" },
            { title: "Mypro-H | Chocolate", image: "/myprotein_chocolate_bottle_1781949722698.png" },
            { title: "Mypro-H | Vanilla", image: "/myprotein_vanilla_bottle_1781949733064.png" },
            { title: "Plentiful", image: "/plentiful_bottle_1781949745472.png" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col group cursor-pointer mb-8"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden mb-4 rounded-lg shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" 
                />
              </div>
              
              <div className="flex flex-col items-start px-1">
                <h3 className="text-sm md:text-base font-bold text-slate-800 underline decoration-slate-300 decoration-2 underline-offset-4 group-hover:decoration-teal-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            to="/products"
            className="inline-block px-10 py-4 bg-white border-2 border-teal-900 text-teal-950 hover:bg-teal-900 hover:text-white rounded-full font-bold text-lg transition-colors shadow-sm"
          >
            View Complete Range
          </Link>
        </div>
      </div>
    </div>

    {/* Manufactured in Labs Section */}
    <div className="pb-24 pt-8 bg-gradient-to-b from-teal-50 to-teal-100/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading on the left */}
        <div className="mb-12 text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#457b8d] leading-tight tracking-tight">
            Manufactured in
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-black mt-2 tracking-tight">
            Advanced Laboratories
          </p>
        </div>

        {/* 2 Images and their respective icons side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-teal-100/50 group">
              <img src="/real_lab_1.png" alt="Lab Research" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 object-center" />
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-teal-100 flex items-center gap-4">
              <div className="bg-teal-50 p-3 rounded-xl flex-shrink-0">
                <ShieldCheck className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-bold text-teal-950 text-lg">Clinically Tested</h4>
                <p className="text-sm text-slate-500 mt-1 font-medium">Rigorous third-party testing for safety and exact potency.</p>
              </div>
            </div>
            {/* Column 1 Points */}
            <div className="bg-white/60 p-6 md:p-8 rounded-3xl border border-teal-100/50 shadow-sm backdrop-blur-sm flex-1">
              <div className="space-y-4 text-teal-800 leading-relaxed md:text-base">
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-white/50 transition-colors duration-300 group">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-2.5 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-teal-100/50 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                  </div>
                  <p>
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-emerald-600 block mb-1 text-[1.1rem]">Science-Driven Innovation</strong>
                    Committed to delivering high-quality nutraceutical and healthcare products.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-white/50 transition-colors duration-300 group">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-2.5 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-teal-100/50 group-hover:scale-110 transition-transform duration-300">
                    <FlaskConical className="w-5 h-5 text-emerald-500" />
                  </div>
                  <p>
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-emerald-600 block mb-1 text-[1.1rem]">Advanced Infrastructure</strong>
                    Ingredients are developed in partner laboratories equipped with modern technology.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-white/50 transition-colors duration-300 group">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-2.5 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-teal-100/50 group-hover:scale-110 transition-transform duration-300">
                    <ClipboardCheck className="w-5 h-5 text-emerald-500" />
                  </div>
                  <p>
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-emerald-600 block mb-1 text-[1.1rem]">Rigorous Quality Control</strong>
                    Produced using scientifically validated methods and patented technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-teal-100/50 group">
              <img src="/real_lab_2.png" alt="Lab Equipment" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 object-center" />
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-teal-100 flex items-center gap-4">
              <div className="bg-teal-50 p-3 rounded-xl flex-shrink-0">
                <Microscope className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-bold text-teal-950 text-lg">Highest Purity</h4>
                <p className="text-sm text-slate-500 mt-1 font-medium">Sourced from premium, bio-available raw ingredients.</p>
              </div>
            </div>
            {/* Column 2 Points */}
            <div className="bg-white/60 p-6 md:p-8 rounded-3xl border border-teal-100/50 shadow-sm backdrop-blur-sm flex-1">
              <div className="space-y-4 text-teal-800 leading-relaxed md:text-base">
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-white/50 transition-colors duration-300 group">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-2.5 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-teal-100/50 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-emerald-500" />
                  </div>
                  <p>
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-emerald-600 block mb-1 text-[1.1rem]">Expert Supervision</strong>
                    Formulated under the guidance of experienced research scientists and industry experts.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-white/50 transition-colors duration-300 group">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-2.5 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-teal-100/50 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-emerald-500" />
                  </div>
                  <p>
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-emerald-600 block mb-1 text-[1.1rem]">Uncompromising Safety</strong>
                    Strict assurance protocols ensure consistency, purity, and efficacy in every batch.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-white/50 transition-colors duration-300 group">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-2.5 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-teal-100/50 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-5 h-5 text-emerald-500" />
                  </div>
                  <p>
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-emerald-600 block mb-1 text-[1.1rem]">Global Standards</strong>
                    Carefully sourced and manufactured to meet the highest international healthcare standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  );
}
