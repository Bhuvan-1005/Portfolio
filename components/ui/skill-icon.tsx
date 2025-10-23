import React from "react";

interface SkillIconProps {
  emoji?: string; // a single-character emoji or short string
  size?: number; // px
}

export default function SkillIcon({ emoji = "💻", size = 40 }: SkillIconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      id="skill-icon"
      className="flex items-center justify-center bg-black rounded-md"
      aria-hidden
    >
      <span className="text-white text-xl" style={{ lineHeight: 1 }}>
        {emoji}
      </span>
    </div>
  );
}
