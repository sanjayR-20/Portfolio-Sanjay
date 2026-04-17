'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import LaserFlow from '@/components/ui/LaserFlow';
import { portfolio } from '@/lib/portfolio-data';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering with precision, not noise"
        description="A structured look at what I build, how I operate, and where I focus right now."
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/65 bg-slate-900 p-8 text-slate-100 shadow-xl sm:p-10">
        <LaserFlow />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            {portfolio.aboutQuote}
          </motion.p>

          <ul className="space-y-3">
            {portfolio.aboutBullets.map((bullet, index) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-lagoon" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
