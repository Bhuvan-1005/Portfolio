"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  onChangeIndex?: (index: number) => void;
}

export default function TypingEffect({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  onChangeIndex,
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (isPaused) {
        setTimeout(() => setIsPaused(false), pauseDuration);
        return;
      }

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => {
            const next = (prev + 1) % texts.length;
            onChangeIndex?.(next);
            return next;
          });
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          setIsPaused(true);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentTextIndex,
    texts,
    speed,
    deleteSpeed,
    pauseDuration,
  ]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
