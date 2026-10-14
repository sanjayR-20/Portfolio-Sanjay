'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const SplashCursor = dynamic(() => import('./SplashCursor'), { ssr: false });

/**
 * The fluid cursor is decorative, so it should never compete with the first
 * render of the portfolio. Loading it during idle time keeps the hero and
 * navigation immediately responsive while preserving the effect afterwards.
 */
const DeferredSplashCursor = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const enable = () => setIsReady(true);
    const idleCallback = window.requestIdleCallback?.(enable, { timeout: 1500 });
    const timeoutId = idleCallback === undefined ? window.setTimeout(enable, 300) : undefined;

    return () => {
      if (idleCallback !== undefined) {
        window.cancelIdleCallback?.(idleCallback);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!isReady) return null;

  return (
    <SplashCursor
      SIM_RESOLUTION={64}
      DYE_RESOLUTION={512}
      PRESSURE_ITERATIONS={12}
      RAINBOW_MODE={false}
      COLOR="#67e8f9"
      COLOR_INTENSITY={0.08}
      OVERLAY_OPACITY={0.14}
      SPLAT_FORCE={3200}
      SPLAT_RADIUS={0.14}
      DENSITY_DISSIPATION={4.5}
      VELOCITY_DISSIPATION={2.7}
      COLOR_UPDATE_SPEED={6}
    />
  );
};

export default DeferredSplashCursor;
