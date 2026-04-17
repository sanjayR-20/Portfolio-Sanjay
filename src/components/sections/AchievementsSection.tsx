'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { MapPin, Trophy } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import LightRays from '@/components/ui/LightRays';
import { achievements } from '@/lib/portfolio-data';

const achievementsInsights = [
  {
    focus: 'High-pressure product execution',
    outcome: 'Took ownership from concept to delivery in a 24-hour national sprint.'
  },
  {
    focus: 'App-first problem solving',
    outcome: 'Built a clear and usable mobile workflow that won the jury decision.'
  },
  {
    focus: 'Frontend quality and polish',
    outcome: 'Presented production-minded UX and implementation discipline.'
  },
  {
    focus: 'Technical depth and recall',
    outcome: 'Converted strong fundamentals into a top-ranked quiz finish.'
  },
  {
    focus: 'Editorial and execution leadership',
    outcome: 'Managed content publishing pipeline from planning to final release.'
  }
];

const AchievementsSection = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineHeight = useMemo(() => `${Math.max(achievements.length * 110, 420)}vh`, []);

  useEffect(() => {
    const section = timelineRef.current;
    if (!section) return;

    let ticking = false;

    const updateActiveAchievement = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const totalScrollable = section.offsetHeight - window.innerHeight;
      const consumed = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const progress = totalScrollable > 0 ? consumed / totalScrollable : 0;
      const nextIndex = Math.min(achievements.length - 1, Math.floor(progress * achievements.length));
      setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveAchievement();
        ticking = false;
      });
    };

    updateActiveAchievement();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveAchievement);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveAchievement);
    };
  }, []);

  return (
    <section id="achievements" className="scroll-mt-28 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones That Matter"
        description="Scroll to move through each highlight. Every stop captures impact, context, and execution quality."
      />

      <div ref={timelineRef} className="relative" style={{ height: timelineHeight }}>
        <div className="sticky top-[7vh] h-[86vh]">
          <div className="grid h-full gap-5 lg:grid-cols-[0.44fr_1fr]">
            <div className="rounded-[1.6rem] border border-white/20 bg-slate-800/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="relative h-full overflow-hidden">
                {achievements.map((achievement, index) => {
                  const isActive = index === activeIndex;
                  const insight = achievementsInsights[index];

                  return (
                    <article
                      key={`${achievement.event}-content`}
                      className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ${
                        isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
                      }`}
                    >
                      <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                          <Trophy size={14} className="text-amber-400" />
                          {achievement.year}
                        </span>

                        <h3 className="font-display text-2xl font-semibold leading-tight text-slate-100 sm:text-[1.95rem]">
                          {achievement.title}
                        </h3>

                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lagoon">
                          {achievement.event}
                        </p>

                        <div className="h-px w-full bg-slate-500/70" />

                        <p className="text-sm leading-relaxed text-slate-300">{achievement.description}</p>
                      </div>

                      <div className="space-y-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
                          <MapPin size={14} className="text-cyan-300" />
                          {achievement.location}
                        </p>
                        <p className="text-sm font-medium text-slate-100">{insight.focus}</p>
                        <p className="text-sm leading-relaxed text-slate-300">{insight.outcome}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/20 bg-slate-950">
              <div className="pointer-events-none absolute inset-0">
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#7dd3fc"
                  raysSpeed={1.2}
                  lightSpread={0.9}
                  rayLength={1.3}
                  followMouse={true}
                  mouseInfluence={0.08}
                  noiseAmount={0.07}
                  distortion={0.04}
                  className="h-full w-full"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_78%_80%,rgba(45,212,191,0.2),transparent_36%)]" />

              <div className="relative h-full">
                {achievements.map((achievement, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <figure
                      key={`${achievement.event}-media`}
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
                      }`}
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.event}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/25 bg-slate-900/60 px-4 py-3 backdrop-blur-md">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                          Milestone {index + 1} of {achievements.length}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">{achievement.event}</p>
                      </figcaption>
                    </figure>
                  );
                })}

                <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2">
                  {achievements.map((achievement, index) => (
                    <span
                      key={`${achievement.event}-dot`}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]' : 'bg-white/35'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
