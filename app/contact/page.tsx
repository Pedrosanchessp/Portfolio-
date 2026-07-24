'use client';

import PageWrapper from '@/components/PageWrapper';
import { motion } from 'motion/react';
import { Mail, Github, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactItems = [
    { icon: Mail, label: 'Email', value: 'pedrodrop1902@gmail.com', href: 'mailto:pedrodrop1902@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'Pedrosanchessp', href: 'https://github.com/Pedrosanchessp' },
    { icon: MessageCircle, label: 'Discord', value: 'pedreles', href: '#' }
  ];

  return (
    <PageWrapper>
      <main className="pt-32 px-6 max-w-4xl mx-auto flex flex-col items-center gap-12 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold tracking-tighter mb-6">let&apos;s build together_</h1>
          <p className="text-white/50 text-xl max-w-xl mx-auto">
            currently open to new opportunities and interesting digital collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="card-glass p-10 rounded-3xl flex flex-col items-center gap-4 transition-all duration-300 group cursor-pointer"
            >
              <item.icon className="size-8 text-white/40 group-hover:text-white transition-colors" />
              <div className="text-center">
                <div className="text-sm font-mono text-white/20 mb-1">{item.label}</div>
                <div className="font-bold text-lg">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-white/20 text-sm font-mono"
        >
          available.worldwide / based.in.space
        </motion.div>
      </main>
    </PageWrapper>
  );
}
