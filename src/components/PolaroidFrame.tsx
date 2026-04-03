import { motion } from "framer-motion";
import { useState } from "react";

type PolaroidFrameProps = {
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
};

const PolaroidFrame = ({
  imageSrc,
  imageAlt = "Foto en polaroid",
  caption = "...❤️‍🩹​✨",
}: PolaroidFrameProps) => {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(imageSrc) && !imageError;

  return (
    <motion.div
      className="polaroid-shadow rounded-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
      initial={{ opacity: 0, y: 30, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="bg-foreground p-3 pb-14 rounded-lg w-56 sm:w-64">
        {/* Photo placeholder */}
        <div className="w-full aspect-square bg-muted rounded-sm flex items-center justify-center relative overflow-hidden">
          {showImage ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-center text-muted-foreground p-4">
              <span className="text-3xl block mb-2">📷</span>
              <p className="text-xs font-body">Tu foto aquí</p>
            </div>
          )}
        </div>
        {/* Caption area */}
        <p className="text-center mt-3 font-handwritten text-background/80 text-lg">
          {caption}
        </p>
      </div>
    </motion.div>
  );
};

export default PolaroidFrame;
