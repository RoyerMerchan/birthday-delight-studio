import { useEffect, useState, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const COLORS = ["#f472b6", "#fbbf24", "#a78bfa", "#60a5fa", "#fb923c"];

const SparkleTrail = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const addSparkle = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    const sparkle: Sparkle = {
      id,
      x,
      y,
      size: 4 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    setSparkles((prev) => [...prev.slice(-20), sparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    let throttle = 0;
    const handleMove = (e: TouchEvent | MouseEvent) => {
      const now = Date.now();
      if (now - throttle < 50) return;
      throttle = now;
      const point = "touches" in e ? e.touches[0] : e;
      addSparkle(point.clientX, point.clientY);
    };

    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [addSparkle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle rounded-full"
          style={{
            left: s.x - s.size / 2,
            top: s.y - s.size / 2,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size}px ${s.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleTrail;
