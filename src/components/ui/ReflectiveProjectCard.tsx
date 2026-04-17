'use client';

import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, GitFork, Star } from 'lucide-react';
import type { GitHubRepo } from '@/lib/github';

type ReflectiveProjectCardProps = {
  repo: GitHubRepo;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date));

const ReflectiveProjectCard = ({ repo }: ReflectiveProjectCardProps) => {
  return (
    <motion.article
      className="group relative h-full rounded-[1.75rem] bg-transparent p-4 sm:p-5"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/10 via-transparent to-sky-300/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/20 bg-white/5">
          <img
            src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
            alt={`${repo.name} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            {repo.language ?? 'Repository'}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{repo.name}</h3>

        <p
          className="min-h-[3.1rem] text-sm leading-relaxed text-slate-200/90"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {repo.description ?? 'Project details and implementation notes are available in the repository.'}
        </p>

        <div className="mt-auto space-y-3">
          <div className="grid grid-cols-3 gap-2 text-xs text-slate-300/90">
            <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 py-1.5">
              <Star size={13} className="text-amber-500" />
              {repo.stargazers_count}
            </span>
            <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 py-1.5">
              <GitFork size={13} className="text-cyan-300" />
              {repo.forks_count}
            </span>
            <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 py-1.5">
              <CalendarDays size={13} className="text-slate-400" />
              {formatDate(repo.updated_at)}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              View Repository
              <ExternalLink size={16} />
            </a>

            {repo.homepage ? (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3.5 py-2 text-sm font-medium text-white hover:bg-white/20"
              >
                Live Demo
                <ExternalLink size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ReflectiveProjectCard;
