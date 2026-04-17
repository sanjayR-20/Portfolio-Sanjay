type LaserFlowProps = {
  className?: string;
};

const LaserFlow = ({ className = '' }: LaserFlowProps) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="laser-grid" />
      <div className="laser-glow laser-glow-a" />
      <div className="laser-glow laser-glow-b" />
      <div className="laser-scan" />
    </div>
  );
};

export default LaserFlow;
