import React, { useState, useEffect, useRef } from "react";

const ResumeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={handleButtonClick}
        className="rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400 via-sky-500 to-orange-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
      >
        Open Resume
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <div className="py-1">
            <a
              href="https://drive.google.com/file/d/1Mw55fw1FKCpKJJaBtVH-JZP8GFM9X-Sx/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDropdown;
