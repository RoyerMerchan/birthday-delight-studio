import { motion } from "framer-motion";

interface EnvelopeProps {
  onClick: () => void;
}

const Envelope = ({ onClick }: EnvelopeProps) => {
  return (
    <motion.div
      className="cursor-pointer animate-breathe"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-72 h-48 sm:w-80 sm:h-52 envelope-shadow rounded-2xl">
        {/* Envelope body */}
        <div className="absolute inset-0 bg-gradient-to-br from-festive-pink via-festive-orange to-festive-yellow rounded-2xl overflow-hidden">
          {/* Envelope flap */}
          <div
            className="absolute top-0 left-0 right-0 h-1/2 origin-top"
            style={{
              background: "linear-gradient(135deg, hsl(330 85% 55%), hsl(30 90% 55%))",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />
          {/* Heart seal */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background/30 backdrop-blur-sm">
              <span className="text-2xl">💌</span>
            </div>
          </div>
          {/* Bottom fold line */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-festive-pink/20 to-transparent rounded-b-2xl" />
        </div>
      </div>
      <motion.p
        className="text-center mt-6 text-foreground/70 text-sm font-body tracking-wide"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Toca para abrir ✨
      </motion.p>
    </motion.div>
  );
};

export default Envelope;
