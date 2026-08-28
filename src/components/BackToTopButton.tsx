"use client";

import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="border-glass-border bg-glass-pill hover:bg-glass focus-visible:ring-ring inline-flex size-9 items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition-colors hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
      <ArrowUp
        className="size-4"
        aria-hidden="true"
      />
    </button>
  );
};

export default BackToTopButton;
