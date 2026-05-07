import React from 'react';
import { motion } from 'motion/react';

interface ArchetypeIllustrationProps {
  type: string;
}

const CharacterBase: React.FC<{ color: string; children?: React.ReactNode }> = ({ color, children }) => (
  <svg width="160" height="200" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <path d="M40 180C40 160 50 140 80 140C110 140 120 160 120 180V200H40V180Z" fill={color} fillOpacity="0.8" />
    {/* Tunic/Shirt */}
    <rect x="50" y="80" width="60" height="70" rx="10" fill={color} />
    {/* Head */}
    <circle cx="80" cy="50" r="30" fill="#FFE0BD" />
    {/* Hair or Hat placeholders could go here */}
    {children}
  </svg>
);

export const ArchetypeIllustration: React.FC<ArchetypeIllustrationProps> = ({ type }) => {
  const getIllustration = () => {
    switch (type) {
      case 'romantic':
        return (
          <div className="relative group">
            <CharacterBase color="#76B852">
              {/* Hair */}
              <path d="M50 50C50 20 110 20 110 50" stroke="#4A7033" strokeWidth="8" strokeLinecap="round" />
              {/* Flower Prop */}
              <motion.g animate={{ rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <circle cx="120" cy="100" r="8" fill="#FFB7C5" />
                <path d="M120 108V130" stroke="#4A7033" strokeWidth="2" />
              </motion.g>
            </CharacterBase>
            <div className="absolute -bottom-2 w-full text-center text-[10px] font-mono opacity-40 uppercase tracking-tighter">ROMANTIC_IDEALIST</div>
          </div>
        );
      case 'classical':
        return (
          <div className="relative">
            <CharacterBase color="#8E44AD">
              {/* Crown */}
              <path d="M65 25L70 35L80 25L90 35L95 25V40H65V25Z" fill="#F1C40F" />
              {/* Cape */}
              <path d="M40 85L30 150L80 160L130 150L120 85H40Z" fill="#7D3C98" fillOpacity="0.5" />
              {/* Scroll */}
              <rect x="110" y="110" width="30" height="10" rx="2" fill="#FDFEFE" stroke="#D5D8DC" />
            </CharacterBase>
            <div className="absolute -bottom-2 w-full text-center text-[10px] font-mono opacity-40 uppercase tracking-tighter">CLASSIC_ELITE</div>
          </div>
        );
      case 'weird':
        return (
          <div className="relative">
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <CharacterBase color="#E74C3C">
                {/* Floating Head part */}
                <circle cx="80" cy="40" r="10" fill="#E67E22" />
                {/* Surreal Mask */}
                <rect x="70" y="45" width="20" height="20" rx="2" fill="#2C3E50" />
                {/* Abstract shape */}
                <motion.path 
                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity }}
                  d="M130 50L145 70L125 75Z" fill="#F1C40F" 
                />
              </CharacterBase>
            </motion.div>
            <div className="absolute -bottom-2 w-full text-center text-[10px] font-mono opacity-40 uppercase tracking-tighter">SURREAL_ANOMALY</div>
          </div>
        );
      case 'lonely':
        return (
          <div className="relative">
            <CharacterBase color="#95A5A6">
              {/* Fedora Hat */}
              <rect x="55" y="25" width="50" height="8" rx="2" fill="#34495E" />
              <rect x="65" y="15" width="30" height="12" rx="2" fill="#34495E" />
              {/* Coat collar */}
              <path d="M60 80L80 100L100 80" stroke="#7F8C8D" strokeWidth="4" />
            </CharacterBase>
            <div className="absolute -bottom-2 w-full text-center text-[10px] font-mono opacity-40 uppercase tracking-tighter">URBAN_SOLITUDE</div>
          </div>
        );
      case 'over-liked':
        return (
          <div className="relative">
            <CharacterBase color="#F39C12">
              {/* Multiple Glasses/Eyes style */}
              <circle cx="70" cy="50" r="5" stroke="black" strokeWidth="1" />
              <circle cx="90" cy="50" r="5" stroke="black" strokeWidth="1" />
              <circle cx="80" cy="40" r="5" stroke="black" strokeWidth="1" opacity="0.3" />
              {/* Stack of frames in arms */}
              <rect x="40" y="100" width="30" height="40" stroke="#7E5109" strokeWidth="2" fill="white" />
              <rect x="50" y="110" width="30" height="40" stroke="#7E5109" strokeWidth="2" fill="white" opacity="0.7" />
              <rect x="60" y="120" width="30" height="40" stroke="#7E5109" strokeWidth="2" fill="white" opacity="0.5" />
            </CharacterBase>
            <div className="absolute -bottom-2 w-full text-center text-[10px] font-mono opacity-40 uppercase tracking-tighter">COLLECTOR_MANIA</div>
          </div>
        );
      default:
        return (
          <div className="relative contrast-50 grayscale opacity-40">
            <CharacterBase color="#BDC3C7">
              {/* Crossed Arms */}
              <path d="M60 110H100M60 120H100" stroke="#7F8C8D" strokeWidth="4" strokeLinecap="round" />
            </CharacterBase>
            <div className="absolute -bottom-2 w-full text-center text-[10px] font-mono opacity-40 uppercase tracking-tighter">VOID_NULL</div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="my-4 flex justify-center h-52 items-end"
    >
      {getIllustration()}
    </motion.div>
  );
};

