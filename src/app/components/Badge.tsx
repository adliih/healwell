import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute top-2 right-2 flex items-center justify-center min-w-6 min-h-6 text-center align-middle py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
      {children}
    </span>
  );
}
