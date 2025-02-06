import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AudioVisualizer = () => {
  const [bars] = useState(20);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const generateHeights = () => {
      const newHeights = Array.from({ length: bars }, () =>
        Math.random() * 100
      );
      setHeights(newHeights);
      requestAnimationFrame(generateHeights);
    };

    generateHeights();
  }, [bars]);

  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {heights.map((height, index) => (
        <motion.div
          key={index}
          className="w-1 bg-primary rounded-full"
          animate={{ height: `${height}%` }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
