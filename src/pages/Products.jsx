import React, { useState } from 'react';
import { Star, ChevronDown, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: 'MAG-B6', category: 'Sleep Disorder', price: '$35.00', rating: 4.8, reviews: 156, image: '/mag_b6_bottle.png', description: 'Advanced Sleep Support & Relaxation. Promotes deep and restful sleep while relieving muscle cramps and reducing stress.' },
  { id: 2, name: 'Oscalbon', category: 'Bones Care', price: '$42.00', rating: 4.7, reviews: 89, image: '/oscalbon_bottle_1781949612004.png', description: 'Complete Bone Density Formula. Improves bone strength with high absorption calcium and contains Vitamin D3 & K2.' },
  { id: 3, name: 'AddPlus', category: 'Antioxidant', price: '$45.00', rating: 4.9, reviews: 128, image: '/addplus_bottle_1781949623355.png', description: 'Premium Antioxidant. Boosts immune system, fights free radicals, and enhances overall health.' },
  { id: 4, name: 'Cdip', category: 'Antioxidant', price: '$52.00', rating: 4.8, reviews: 95, image: '/cdip_bottle_1781949634052.png', description: 'Complete Multivitamin offering all-in-one daily nutrition, supporting immune function and boosting energy levels.' },
  { id: 5, name: 'Myo-4D', category: "Women's Basics", price: '$39.00', rating: 4.6, reviews: 72, image: '/myo4d_bottle_1781949646495.png', description: "Comprehensive Women's Support supplement designed to meet the unique nutritional needs of women." },
  { id: 6, name: 'Wel-15 W', category: "Women's Basics", price: '$44.00', rating: 4.9, reviews: 204, image: '/wel_15_w_bottle_1781949666339.png', description: "Women's Probiotic. Supports digestive health, balances gut microbiome, and improves nutrient absorption." },
  { id: 7, name: 'Wel-9 M', category: "Men's Basics", price: '$44.00', rating: 4.7, reviews: 145, image: '/wel_9_m_bottle_1781949676994.png', description: "Men's Probiotic tailored for male digestive health and optimal gut microbiome balance." },
  { id: 8, name: 'Immuhance', category: 'Immunity Care', price: '$48.00', rating: 4.8, reviews: 112, image: '/immuhance_bottle_1781949690304.png', description: 'Daily Cellular Antioxidant. Boosts immune system, fights free radicals, and enhances skin health.' },
  { id: 9, name: 'Immuhance Kid', category: 'Immunity Care', price: '$38.00', rating: 5.0, reviews: 214, image: '/immuhance_kid_bottle_1781949702431.png', description: 'Kids Immunity support. Formulated to support immune development and fight free radicals in growing children.' },
  { id: 10, name: 'Myprotein Chocolate', category: 'Protein Supplement', price: '$55.00', rating: 4.8, reviews: 340, image: '/myprotein_chocolate_bottle_1781949722698.png', description: 'Premium Whey Isolate in rich chocolate flavor. Perfect for building lean muscle with fast absorption.' },
  { id: 11, name: 'Myprotein Vanilla', category: 'Protein Supplement', price: '$55.00', rating: 4.7, reviews: 290, image: '/myprotein_vanilla_bottle_1781949733064.png', description: 'Premium Whey Isolate with a smooth vanilla flavor. Builds lean muscle and provides fast absorption.' },
  { id: 12, name: 'Plentiful', category: 'Protein Supplement', price: '$60.00', rating: 4.9, reviews: 412, image: '/plentiful_bottle_1781949745472.png', description: 'Complete Multivitamin and protein complex. All-in-one daily nutrition that boosts energy levels and supports overall health.' }
];

const categories = [
  'All',
  'Sleep Disorder',
  'Bones Care',
  'Antioxidant',
  "Women's Basics",
  "Men's Basics",
  'Immunity Care',
  'Protein Supplement'
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-teal-950 tracking-tight leading-tight mb-4">Our Formulations</h1>
          <p className="text-base md:text-lg text-teal-800/80 font-medium px-2">
            Discover our range of premium, scientifically-backed supplements designed to elevate your health and vitality.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-12 relative z-20 w-full"
        >
          <div className="flex items-center text-teal-800 font-extrabold text-lg mb-4 md:mb-6">
            <Filter className="w-5 h-5 mr-2 text-teal-600" /> 
            <span>Filter</span>
          </div>

          {/* Filter Pills (All Screens) */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-teal-900 text-white shadow-md scale-105' 
                  : 'bg-white/60 backdrop-blur-md text-teal-800 hover:bg-white border border-teal-200/50 hover:border-teal-300 hover:shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/60 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-white/80 transition-all duration-300 group flex flex-col"
            >
              {/* Product Image Section */}
              <div className="relative h-[22rem] bg-gradient-to-b from-white/60 to-transparent p-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info Section */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-col items-start mb-4">
                  <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-[1.75rem] font-black text-teal-950 tracking-tight leading-none">{product.name}</h3>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30 fill-transparent'}`} 
                    />
                  ))}
                  <span className="text-sm font-bold text-teal-800/60 ml-2">({product.reviews})</span>
                </div>

                <p className="text-teal-800/80 text-[15px] leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
