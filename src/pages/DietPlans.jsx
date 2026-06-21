import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Activity, Heart, Leaf, Stethoscope, Droplets, Baby } from 'lucide-react';

const dietCategories = [
  {
    category: "Weight Management",
    icon: <Activity className="w-6 h-6 text-emerald-600" />,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    plans: [
      { title: "WEIGHT LOSS Diet Plan", subtitle: "Sustainable fat loss protocol" },
      { title: "WEIGHT GAIN & MUSCLE BUILDING Diet Plan", subtitle: "High protein, surplus calories" },
      { title: "POSTPARTUM WEIGHT LOSS DIET Plan", subtitle: "Safe recovery nutrition" },
      { title: "INTERMITTENT FASTING Diet Plan", subtitle: "Time-restricted eating guide" }
    ]
  },
  {
    category: "Women's Health",
    icon: <Baby className="w-6 h-6 text-pink-500" />,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
    plans: [
      { title: "PCOS/PCOD Diet Plan", subtitle: "Low Carbohydrate High Fat Diet Plan" },
      { title: "Menopause Diet Plan", subtitle: "Low Carbohydrate High Fat Diet Plan" },
      { title: "PREGNANCY Diet Plan", subtitle: "Essential prenatal nutrition" },
      { title: "FERTILITY DIET PLAN", subtitle: "Reproductive health support" }
    ]
  },
  {
    category: "Autoimmune, Skin & Hair",
    icon: <Droplets className="w-6 h-6 text-cyan-500" />,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    plans: [
      { title: "AUTOIMMUNE CONDITION Diet Plan", subtitle: "Inflammation reduction" },
      { title: "ECZEMA DIET PLAN", subtitle: "Skin barrier repair" },
      { title: "Lichen Planus Diet Plan", subtitle: "Autoimmune Condition Lowering" },
      { title: "SKIN DIET Plan For Healthier Skin", subtitle: "Glow & vitality protocol" },
      { title: "HAIR FALL / ALOPECIA Diet Plan", subtitle: "Follicle strengthening" },
      { title: "PSORIASIS Diet Plan", subtitle: "Soothing & healing diet" }
    ]
  },
  {
    category: "Digestive Health",
    icon: <Leaf className="w-6 h-6 text-teal-600" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    plans: [
      { title: "IBS / IBD Diet Plan", subtitle: "Low Carbohydrate High Fat Diet Plan" },
      { title: "Acidity Diet Plan", subtitle: "Low Carbohydrate High Fat Diet Plan" },
      { title: "Constipation Diet Plan", subtitle: "Low Carbohydrate High Fat Diet Plan" }
    ]
  },
  {
    category: "Metabolic & Cardiac",
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80",
    plans: [
      { title: "Diabetes Type 1 Diet Plan", subtitle: "21 Days Autoimmune Antibodies Lowering" },
      { title: "Diabetes Type 2 Diet Plan", subtitle: "Low Carbohydrate High Fat Diet Plan" },
      { title: "HIGH BLOOD PRESSURE Diet Plan", subtitle: "Cardiovascular support" },
      { title: "Cholesterol Diet Plan", subtitle: "Low Carbohydrate High Fat Diet Plan" },
      { title: "URIC ACID Diet Plan", subtitle: "Purine-controlled eating" },
      { title: "4 Weeks FATTY LIVER Diet Plan", subtitle: "Liver detox and recovery" }
    ]
  },
  {
    category: "Specialized Protocols",
    icon: <Stethoscope className="w-6 h-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=800&q=80",
    plans: [
      { title: "Hyperthyroid Diet Plan", subtitle: "Thyroid balancing nutrition" },
      { title: "WEIGHT LOSS WITH HYPOTHYROID Diet Plan", subtitle: "Metabolic rate support" },
      { title: "WEIGHT LOSS WITH ARTHRITIS Diet Plan", subtitle: "Joint-friendly weight loss" },
      { title: "KIDS Gluten-Free, Nutrient-Dense Foods DIET PLAN", subtitle: "Healthy growth" },
      { title: "VARICOSE VEINS/SPIDER VEINS Diet Plan", subtitle: "Circulation support" },
      { title: "IMMUNITY BOOSTING DIET PLAN", subtitle: "Defense mechanism enhancement" },
      { title: "Navratri Diet Plan", subtitle: "Healthy fasting protocol" }
    ]
  }
];

export default function DietPlans() {
  const [activeCategory, setActiveCategory] = useState("Weight Management");

  const activeCategoryObj = dietCategories.find(c => c.category === activeCategory);
  const activePlans = activeCategoryObj?.plans || [];
  const activeImage = activeCategoryObj?.image;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-[3.5rem] font-extrabold text-teal-950 tracking-tight leading-tight mb-4">
            Scientifically Formulated <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Diet Plans</span>
          </h1>
          <p className="text-lg text-teal-800/80 font-medium">
            Explore 30 specialized, evidence-based diet plans tailored to address specific health conditions and lifestyle goals. 
            Select a category below to find the perfect nutritional protocol for your needs.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Categories (Horizontal Ribbon on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 xl:w-1/4 flex flex-row lg:flex-col gap-3 overflow-x-auto snap-x hide-scrollbar pb-4 lg:pb-0"
          >
            {dietCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex-shrink-0 lg:flex-shrink flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border shadow-sm snap-start ${
                  activeCategory === cat.category 
                    ? 'bg-teal-800 text-white border-teal-800 shadow-teal-900/20 shadow-lg scale-[1.02]' 
                    : 'bg-white/60 backdrop-blur-md text-teal-900 border-white/80 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${activeCategory === cat.category ? 'bg-white/20' : 'bg-teal-50'}`}>
                    {React.cloneElement(cat.icon, { className: `w-5 h-5 ${activeCategory === cat.category ? 'text-white' : ''}` })}
                  </div>
                  <span className="font-bold text-left text-sm whitespace-nowrap lg:whitespace-normal">{cat.category}</span>
                </div>
                <ChevronRight className={`hidden lg:block w-5 h-5 ${activeCategory === cat.category ? 'text-teal-300' : 'text-teal-300 opacity-0'}`} />
              </button>
            ))}
          </motion.div>

          {/* Diet Plans Grid */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <motion.h2 
              key={activeCategory + "-title"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-extrabold text-teal-950 mb-6 flex items-center gap-3"
            >
              {activeCategory} Plans
              <span className="text-sm font-bold bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                {activePlans.length} Plans
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activePlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/50 backdrop-blur-xl rounded-[1.5rem] shadow-lg border border-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full overflow-hidden"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={activeImage} 
                      alt={plan.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-[1.1rem] font-bold text-teal-950 leading-tight mb-2 group-hover:text-teal-700 transition-colors">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-teal-800/70 font-medium mb-6">
                        {plan.subtitle}
                      </p>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-teal-50 hover:bg-teal-800 text-teal-900 hover:text-white border border-teal-100 font-semibold rounded-xl flex justify-center items-center gap-2 transition-all duration-300 group/btn">
                      <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Download Plan
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
