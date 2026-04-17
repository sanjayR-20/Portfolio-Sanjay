'use client';

import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import type { NavItem } from '@/lib/portfolio-data';

type PillNavProps = {
  items: NavItem[];
};

const PillNav = ({ items }: PillNavProps) => {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? '#home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(() => items.map((item) => item.href.replace('#', '')), [items]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-25% 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4">
      <nav className="rounded-full border border-white/55 bg-white/70 px-3 py-2 shadow-lg backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white"
          >
            Sanjay
          </a>

          <ul className="hidden items-center gap-2 lg:flex">
            {items.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={clsx(
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-white hover:text-slate-900'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white/75 text-slate-800 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 flex flex-col gap-1 overflow-hidden px-1 pb-1 lg:hidden"
            >
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      'block rounded-2xl px-4 py-3 text-sm font-medium',
                      activeHref === item.href
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100/80 text-slate-700 hover:bg-white'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default PillNav;
