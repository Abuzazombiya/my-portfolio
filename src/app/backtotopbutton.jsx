import { CgArrowUp } from "react-icons/cg"; 
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 focus:outline-none"
      >
        <CgArrowUp />
      </button>
    )
  );
};

export default BackToTopButton;
