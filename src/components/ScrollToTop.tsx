import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    let animationFrameId: number | null;

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    const throttledHandleScroll = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          handleScroll();
          animationFrameId = null;
        });
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (typeof animationFrameId === "number") {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth" // Tự động cuộn mượt
    });
  };

  return (
      <>
        {showTopBtn && (
            <Button
                onClick={goToTop}
                className="fixed bottom-4 right-4 opacity-90 shadow-md"
                size="icon"
            >
              <ArrowUpToLine className="h-4 w-4" />
            </Button>
        )}
      </>
  );
};
