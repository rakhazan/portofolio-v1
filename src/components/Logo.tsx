import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * RZ Brutalist Logo
 * A hybrid design joining a monolithic block with abstracted geometric letterforms.
 */
export const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  const width = size * 1.5;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="140" height="100" fill="currentColor" />
      <g fill="black">
        {/* R - Abstract blocky */}
        <rect x="15" y="20" width="15" height="60" />
        <rect x="30" y="20" width="25" height="15" />
        <rect x="30" y="45" width="25" height="15" />
        <rect x="45" y="30" width="10" height="20" />
        <path d="M40 60 L55 81 H35 L25 60 Z" />

        {/* Z - Structural */}
        <rect x="68" y="20" width="60" height="15" />
        <rect x="68" y="65" width="60" height="15" />
        <path d="M128 35 L83 65 H68 L113 35 Z" />
      </g>
    </svg>
  );
};
