import { motion } from "framer-motion";

const BirthdayCake = () => {
  const candles = [0, 1, 2, 3, 4];

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ y: 80, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
    >
      {/* Candles */}
      <div className="flex gap-4 mb-1 relative z-10">
        {candles.map((i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Flame */}
            <motion.div
              className="w-3 h-4 rounded-full bg-gradient-to-t from-festive-orange via-festive-yellow to-foreground"
              animate={{
                scaleY: [1, 0.85, 1],
                scaleX: [1, 1.1, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{ duration: 0.6 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
              style={{
                filter: "drop-shadow(0 0 6px hsl(45 95% 65%)) drop-shadow(0 0 12px hsl(30 90% 60%))",
              }}
            />
            {/* Stick */}
            <div
              className="w-1.5 h-8 rounded-b-full"
              style={{
                background: `linear-gradient(to bottom, hsl(330 85% 60%), hsl(270 60% 50%))`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Cake layers */}
      <div className="flex flex-col items-center">
        {/* Top layer */}
        <div className="w-36 h-10 rounded-t-xl bg-gradient-to-r from-festive-pink via-festive-purple to-festive-pink relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-3 flex justify-around">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-3 rounded-b-full bg-festive-yellow/80"
              />
            ))}
          </div>
        </div>
        {/* Middle layer */}
        <div className="w-44 h-10 bg-gradient-to-r from-festive-orange via-festive-pink to-festive-orange relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-3 flex justify-around">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-3 rounded-b-full bg-festive-blue/60"
              />
            ))}
          </div>
        </div>
        {/* Bottom layer */}
        <div className="w-52 h-12 rounded-b-2xl bg-gradient-to-r from-festive-purple via-festive-blue to-festive-purple relative overflow-hidden">
          <div className="absolute top-1 left-0 right-0 h-2 bg-festive-yellow/30" />
        </div>
        {/* Plate */}
        <div className="w-60 h-3 rounded-b-full bg-foreground/10 mt-0.5" />
      </div>
    </motion.div>
  );
};

export default BirthdayCake;
