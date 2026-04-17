'use client';

import {
  SiCss,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiOpenjdk,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import type { TechItem } from '@/lib/portfolio-data';

type LogoLoopProps = {
  tech: TechItem[];
};

const iconMap: Record<TechItem['key'], IconType> = {
  java: SiOpenjdk,
  python: SiPython,
  javascript: SiJavascript,
  react: SiReact,
  html5: SiHtml5,
  css3: SiCss,
  tailwindcss: SiTailwindcss,
  flutter: SiFlutter,
  linux: SiLinux,
  git: SiGit,
  nodedotjs: SiNodedotjs,
  mysql: SiMysql
};

const LogoLoop = ({ tech }: LogoLoopProps) => {
  const items = [...tech, ...tech];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/45 bg-white/65 p-3 shadow-lg backdrop-blur-xl">
      <ul className="flex min-w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {items.map((item, index) => {
          const Icon = iconMap[item.key];

          return (
            <li key={`${item.name}-${index}`} className="cursor-target">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 transition hover:-translate-y-0.5 hover:border-lagoon/45 hover:bg-white"
              >
                <Icon className="text-lg text-slate-700 transition group-hover:text-lagoon" />
                <span className="text-sm font-medium text-slate-700">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LogoLoop;
