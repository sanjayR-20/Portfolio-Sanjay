'use client';

import { CalendarDays, Code2, ExternalLink, GitFork, Star } from 'lucide-react';
import SoftAurora from '@/components/ui/SoftAurora';
import type { GitHubRepo } from '@/lib/github';
import { featuredRepoNames, portfolio } from '@/lib/portfolio-data';

type ProjectsSectionProps = {
  repos: GitHubRepo[];
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date));

const buildFallbackRepos = (): GitHubRepo[] => {
  const now = new Date().toISOString();
  return featuredRepoNames.map((name, index) => ({
    id: -(index + 1),
    name,
    full_name: `${portfolio.githubUsername}/${name}`,
    description: 'Live GitHub data is unavailable right now. Open the repository directly.',
    html_url: `https://github.com/${portfolio.githubUsername}/${name}`,
    homepage: null,
    language: 'Repository',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: now,
    pushed_at: now,
    topics: []
  }));
};

const ProjectsSection = ({ repos }: ProjectsSectionProps) => {
  const hasLiveRepos = repos.length > 0;
  const visibleRepos = hasLiveRepos ? repos : buildFallbackRepos();

  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mb-10 sm:mb-14">
        <p className="mb-4 inline-flex rounded-full border border-slate-300/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
          Selected Work
        </p>
        <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Project Aurora</h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          A redesigned repository showcase powered by live GitHub data and an animated SoftAurora backdrop.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-300/30 bg-slate-950 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-75">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1.0}
            color1="#f7f7f7"
            color2="#e100ff"
            noiseFrequency={2.5}
            noiseAmplitude={1.0}
            bandHeight={0.5}
            bandSpread={1.0}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1.0}
            enableMouseInteraction={false}
            mouseInfluence={0.25}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.35),rgba(2,6,23,0.64),rgba(2,6,23,0.86))]" />

        <div className="relative z-10">
          {!hasLiveRepos ? (
            <p className="mb-4 inline-flex rounded-full border border-amber-200/30 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">
              Live GitHub API unavailable, showing fallback repositories.
            </p>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleRepos.map((repo) => {
              const summary =
                repo.description ?? 'Project details and implementation notes are available in the repository.';
              return (
                <article
                  key={repo.id}
                  className="group relative flex min-h-[250px] flex-col rounded-2xl border border-white/20 bg-slate-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-slate-900/72"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                      <Code2 size={12} />
                      {repo.language ?? 'Repository'}
                    </span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-slate-100 transition hover:border-cyan-300/50 hover:text-cyan-200"
                      aria-label={`Open ${repo.name} repository`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-white">{repo.name}</h3>

                  <p
                    className="mt-3 text-sm leading-relaxed text-slate-200/90"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {summary}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="grid grid-cols-3 gap-2 text-xs text-slate-200/95">
                      <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/20 bg-white/5 px-2 py-1.5">
                        <Star size={13} className="text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/20 bg-white/5 px-2 py-1.5">
                        <GitFork size={13} className="text-cyan-300" />
                        {repo.forks_count}
                      </span>
                      <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/20 bg-white/5 px-2 py-1.5">
                        <CalendarDays size={13} className="text-slate-300" />
                        {formatDate(repo.updated_at)}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
