'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ProfileCard from '@/components/ui/ProfileCard';
import { portfolio } from '@/lib/portfolio-data';

type HeroSectionProps = {
  avatarUrl: string;
};

const HeroSection = ({ avatarUrl }: HeroSectionProps) => {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2.25rem] bg-slate-900 px-6 pb-14 pt-20 text-white sm:px-10 lg:px-14">
      <LightPillar
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={1.0}
        rotationSpeed={0.3}
        glowAmount={0.005}
        pillarWidth={3.0}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={0}
        interactive={false}
        mixBlendMode="normal"
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100"
          >
            Software Engineer Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            {portfolio.name}
            <span className="mt-2 block text-lagoon">{portfolio.role}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            {portfolio.heroCopy}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-2xl text-sm text-slate-200/90"
          >
            {portfolio.tagLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="cursor-target inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-lagoon hover:text-white"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#connect"
              className="cursor-target inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact
              <Mail size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-2"
          >
            <a
              href="https://github.com/sanjayR-20"
              target="_blank"
              rel="noreferrer"
              className="cursor-target rounded-full border border-white/35 bg-white/10 p-3 text-slate-100 transition hover:bg-white hover:text-slate-900"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sanjayr20606"
              target="_blank"
              rel="noreferrer"
              className="cursor-target rounded-full border border-white/35 bg-white/10 p-3 text-slate-100 transition hover:bg-white hover:text-slate-900"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sanjayr20606@gmail.com"
              className="cursor-target rounded-full border border-white/35 bg-white/10 p-3 text-slate-100 transition hover:bg-white hover:text-slate-900"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          <ProfileCard
            name={portfolio.name}
            role={portfolio.role}
            handle={portfolio.githubUsername}
            location={portfolio.location}
            avatarUrl={avatarUrl}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
