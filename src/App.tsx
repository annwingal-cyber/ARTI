/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ARTWORKS, Artwork } from './constants';
import { ArtCard } from './components/ArtCard';
import ResultSection from './components/ResultSection';
import { analyzeArtTaste, TasteAnalysis } from './services/aiService';
import { Heart, X, Palette, Info } from 'lucide-react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedArtworks, setLikedArtworks] = useState<Artwork[]>([]);
  const [analysis, setAnalysis] = useState<TasteAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const currentArtwork = ARTWORKS[currentIndex];
  const nextArtwork = ARTWORKS[currentIndex + 1];

  const handleSwipe = async (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setLikedArtworks((prev) => [...prev, currentArtwork]);
    }

    if (currentIndex < ARTWORKS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Swiped all cards
      setIsAnalyzing(true);
      const finalLiked = direction === 'right' ? [...likedArtworks, currentArtwork] : likedArtworks;
      const result = await analyzeArtTaste(finalLiked);
      setAnalysis(result);
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setLikedArtworks([]);
    setAnalysis(null);
    setShowIntro(true);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8 max-w-lg mx-auto">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-4"
        >
          <div className="w-20 h-20 bg-olive text-white rounded-[24px] flex items-center justify-center mx-auto shadow-lg">
            <Palette size={40} />
          </div>
          <h1 className="text-7xl font-bold tracking-tighter italic font-display">ARTI</h1>
          <p className="text-xl text-ink/60 font-sans leading-loose max-w-xs mx-auto">
            看看你的ARTI是什么
          </p>
        </motion.div>

        <button 
          onClick={() => setShowIntro(false)}
          className="w-full bg-olive text-white py-5 px-10 rounded-full text-xl font-bold hover:bg-olive/90 transition-all active:scale-95 shadow-xl shadow-olive/20"
        >
          开始策展
        </button>

        <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
          <span>{ARTWORKS.length} 件杰作</span>
          <span>•</span>
          <span>AI 深度分析</span>
          <span>•</span>
          <span>分享艺术人格</span>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 text-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="text-olive"
        >
          <Palette size={64} />
        </motion.div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold italic">正在解析你的艺术灵魂...</h2>
          <p className="text-ink/60 uppercase text-xs tracking-widest">咨询艺术史专家中</p>
        </div>
      </div>
    );
  }

  if (analysis) {
    return (
      <div className="min-h-screen py-10 px-4 flex items-center justify-center">
        <ResultSection analysis={analysis} onReset={reset} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Info */}
      <div className="fixed top-8 left-0 right-0 px-8 flex justify-between items-center z-50">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-olive/40 font-sans">进度</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl font-bold italic">{currentIndex + 1}</span>
            <span className="text-xs text-ink/20 italic">/ {ARTWORKS.length}</span>
          </div>
        </div>
        <button 
          onClick={() => setShowIntro(true)}
          className="text-ink/40 hover:text-ink transition-colors"
        >
          <Info size={20} />
        </button>
      </div>

      {/* Cards Container */}
      <div className="relative w-full max-w-[380px] aspect-[3/4.5] mt-10">
        <AnimatePresence>
          {nextArtwork && (
            <ArtCard 
              key={nextArtwork.id}
              artwork={nextArtwork}
              onSwipe={() => {}}
              isTop={false}
            />
          )}
          <ArtCard 
            key={currentArtwork.id}
            artwork={currentArtwork}
            onSwipe={handleSwipe}
            isTop={true}
          />
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="mt-12 flex gap-12 items-center">
        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={() => handleSwipe('left')}
            className="swipe-button bg-white text-red-500 shadow-xl hover:bg-red-50 hover:scale-110 active:scale-95"
          >
            <X size={28} />
          </button>
          <span className="text-xs font-bold text-red-500/60 tracking-wider">不喜欢</span>
        </div>
        
        <div className="h-12 w-[1px] bg-ink/10" />
        
        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={() => handleSwipe('right')}
            className="swipe-button bg-olive text-white shadow-xl hover:scale-110 active:scale-95 shadow-olive/20"
          >
            <Heart size={28} />
          </button>
          <span className="text-xs font-bold text-olive/60 tracking-wider">喜欢</span>
        </div>
      </div>
      
      <p className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold text-ink/20 sm:hidden">
        向左滑动不喜欢，向右滑动喜欢
      </p>
    </div>
  );
}
