import React from "react";

const TabUtil = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "border-cyan-300/40 bg-cyan-300/15 text-white"
    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white";

  return (
    <button
      onClick={selectTab}
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabUtil;
