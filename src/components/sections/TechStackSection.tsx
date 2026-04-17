'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import LogoLoop from '@/components/ui/LogoLoop';
import { techStack } from '@/lib/portfolio-data';

const TechStackSection = () => {
  return (
    <section id="stack" className="scroll-mt-28 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Full-stack toolkit"
        description="Core stack grouped by language depth, frontend execution, and systems-level tooling."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-3xl border border-white/65 bg-white/75 p-6 backdrop-blur-xl">
          <h3 className="font-display text-xl font-semibold text-slate-900">Languages</h3>
          <p className="mt-3 text-sm text-slate-600">Java, Python, JavaScript</p>
        </article>

        <article className="rounded-3xl border border-white/65 bg-white/75 p-6 backdrop-blur-xl">
          <h3 className="font-display text-xl font-semibold text-slate-900">Frontend Development</h3>
          <p className="mt-3 text-sm text-slate-600">React.js, HTML5, CSS3, Tailwind CSS, Flutter</p>
        </article>

        <article className="rounded-3xl border border-white/65 bg-white/75 p-6 backdrop-blur-xl">
          <h3 className="font-display text-xl font-semibold text-slate-900">Systems & Tools</h3>
          <p className="mt-3 text-sm text-slate-600">Linux Architecture, Git, Node.js, MySQL</p>
        </article>
      </div>

      <div className="mt-8">
        <LogoLoop tech={techStack} />
      </div>
    </section>
  );
};

export default TechStackSection;
