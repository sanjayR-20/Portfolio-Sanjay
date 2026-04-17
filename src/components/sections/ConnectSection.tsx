'use client';

import { useMemo, useState } from 'react';
import {
  Disc3,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Pin,
  Send,
  Twitter,
  UserRound
} from 'lucide-react';
import { linkedInSnapshot, portfolio, socials } from '@/lib/portfolio-data';
import type { GitHubProfile } from '@/lib/github';

type ConnectSectionProps = {
  githubProfile: GitHubProfile | null;
  githubReadmeExcerpt: string;
};

const iconByKey = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  x: Twitter,
  pinterest: Pin,
  discord: Disc3,
  mail: Mail
};

const ConnectSection = ({ githubProfile, githubReadmeExcerpt }: ConnectSectionProps) => {
  const [subject, setSubject] = useState('Project Collaboration');
  const [message, setMessage] = useState('Hi Sanjay, I would like to discuss a potential collaboration.');

  const mailHref = useMemo(() => {
    const params = new URLSearchParams({
      subject,
      body: message
    });

    return `mailto:${portfolio.email}?${params.toString()}`;
  }, [subject, message]);

  return (
    <section id="connect" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Connect & Reach Out</h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Explore profile previews and send a direct, prefilled email right from the portfolio.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.9rem] border border-white/65 bg-white/75 p-5 shadow-lg backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 font-medium">linkedin.com/in/sanjayr20606</span>
          </div>

          <div className="max-h-80 space-y-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-sky-600">
                <Linkedin size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900">{linkedInSnapshot.name}</h3>
                <p className="text-sm text-slate-600">{linkedInSnapshot.headline}</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700">{linkedInSnapshot.intro}</p>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Profile</span>
                <span className="font-semibold">Active</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Bio</span>
                <span className="font-semibold">Available</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Followers</span>
                <span className="font-semibold">View Live</span>
              </li>
            </ul>

            <p className="text-xs text-slate-500">{linkedInSnapshot.note}</p>
          </div>

          <a
            href={portfolio.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="cursor-target mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Open LinkedIn
            <Send size={15} />
          </a>
        </article>

        <article className="rounded-[1.9rem] border border-white/65 bg-white/75 p-5 shadow-lg backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 font-medium">github.com/{portfolio.githubUsername}</span>
          </div>

          <div className="max-h-80 space-y-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <img
                src={githubProfile?.avatar_url ?? 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'}
                alt="GitHub avatar"
                className="h-12 w-12 rounded-2xl border border-slate-200 object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  {githubProfile?.login ?? portfolio.githubUsername}
                </h3>
                <p className="flex items-center gap-1 text-sm text-slate-600">
                  <MapPin size={14} />
                  {githubProfile?.location ?? portfolio.location}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-slate-600">
              <div className="rounded-xl bg-slate-50 p-2">
                <p className="text-base text-slate-900">{githubProfile?.followers ?? '--'}</p>
                <p>Followers</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-2">
                <p className="text-base text-slate-900">{githubProfile?.following ?? '--'}</p>
                <p>Following</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-2">
                <p className="text-base text-slate-900">{githubProfile?.public_repos ?? '--'}</p>
                <p>Repos</p>
              </div>
            </div>

            <pre className="whitespace-pre-wrap rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
              {githubReadmeExcerpt}
            </pre>

            <img
              src={`https://github-readme-stats.vercel.app/api?username=${portfolio.githubUsername}&show_icons=true&hide_border=true&theme=transparent`}
              alt="GitHub stats"
              className="w-full rounded-xl border border-slate-200 bg-white"
              loading="lazy"
            />
          </div>

          <a
            href={`https://github.com/${portfolio.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="cursor-target mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Open GitHub
            <Send size={15} />
          </a>
        </article>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[1.9rem] border border-white/65 bg-white/80 p-5 shadow-lg backdrop-blur-xl">
          <h3 className="font-display text-2xl font-semibold text-slate-900">Compose Mail</h3>
          <p className="mt-2 text-sm text-slate-600">Send a prefilled message to {portfolio.email}.</p>

          <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Subject</label>
          <input
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-lagoon"
            placeholder="Project Collaboration"
          />

          <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Message</label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            className="mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-lagoon"
          />

          <a
            href={mailHref}
            className="cursor-target mt-4 inline-flex items-center gap-2 rounded-full bg-lagoon px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-600"
          >
            <Mail size={16} />
            Launch Email Draft
          </a>
        </article>

        <article className="rounded-[1.9rem] border border-white/65 bg-white/80 p-5 shadow-lg backdrop-blur-xl">
          <h3 className="font-display text-2xl font-semibold text-slate-900">Socials</h3>
          <p className="mt-2 text-sm text-slate-600">Minimal quick-access links.</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {socials
              .filter((social) => social.key !== 'mail')
              .map((social) => {
                const Icon = iconByKey[social.key];

                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-target flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-lagoon hover:text-lagoon"
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                );
              })}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-300 bg-white p-3 text-sm text-slate-600">
            <p className="flex items-center gap-2 font-medium text-slate-900">
              <UserRound size={16} className="text-lagoon" />
              Preferred response channel: Email
            </p>
            <p className="mt-1">I usually reply with project scope, architecture suggestions, and implementation steps.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ConnectSection;
