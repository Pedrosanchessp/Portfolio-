'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';

const posts = [
  { 
    id: 'yuanas-truth',
    date: '2026.07.23', 
    title: 'The Hard Truth About Building Yuanas', 
    excerpt: 'Building a SaaS for the complex world of international shipping was more than just coding—it was about understanding the logistics of a global market.',
    content: `Building Yuanas wasn't just about writing code; it was a deep dive into the chaotic world of global logistics. The biggest challenge was the "Link Extractor." Every agent platform (PandaBuy, CSSBuy, etc.) has its own way of rendering data, and many use anti-scraping measures. I had to build a robust proxy system and a parser that could adapt to daily changes in their DOM structure.

Beyond the code, I realized that developers often forget the 'User' part of the equation. Importers don't care about my stack—they care about not getting fined by customs. Integrating a real-time Tax Analysis engine was the turning point where the tool became a necessity rather than a luxury.`
  },
  { 
    id: 'first-customers',
    date: '2026.07.23', 
    title: 'Acquiring the First Customers in a Niche Market', 
    excerpt: 'How I navigated the importing community to build trust and prove the value of Yuanas. It wasn’t about the marketing budget.',
    content: `Trust is the most expensive currency in niche communities. To get the first 100 users for Yuanas, I didn't run ads. I spent weeks in Discord servers and subreddits, not as a salesman, but as a problem solver. 

When someone complained about a complex declaration, I would manually generate one for them using my prototype and send it over. That 'Hand-holding' phase was crucial. It provided me with immediate feedback and created a core group of power users who then became my biggest advocates. Word of mouth in a tight-knit community is 10x more effective than a landing page.`
  },
  { 
    id: 'ai-future',
    date: '2026.07.23', 
    title: 'The Future of Software Engineering in the Age of AI', 
    excerpt: 'As a student developer, I see AI not as a replacement, but as the ultimate force multiplier. The shift from writing code to architecting solutions.',
    content: `The question isn't whether AI will replace engineers, but how engineers will evolve with AI. In the next few years, the 'Syntactic' barrier to entry for coding will vanish. Anyone will be able to generate a function. 

The real value will shift to 'Architectural Intent' and 'Problem Discovery.' We are moving from being 'Coders' to being 'System Architects.' The future belongs to those who can understand the bridge between human needs and machine execution. My role as a developer is now about defining the constraints and the vision, while AI handles the boilerplate. This is the most exciting time to be a student in this field.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <PageWrapper>
      <main className="pt-32 px-6 max-w-4xl mx-auto flex flex-col gap-12 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-start"
        >
          <div>
            <h1 className="text-5xl font-bold tracking-tighter mb-4">journal_</h1>
            <p className="text-white/50 text-lg">
              thoughts, tutorials, and late-night architectural epiphanies.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAbout(true)}
            className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all group"
          >
            <div className="flex items-center gap-3 px-2">
              <span className="text-xs font-mono tracking-widest hidden md:block">ABOUT ME</span>
              <span className="text-xl">👤</span>
            </div>
          </motion.button>
        </motion.div>

        <div className="flex flex-col gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer border-b border-white/5 pb-8 hover:border-white/20 transition-all duration-300"
              onClick={() => setSelectedPost(post)}
            >
              <div className="text-xs font-mono text-white/30 mb-2">{post.date}</div>
              <h2 className="text-2xl font-bold group-hover:text-white transition-colors mb-2">{post.title}</h2>
              <p className="text-white/40 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">
                Read full story →
              </div>
            </motion.article>
          ))}
        </div>

        {/* Article Reader Overlay */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl p-4 md:p-12 overflow-y-auto"
            >
              <div className="max-w-2xl mx-auto pt-20 md:pt-24 pb-20">
                <div className="flex justify-between items-center mb-12">
                  <motion.button 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => setSelectedPost(null)}
                    className="text-sm font-mono text-white/40 hover:text-white flex items-center gap-2 group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK
                  </motion.button>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="p-2 rounded-full bg-white/5 md:hidden"
                  >
                    ✕
                  </button>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-xs font-mono text-white/30 mb-4">{selectedPost.date}</div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">{selectedPost.title}</h1>
                  <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-6 whitespace-pre-wrap font-light">
                    {selectedPost.content}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* About Me Overlay */}
        <AnimatePresence>
          {showAbout && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl p-4 md:p-12 overflow-y-auto"
            >
              <div className="max-w-2xl mx-auto pt-20 md:pt-24 pb-20">
                <div className="flex justify-between items-center mb-12">
                  <motion.button 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => setShowAbout(false)}
                    className="text-sm font-mono text-white/40 hover:text-white flex items-center gap-2 group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK
                  </motion.button>
                  <button 
                    onClick={() => setShowAbout(false)}
                    className="p-2 rounded-full bg-white/5 md:hidden"
                  >
                    ✕
                  </button>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="prose prose-invert max-w-none"
                >
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">About Me</h2>
                  <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-6 font-light">
                    <p>
                      Hi, I&apos;m Pedro Sanches, a young developer passionate about technology, programming, and building creative solutions.
                    </p>
                    <p>
                      I started exploring software development because I love understanding how things work and turning ideas into real projects. I&apos;m currently focused on improving my skills in web development, artificial intelligence, and software engineering.
                    </p>
                    <p>
                      I enjoy creating modern, fast, and user-friendly experiences while constantly learning new technologies. Beyond coding, I participate in programming competitions, hackathons, and personal projects to challenge myself and grow as a developer.
                    </p>
                    <p>
                      My goal is to keep building, learning, and using technology to solve real-world problems.
                    </p>
                  </div>
                  
                  <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-4">
                    <div className="text-xs font-mono text-white/20 uppercase tracking-[0.2em]">Current Focus</div>
                    <div className="flex flex-wrap gap-2">
                      {['Machine Learning', 'AI', 'Python', 'JavaScript', 'HTML', 'CSS'].map(skill => (
                        <span key={skill} className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-white/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageWrapper>
  );
}
