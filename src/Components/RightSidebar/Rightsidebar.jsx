import React from "react";

function Rightsidebar() {
  return (
    <div className="fixed bottom-0 w-30 right-0 flex flex-col items-center text-stone-400 z-30">
      {/* Email rotated vertically */}
      <a
        href="mailto:atharvasingh@gmail.com"
        className="mb-25 text-sm tracking-widest rotate-90 origin-bottom hover:text-blue-400 transition-colors"
      >
        atharvasingh@gmail.com
      </a>

      {/* Vertical line */}
      <div className="w-px ml-3 h-30 bg-stone-400"></div>
    </div>
  );
}

export default Rightsidebar;
