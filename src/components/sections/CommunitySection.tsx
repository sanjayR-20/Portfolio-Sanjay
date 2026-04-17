import { Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { communities } from '@/lib/portfolio-data';

const CommunitySection = () => {
  return (
    <section id="community" className="scroll-mt-28 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Community"
        title="Beyond code"
        description="Leadership and startup collaboration roles I actively contribute to."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {communities.map((community) => (
          <article
            key={community.title}
            className="rounded-3xl border border-white/65 bg-white/75 p-6 shadow-lg backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-2xl bg-slate-900/90 p-2 text-white">
              <Users size={18} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-slate-900">{community.title}</h3>
            <p className="mt-1 text-sm font-medium text-lagoon">{community.organization}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{community.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {community.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-300 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
