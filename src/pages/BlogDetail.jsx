import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const blogData = {
  'cellular-absorption': {
    title: "The Science of Cellular Absorption",
    content: `
      <p class="mb-4">Magnesium is essential for over 300 biochemical reactions in the human body, but not all magnesium supplements are created equal. The key to effectiveness lies not just in the amount of magnesium ingested, but in how much of it actually reaches the cells where it's needed.</p>
      
      <h3 class="text-2xl font-bold text-teal-900 mt-8 mb-4">The Challenge of Absorption</h3>
      <p class="mb-4">Traditional forms of magnesium, such as magnesium oxide or magnesium citrate, often face significant hurdles in the digestive tract. They can draw water into the intestines (causing a laxative effect) and are only partially absorbed into the bloodstream.</p>
      
      <h3 class="text-2xl font-bold text-teal-900 mt-8 mb-4">Why Bisglycinate is Different</h3>
      <p class="mb-4">Magnesium bisglycinate is uniquely structured. By attaching a magnesium molecule to two molecules of the amino acid glycine, the compound takes advantage of dipeptide absorption pathways in the gut. This means it essentially "bypasses" the normal, easily saturated mineral absorption channels.</p>
      
      <p class="mb-4">Clinical trials have consistently shown that this chelated form offers superior bioavailability, meaning more of the mineral makes it into your bloodstream and, ultimately, your cells. Furthermore, because glycine itself acts as a calming neurotransmitter, this specific compound offers synergistic benefits for relaxation and sleep quality.</p>
    `,
    author: "Dr. Sarah Jenkins",
    date: "Oct 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80"
  },
  'autoimmune-healing': {
    title: "Nutrition for Autoimmune Healing",
    content: `
      <p class="mb-4">Autoimmune conditions present a complex challenge where the body's immune system mistakenly attacks healthy tissue. While traditional medicine often relies on immunosuppressants, emerging research highlights the profound impact of dietary interventions in modulating immune response and managing chronic inflammation.</p>
      
      <h3 class="text-2xl font-bold text-teal-900 mt-8 mb-4">The Role of the Gut Barrier</h3>
      <p class="mb-4">A critical factor in autoimmune conditions is intestinal permeability, often referred to as "leaky gut." When the tight junctions of the intestinal lining loosen, undigested food particles, toxins, and microbes can enter the bloodstream. This triggers a systemic immune response.</p>
      
      <h3 class="text-2xl font-bold text-teal-900 mt-8 mb-4">Targeted Nutritional Strategies</h3>
      <p class="mb-4">Healing protocols focus heavily on repairing the gut lining and reducing inflammatory triggers. This often involves eliminating common irritants like gluten, refined sugars, and certain dairy products, while significantly increasing the intake of anti-inflammatory compounds.</p>
      
      <p class="mb-4">Nutrients such as Omega-3 fatty acids, Vitamin D, Curcumin, and specific antioxidants play pivotal roles. They not only help resolve existing inflammation but also support the body's natural tissue repair mechanisms. By shifting the dietary paradigm, patients frequently report significant reductions in symptom severity and frequency.</p>
    `,
    author: "Dr. Michael Chen",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
  },
  'gut-brain-connection': {
    title: "Gut-Brain Connection Decoded",
    content: `
      <p class="mb-4">The concept of a "gut feeling" is no longer just metaphorical. The enteric nervous system, a complex network of neurons lining the gastrointestinal tract, communicates continuously with the brain. This bidirectional highway, known as the gut-brain axis, is revolutionizing our understanding of mental health and cognitive performance.</p>
      
      <h3 class="text-2xl font-bold text-teal-900 mt-8 mb-4">Microbiome: The Chemical Factory</h3>
      <p class="mb-4">The trillions of microbes residing in our gut do more than digest food. They actively manufacture a vast array of neurochemicals. Remarkably, an estimated 90% of the body's serotonin—a neurotransmitter crucial for mood regulation—is produced in the digestive tract.</p>
      
      <h3 class="text-2xl font-bold text-teal-900 mt-8 mb-4">Influencing Anxiety and Focus</h3>
      <p class="mb-4">Recent studies have demonstrated that changes in the gut microbiome composition can directly influence behavioral phenotypes. Dysbiosis (microbial imbalance) has been linked to increased anxiety, depressive symptoms, and cognitive fog.</p>
      
      <p class="mb-4">Conversely, optimizing gut health through prebiotics, targeted probiotics, and a diverse, fiber-rich diet can enhance resilience to stress, improve emotional regulation, and sharpen cognitive focus. As research evolves, it's becoming clear that mental clarity and emotional stability begin at the level of the microbiome.</p>
    `,
    author: "Elena Rossi, PhD",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=1200&q=80"
  }
};

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogData[id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyan-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-teal-600 hover:text-cyan-600 font-semibold flex items-center justify-center">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-teal-600 hover:text-cyan-600 font-semibold mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to all articles
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-xl border border-white"
        >
          <div className="h-64 sm:h-96 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap gap-4 text-sm text-teal-700/80 mb-6 font-medium">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {post.date}</div>
              <div className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {post.author}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {post.readTime}</div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-950 mb-8 leading-tight">{post.title}</h1>
            
            <div 
              className="prose prose-lg prose-teal max-w-none text-teal-900/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
