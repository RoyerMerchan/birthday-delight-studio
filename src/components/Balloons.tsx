import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
}

const COLORS = [
  "hsl(330 85% 60%)",
  "hsl(270 60% 50%)",
  "hsl(30 90% 60%)",
  "hsl(210 80% 55%)",
  "hsl(45 95% 65%)",
];

const Balloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 3,
      size: 28 + Math.random() * 20,
    }));
    setBalloons(initial);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-0"
          style={{ left: `${b.x}%` }}
          initial={{ y: "100vh", opacity: 0.8 }}
          animate={{ y: "-20vh", opacity: 0 }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: b.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3,
            ease: "easeOut",
          }}
        >
          <div
            className="rounded-full relative"
            style={{
              width: b.size,
              height: b.size * 1.2,
              background: `radial-gradient(circle at 35% 30%, ${b.color}ee, ${b.color}88)`,
              borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
            }}
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-8"
              style={{ background: b.color + "60" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Balloons;
