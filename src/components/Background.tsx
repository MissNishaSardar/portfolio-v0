const Background = ({ className = "" }: { className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Aurora blobs — soft, blurred, dark-depth */}
      <div className="absolute -top-32 -left-40 h-[42rem] w-[52rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_65%)] blur-[70px] dark:bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.16),transparent_65%)]" />
      <div className="absolute top-[18%] -right-48 h-[38rem] w-[46rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_65%)] blur-[70px] dark:bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.14),transparent_65%)]" />
      <div className="absolute bottom-[-12%] left-[28%] h-[34rem] w-[44rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.13),transparent_65%)] blur-[70px] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_65%)]" />

      {/* Vignette to deepen edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.18)_85%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_85%)]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light dark:opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Background;
