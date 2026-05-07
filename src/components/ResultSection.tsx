/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TasteAnalysis } from "../services/aiService";
import { Share2, RotateCcw, Paintbrush, Sparkles } from "lucide-react";

interface ResultSectionProps {
  analysis: TasteAnalysis;
  onReset: () => void;
}

export default function ResultSection({ analysis, onReset }: ResultSectionProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '我的艺术品位分析',
          text: `我发现了我的艺术人格：${analysis.personaTitle}！快来 ARTI 看看你的吧。`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Sharing failed', err);
      }
    } else {
      alert('您的浏览器不支持原生分享。请复制链接分享！');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-4 flex flex-col items-center text-center space-y-8"
    >
      <header className="space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-olive/60">审美档案</span>
        <h1 className="text-5xl md:text-6xl font-bold italic text-ink">{analysis.personaTitle}</h1>
      </header>

      <div className="bg-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-5">
           <Sparkles size={200} />
        </div>
        
        <p className="text-xl md:text-2xl leading-relaxed text-ink/80 italic font-light serif max-w-lg mx-auto">
          "{analysis.description}"
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-olive">
              <Paintbrush size={16} /> 推荐风格
            </h3>
            <ul className="space-y-2">
              {analysis.recommendedStyles.map((style, i) => (
                <li key={i} className="text-lg text-ink/70 border-b border-olive/10 pb-1">{style}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-olive">
              <Sparkles size={16} /> 品位特质
            </h3>
            <ul className="flex flex-wrap gap-2">
              {analysis.personalityTraits.map((trait, i) => (
                <li key={i} className="px-3 py-1 bg-olive/5 text-olive rounded-full text-sm font-medium border border-olive/10 uppercase tracking-tighter">
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <button 
          onClick={handleShare}
          className="flex-1 bg-ink text-white py-4 px-6 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-ink/90 transition-all active:scale-95"
        >
          <Share2 size={20} /> 分享我的品位
        </button>
        <button 
          onClick={onReset}
          className="flex-1 bg-transparent border-2 border-ink text-ink py-4 px-6 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-ink/5 transition-all active:scale-95"
        >
          <RotateCcw size={20} /> 重新测试
        </button>
      </div>

      <footer className="pt-10 opacity-40 text-xs uppercase tracking-widest">
        ARTI &copy; 2024
      </footer>
    </motion.div>
  );
}
