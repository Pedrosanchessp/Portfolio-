'use client';

import PageWrapper from '@/components/PageWrapper';
import { motion } from 'motion/react';

const projects = [
  { 
    title: 'Yuanas', 
    description: 'The ultimate tool for importers. AI-powered customs declaration generator, link extractor, and package management for those operating in China.', 
    tech: ['Next.js', 'AI', 'SaaS'],
    link: 'https://yuanas.vercel.app/'
  },
  { title: 'Aether OS', description: 'A sleek, web-based operating system built with React.', tech: ['React', 'TypeScript', 'Tailwind'], link: '#' },
  { title: 'Nebula UI', description: 'A collection of high-performance UI components.', tech: ['Framer Motion', 'Radix'], link: '#' },
  { title: 'Lumina API', description: 'Real-time data visualization engine for IoT devices.', tech: ['Node.js', 'WebSockets'], link: '#' }
];

export default function Projects() {
  return (
    <PageWrapper>
      <main className="pt-32 px-6 max-w-5xl mx-auto flex flex-col gap-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold tracking-tighter mb-4">the workshop_</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            a curated selection of my digital experiments and full-scale productions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                whileTap={{ scale: 0.98 }}
                className="card-glass p-6 rounded-3xl h-full flex flex-col gap-4 group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-white/10 transition-colors">
                    {project.title === 'Yuanas' ? '🇨🇳' : '📁'}
                  </div>
                  <div className="text-white/20 group-hover:text-white/60 transition-colors">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded-full text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
