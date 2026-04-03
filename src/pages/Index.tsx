import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "@/components/Envelope";
import BirthdayCake from "@/components/BirthdayCake";
import PolaroidFrame from "@/components/PolaroidFrame";
import ConfettiButton from "@/components/ConfettiButton";
import Balloons from "@/components/Balloons";
import SparkleTrail from "@/components/SparkleTrail";
import confetti from "canvas-confetti";

const Index = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    // Fire confetti on open
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#e040a0", "#f59e0b", "#8b5cf6", "#3b82f6", "#f472b6"],
      });
    }, 400);
  };

  return (
    <div className="min-h-screen mesh-gradient relative overflow-hidden">
      <SparkleTrail />
      <Balloons />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="envelope"
              className="flex items-center justify-center min-h-[60vh]"
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
            >
              <Envelope onClick={handleOpen} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              className="flex flex-col items-center gap-8 w-full max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {/* Cake */}
              <BirthdayCake />

              {/* Title */}
              <motion.h1
                className="text-5xl sm:text-7xl font-display font-black text-gradient-festive text-center leading-tight"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
              >
                ¡Felices 22!
              </motion.h1>

              {/* Polaroid */}
              <PolaroidFrame />

              {/* Message */}
              <motion.div
                className="glass rounded-3xl p-6 sm:p-8 max-w-sm mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="font-handwritten text-xl sm:text-2xl text-foreground leading-relaxed text-center">
                  Hoy celebramos la magia que traes al mundo. 
                  Que este nuevo año de vida esté lleno de sueños cumplidos, 
                  risas infinitas y momentos que te hagan el corazón grande. 
                  ¡Eres increíble y mereces todo lo bonito! 🎂💖
                </p>
              </motion.div>

              {/* Spacer */}
              <div className="h-16" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {opened && <ConfettiButton />}
    </div>
  );
};

export default Index;
