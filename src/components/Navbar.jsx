import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState("SLEEP DISORDER");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle transparency
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true);  // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const categories = [
    { id: "SLEEP DISORDER", label: "Sleep Disorder" },
    { id: "BONES CARE", label: "Bones Care" },
    { id: "ANTIOXIDANT", label: "Antioxidant/Multivitamin" },
    { id: "WOMEN'S BASICS", label: "Women's Basics" },
    { id: "MEN'S BASICS", label: "Men's Basics" },
    { id: "IMMUNITY CARE", label: "Immunity Care" },
    { id: "PROTEIN SUPPLEMENT", label: "Protein Supplement" }
  ];

  const productsData = {
    "SLEEP DISORDER": [
      { 
        id: 1, 
        title: "MAG-B6", 
        subtitle: "Advanced Sleep Support & Relaxation", 
        details: ["Promotes deep and restful sleep", "Relieves muscle cramps", "Reduces stress and anxiety", "Enhances nervous system health"], 
        image: "/mag_b6_bottle.png" 
      }
    ],
    "BONES CARE": [
      { 
        id: 2, 
        title: "Oscalbon", 
        subtitle: "Complete Bone Density Formula", 
        details: ["Improves bone strength", "High absorption calcium", "Contains Vitamin D3 & K2", "Supports joint flexibility"], 
        image: "/oscalbon_bottle_1781949612004.png" 
      }
    ],
    "ANTIOXIDANT": [
      { 
        id: 3, 
        title: "AddPlus", 
        subtitle: "Premium Antioxidant", 
        details: ["Boosts immune system", "Fights free radicals", "Enhances overall health"], 
        image: "/addplus_bottle_1781949623355.png" 
      },
      { 
        id: 4, 
        title: "Cdip", 
        subtitle: "Complete Multivitamin", 
        details: ["All-in-one daily nutrition", "Supports immune function", "Boosts energy levels"], 
        image: "/cdip_bottle_1781949634052.png" 
      }
    ],
    "WOMEN'S BASICS": [
      { 
        id: 5, 
        title: "Myo-4D", 
        subtitle: "Women's Support", 
        details: [], 
        image: "/myo4d_bottle_1781949646495.png" 
      },
      { 
        id: 6, 
        title: "Wel-15 W", 
        subtitle: "Women's Probiotic", 
        details: ["Supports digestive health", "Balances gut microbiome", "Improves nutrient absorption"], 
        image: "/wel_15_w_bottle_1781949666339.png" 
      }
    ],
    "MEN'S BASICS": [
      { 
        id: 7, 
        title: "Wel-9 M", 
        subtitle: "Men's Probiotic", 
        details: ["Tailored for male digestive health", "Balances gut microbiome", "Improves nutrient absorption"], 
        image: "/wel_9_m_bottle_1781949676994.png" 
      }
    ],
    "IMMUNITY CARE": [
      { 
        id: 8, 
        title: "Immuhance", 
        subtitle: "Daily Cellular Antioxidant", 
        details: ["Boosts immune system", "Fights free radicals", "Enhances skin health"], 
        image: "/immuhance_bottle_1781949690304.png" 
      },
      { 
        id: 9, 
        title: "Immuhance Kid", 
        subtitle: "Kids Immunity Support", 
        details: ["Supports immune development", "Fights free radicals in growing children"], 
        image: "/immuhance_kid_bottle_1781949702431.png" 
      }
    ],
    "PROTEIN SUPPLEMENT": [
      { 
        id: 10, 
        title: "Myprotein Chocolate", 
        subtitle: "Premium Whey Isolate", 
        details: ["Rich chocolate flavor", "Builds lean muscle", "Fast absorption"], 
        image: "/myprotein_chocolate_bottle_1781949722698.png" 
      },
      { 
        id: 11, 
        title: "Myprotein Vanilla", 
        subtitle: "Premium Whey Isolate", 
        details: ["Smooth vanilla flavor", "Builds lean muscle", "Fast absorption"], 
        image: "/myprotein_vanilla_bottle_1781949733064.png" 
      },
      { 
        id: 12, 
        title: "Plentiful", 
        subtitle: "Complete Multivitamin Protein Complex", 
        details: ["All-in-one daily nutrition", "Boosts energy levels", "Supports overall health"], 
        image: "/plentiful_bottle_1781949745472.png" 
      }
    ]
  };

  return (
    <>
    <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-gradient-to-r from-teal-50 to-teal-100/90 backdrop-blur-md shadow-sm border-b border-teal-100 py-0' : 'bg-transparent py-2'}`}>
      
      {/* Absolute Logo attached to Top Left (ekdum chipka hua) */}
      <Link to="/" className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col items-start justify-center z-50">
        <span className="font-display text-2xl font-black text-teal-900 tracking-tight leading-none">ATLAS Main Branch</span>
        <span className="font-display text-sm font-bold text-cyan-600 tracking-wider mt-1">ATLAS Sub Branch</span>
      </Link>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden absolute top-4 right-4 md:top-6 md:right-6 p-2 z-[70] bg-white/50 backdrop-blur-md rounded-lg shadow-sm border border-teal-100/50"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-teal-900" /> : <Menu className="w-6 h-6 text-teal-900" />}
      </button>

      <div className="w-full relative">
        <div className="flex justify-center items-center h-24">
          
          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-8 items-center absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="font-semibold text-teal-900 hover:text-teal-600 transition-colors text-sm">Home</Link>
            
            {/* Product Dropdown Trigger */}
            <div 
              className="relative py-8" 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/products" className={`flex items-center font-semibold transition-colors text-sm ${isDropdownOpen ? 'text-teal-700' : 'text-gray-600 hover:text-teal-600'}`}>
                Product <ChevronDown className="w-4 h-4 ml-1" />
              </Link>

              {/* Mega Menu Dropdown */}
              <div 
                className={`absolute top-[calc(100%-1.5rem)] -left-6 w-[1000px] bg-white shadow-2xl rounded-b-lg border-t-[3px] border-teal-800 flex overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
              >
                {/* Left Sidebar */}
                <div className="w-64 bg-gray-50 border-r border-gray-100 py-4 flex flex-col z-10 shadow-[2px_0_10px_rgba(0,0,0,0.05)]">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setActiveCategory(cat.id)}
                      className={`text-left px-6 py-3 text-sm font-bold flex items-center justify-between transition-colors ${activeCategory === cat.id ? 'bg-white text-teal-900 shadow-sm border-l-4 border-teal-600' : 'text-gray-600 hover:bg-gray-100 border-l-4 border-transparent'}`}
                    >
                      {cat.label}
                      <ChevronRight className={`w-4 h-4 ${activeCategory === cat.id ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                  ))}
                </div>
                
                {/* Right Content Area */}
                <div className="flex-1 p-10 bg-white flex flex-col gap-y-12 min-h-[350px] max-h-[600px] overflow-y-auto custom-scrollbar" data-lenis-prevent="true">
                  {productsData[activeCategory]?.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id} className="group flex flex-row items-start gap-16 border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                      {/* Left: Image Box + Title */}
                      <div className="flex flex-col items-center w-48 flex-shrink-0">
                        <div className="w-full h-48 flex items-center justify-center transition-all duration-300 rounded-2xl overflow-hidden shadow-sm">
                          <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 rounded-2xl" 
                          />
                        </div>
                        <h4 className="text-2xl text-teal-900 font-bold mt-4 tracking-wide leading-relaxed text-center group-hover:text-teal-700 transition-colors">{product.title}</h4>
                      </div>
                      
                      {/* Right: Details Box */}
                      <div className="flex flex-col text-left flex-1 pt-2">
                        <h5 className="text-xl text-teal-900 font-bold tracking-wide leading-relaxed border-b border-teal-200 pb-2 mb-4">Details :-</h5>
                        {/* Empty Space as requested */}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/experts" className="text-gray-600 hover:text-teal-600 font-semibold transition-colors text-sm whitespace-nowrap">Talk to Our Expert</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-teal-600 font-semibold transition-colors text-sm">Gallery</Link>
            <Link to="/blog" className="text-gray-600 hover:text-teal-600 font-semibold transition-colors text-sm">Blog</Link>
            <Link to="/diet-plans" className="text-gray-600 hover:text-teal-600 font-semibold transition-colors text-sm whitespace-nowrap">Diet Plans</Link>
            <Link to="/about" className="text-gray-600 hover:text-teal-600 font-semibold transition-colors text-sm whitespace-nowrap">About Us</Link>
          </div>

          {/* Icons Section Removed */}
        </div>
      </div>

    </nav>

    {/* Mobile Menu Drawer */}
    <div 
      className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`absolute inset-0 bg-teal-950/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />
      <div className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col gap-6 mt-20 h-full overflow-y-auto custom-scrollbar" data-lenis-prevent="true">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-teal-950 border-b border-gray-100 pb-4">Home</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-teal-950 border-b border-gray-100 pb-4">Products</Link>
          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-teal-950 border-b border-gray-100 pb-4">Gallery</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-teal-950 border-b border-gray-100 pb-4">Blog</Link>
          <Link to="/diet-plans" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-teal-950 border-b border-gray-100 pb-4">Diet Plans</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-teal-950 border-b border-gray-100 pb-4">About Us</Link>
          
          <div className="mt-auto pt-8 pb-4">
            <Link 
              to="/experts" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block w-full text-center bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-md"
            >
              Talk to Our Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
