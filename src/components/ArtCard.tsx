/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "motion/react";
import { Artwork } from "../constants";
import { Heart, X } from "lucide-react";

interface ArtCardProps {
  artwork: Artwork;
  onSwipe: (direction: 'left' | 'right') => void | Promise<void>;
  isTop: boolean;
}

export const ArtCard: React.FC<ArtCardProps> = ({ artwork, onSwipe, isTop }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  
  const likeOpacity = useTransform(x, [50, 150], [0, 1]);
  const dislikeOpacity = useTransform(x, [-50, -150], [0, 1]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe('right');
    } else if (info.offset.x < -100) {
      onSwipe('left');
    }
  };

  if (!isTop) {
    return (
      <div className="absolute inset-0 artwork-card scale-95 opacity-50 transition-all duration-500 origin-bottom">
        <img 
          src={artwork.imageUrl} 
          alt={artwork.title} 
          className="w-full h-[70%] object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute inset-0 artwork-card cursor-grab active:cursor-grabbing z-10"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative h-[70%] w-full">
        <img 
          src={artwork.imageUrl} 
          alt={artwork.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay badges */}
        <motion.div 
          style={{ opacity: likeOpacity }}
          className="absolute top-8 right-8 border-4 border-olive text-olive font-bold px-4 py-2 rounded-xl text-3xl rotate-12 z-20 pointer-events-none"
        >
          喜欢
        </motion.div>
        <motion.div 
          style={{ opacity: dislikeOpacity }}
          className="absolute top-8 left-8 border-4 border-red-500 text-red-500 font-bold px-4 py-2 rounded-xl text-3xl -rotate-12 z-20 pointer-events-none"
        >
          不喜欢
        </motion.div>
      </div>

      <div className="p-6 flex flex-col h-[30%] justify-between bg-white">
        <div>
          <h2 className="text-2xl font-bold leading-tight uppercase tracking-wide">{artwork.title}</h2>
          <p className="text-olive/80 font-medium italic mt-1">{artwork.artist}, {artwork.year}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-olive/40 px-2 py-1 border border-olive/20 rounded-full">
            {artwork.style}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
