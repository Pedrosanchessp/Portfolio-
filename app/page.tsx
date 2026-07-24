'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';
import PageWrapper from '@/components/PageWrapper';

const PortfolioCard = () => {
  const el = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), { stiffness: 150, damping: 20 });

  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['hello there', 'innovative design', 'full-stack magic', 'typescript wizardry'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      cursorChar: '_',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group p-[1px] rounded-3xl overflow-hidden w-full max-w-[420px]"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        style={{ transform: isMobile ? 'none' : 'translateZ(20px)' }}
        className="card-glass relative z-10 p-6 md:p-8 rounded-[23px] flex flex-col gap-6"
      >
        <div className="spotlight group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
        
        <div className="flex flex-col gap-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold flex items-center gap-3 tracking-tight"
          >
            <span className="text-2xl">⚡</span>
            <span ref={el} className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent"></span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[0.95rem] text-white/50 leading-relaxed font-light"
          >
            I&apos;m Pedro, a student developer passionate about building modern web applications and exploring artificial intelligence. 
            Constantly learning, creating new projects, and turning ideas into software that makes a real impact.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-4 mt-2"
        >
          {[
            { label: 'get in touch!', href: '/contact' },
            { label: 'the workshop (projects)', href: '/projects' },
            { label: 'journal (blog)', href: '/blog' }
          ].map((link, i) => (
            <Link 
              key={i} 
              href={link.href} 
              className="contact-link-fx flex items-center gap-3 text-[0.9rem] text-white/80 hover:text-white transition-colors duration-300 w-fit group/link"
            >
              <span className="relative py-1">
                {link.label}
                <span className="contact-underline" />
              </span>
              <ArrowRight className="size-4 contact-arrow" />
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 w-full flex justify-center"
        >
          <PortfolioCard />
        </motion.div>
      </main>
    </PageWrapper>
  );
}
