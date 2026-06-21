import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-teal-950 mb-6">Pioneering Nutraceutical Science</h1>
            <p className="text-lg text-teal-800/80 mb-6 leading-relaxed">
              ATLAS was founded on a simple principle: to bridge the gap between advanced clinical research and daily nutritional wellness. We believe that true health begins at the cellular level.
            </p>
            <p className="text-lg text-teal-800/80 mb-8 leading-relaxed">
              Our state-of-the-art facilities and dedicated team of researchers ensure that every formulation, from our flagship MAG-B6 to our specialized diet plans, meets the highest standards of efficacy and purity.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-teal-200 pt-8">
              <div>
                <h4 className="text-4xl font-black text-cyan-600 mb-2">10+</h4>
                <p className="text-teal-900 font-bold">Years of Research</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-cyan-600 mb-2">50k+</h4>
                <p className="text-teal-900 font-bold">Lives Transformed</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" 
              alt="Our Laboratory" 
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
