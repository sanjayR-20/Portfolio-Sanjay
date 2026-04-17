'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import type { Achievement } from '@/lib/portfolio-data';

type GlassRevealCardProps = {
  achievement: Achievement;
  index: number;
};

const GlassRevealCard = ({ achievement, index }: GlassRevealCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0.2, filter: 'blur(16px)', scale: 0.92, y: 40 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.72 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.04 }}
      className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/35 bg-white/10 shadow-[0_25px_120px_-35px_rgba(15,23,42,0.8)] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.25),rgba(255,255,255,0.02)_45%,rgba(20,184,166,0.15))]" />

      <div className="relative z-10 grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
        <img
          src={achievement.image}
          alt={achievement.event}
          className="h-72 w-full object-cover md:h-full"
          loading="lazy"
        />

        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            <Trophy size={14} className="text-amber-400" />
            {achievement.year}
          </span>

          <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{achievement.title}</h3>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lagoon">{achievement.event}</p>
          <p className="text-sm text-slate-200">{achievement.location}</p>
          <p className="text-base leading-relaxed text-slate-100/95">{achievement.description}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default GlassRevealCard;
