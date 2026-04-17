import { Sparkles } from 'lucide-react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
        <Sparkles size={14} className="text-lagoon" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
