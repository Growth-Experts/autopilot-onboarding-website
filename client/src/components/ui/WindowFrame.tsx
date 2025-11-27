import React from "react";

interface WindowFrameProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function WindowFrame({ children, className = "", title = "Autopilot Dashboard" }: WindowFrameProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-gray-200 shadow-2xl bg-white ${className}`}>
      <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
        </div>
        <div className="text-xs text-gray-400 font-medium font-mono uppercase tracking-wider">
          {title}
        </div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
}
