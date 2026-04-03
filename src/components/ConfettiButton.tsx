import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const ConfettiButton = () => {
  const launchConfetti = () => {
    const colors = ["#e040a0", "#f59e0b", "#8b5cf6", "#3b82f6", "#f472b6", "#fbbf24"];

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7, x: 0.5 },
      colors,
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });
    }, 200);
  };

  return (
    <motion.button
      onClick={launchConfetti}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass flex items-center justify-center text-2xl glow-pink cursor-pointer active:scale-90 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      aria-label="Lanzar confeti"
    >
      🎉
    </motion.button>
  );
};

export default ConfettiButton;
