'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

type ProfileCardProps = {
  name: string;
  role: string;
  handle: string;
  location: string;
  avatarUrl: string;
};

const ProfileCard = ({ name, role, handle, location, avatarUrl }: ProfileCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const rotateStyle = useMemo(
    () => ({
      rotateX: tilt.x,
      rotateY: tilt.y
    }),
    [tilt]
  );

  return (
    <motion.article
      className="group relative w-full max-w-sm rounded-[2rem] border border-white/30 bg-white/15 p-5 shadow-glow backdrop-blur-2xl"
      style={rotateStyle}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width;
        const py = (event.clientY - bounds.top) / bounds.height;

        setTilt({
          x: (0.5 - py) * 10,
          y: (px - 0.5) * 10
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/30 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <img
            src={avatarUrl}
            alt={name}
            className="h-16 w-16 rounded-2xl border border-white/70 object-cover shadow-md"
            loading="lazy"
          />
          <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-50">
            Available
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-slate-100/90">{role}</p>
          <p className="mt-2 text-sm text-slate-200/90">@{handle}</p>
        </div>

        <div className="space-y-2 text-sm text-slate-100/90">
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-lagoon" />
            {location}
          </p>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-lagoon hover:text-white"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProfileCard;
