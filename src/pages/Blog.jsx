import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: "cellular-absorption",
      title: "The Science of Cellular Absorption",
      excerpt: "Understanding why Magnesium Bisglycinate outperforms other forms of magnesium in clinical trials.",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
    },
    {
      id: "autoimmune-healing",
      title: "Nutrition for Autoimmune Healing",
      excerpt: "How dietary interventions are shifting the paradigm for patients with chronic inflammation.",
      date: "Sep 28, 2026",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
    },
    {
      id: "gut-brain-connection",
      title: "Gut-Brain Connection Decoded",
      excerpt: "The latest research on how your microbiome directly influences anxiety and cognitive performance.",
      date: "Sep 15, 2026",
      image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl font-extrabold text-teal-950 mb-6">Latest Research & Insights</h1>
          <p className="text-lg text-teal-800/80">Stay updated with the latest clinical findings and nutritional science from the ATLAS research team.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-lg border border-white/80 group flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-cyan-600 font-bold text-sm mb-3">{post.date}</p>
                  <h3 className="text-2xl font-bold text-teal-950 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-teal-800/70">{post.excerpt}</p>
                </div>
                <Link to={`/blog/${post.id}`} className="mt-8 flex items-center text-teal-700 font-bold hover:text-cyan-600 transition-colors">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
