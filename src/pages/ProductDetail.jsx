import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Sparkles, ClipboardCheck, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center text-teal-700 hover:text-cyan-600 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 backdrop-blur-2xl rounded-[3rem] border-4 border-white shadow-2xl relative overflow-hidden h-full min-h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 to-transparent z-10 pointer-events-none"></div>
            <img 
              src="/mag_b6_bottle.png" 
              alt="MAG-B6 Product" 
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </motion.div>

          {/* Right: Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block bg-cyan-100 text-cyan-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 w-max">
              Sleep Disorder & Recovery
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-950 mb-4 tracking-tight leading-none">
              MAG-B6<sup className="text-2xl text-cyan-600 ml-1">&trade;</sup>
            </h1>
            <p className="text-2xl text-teal-800/80 font-medium mb-8">
              Advanced Magnesium Bisglycinate formulation designed for maximum cellular absorption.
            </p>

            <div className="space-y-10">
              <section>
                <h3 className="text-2xl font-bold text-teal-950 mb-3 flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm"><Microscope className="w-6 h-6 text-cyan-600" /></div>
                  The Science of Absorption
                </h3>
                <p className="text-teal-900/80 leading-relaxed text-lg">
                  Unlike standard magnesium oxide which has a poor absorption rate of ~4%, <strong>MAG-B6™</strong> utilizes Magnesium Bisglycinate—magnesium bound to two molecules of the amino acid glycine. This creates a highly stable, bioavailable compound that easily crosses the intestinal wall through dipeptide channels.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-teal-950 mb-3 flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm"><Sparkles className="w-6 h-6 text-cyan-600" /></div>
                  Synergistic B6 Integration
                </h3>
                <p className="text-teal-900/80 leading-relaxed text-lg">
                  Vitamin B6 (Pyridoxine) serves as a critical co-factor that drives magnesium directly into the cells where it's needed most. The addition of B6 increases the intracellular uptake of magnesium by up to 25%, while simultaneously supporting neurotransmitter synthesis.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-teal-950 mb-4 flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm"><ClipboardCheck className="w-6 h-6 text-cyan-600" /></div>
                  Key Clinical Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-2xl p-5 border border-white">
                    <h4 className="font-bold text-teal-900 mb-1">Deep Sleep</h4>
                    <p className="text-sm text-teal-800/80">Regulates melatonin production.</p>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-5 border border-white">
                    <h4 className="font-bold text-teal-900 mb-1">Muscle Recovery</h4>
                    <p className="text-sm text-teal-800/80">Prevents involuntary muscle contractions.</p>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-5 border border-white">
                    <h4 className="font-bold text-teal-900 mb-1">Migraine Relief</h4>
                    <p className="text-sm text-teal-800/80">Relaxes cranial blood vessels.</p>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-5 border border-white">
                    <h4 className="font-bold text-teal-900 mb-1">Anxiety Reduction</h4>
                    <p className="text-sm text-teal-800/80">Lowers cortisol levels.</p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
