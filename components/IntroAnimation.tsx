'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Moon, Sun, Sparkles, X } from 'lucide-react';

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<'drop' | 'open' | 'reveal' | 'finished'>('drop');
  const [flippedPages, setFlippedPages] = useState(0);
  const [isSkipping, setIsSkipping] = useState(false);

  useEffect(() => {
    if (isSkipping) return;

    // Orchestrated cinematic timing
    const dropTimer = setTimeout(() => setStage('open'), 1400); // slightly longer drop
    
    // Smooth, deliberate page flips
    const flip1 = setTimeout(() => setFlippedPages(1), 2400);
    const flip2 = setTimeout(() => setFlippedPages(2), 2900);
    const flip3 = setTimeout(() => setFlippedPages(3), 3400);

    const openTimer = setTimeout(() => setStage('reveal'), 4200);
    
    const finishTimer = setTimeout(() => {
        setStage('finished');
        onComplete();
    }, 6200);

    return () => {
      clearTimeout(dropTimer);
      clearTimeout(flip1);
      clearTimeout(flip2);
      clearTimeout(flip3);
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete, isSkipping]);

  const handleSkip = () => {
    setIsSkipping(true);
    setStage('finished');
    onComplete();
  };

  // Custom refined easing curve for buttery smoothness
  const elegantEasel = [0.25, 1, 0.5, 1] as const;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#fafafa] flex items-center justify-center overflow-hidden perspective-[2000px]"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: elegantEasel }}
    >
        {/* Skip Button */}
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: stage !== 'finished' ? 1 : 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            onClick={handleSkip}
            className="absolute top-8 right-8 z-50 px-5 py-2.5 bg-white/40 hover:bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full text-gray-600 font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:scale-105 active:scale-95"
        >
            Skip Intro <X size={14} strokeWidth={3} />
        </motion.button>

        {/* Ambient Cosmic Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
             {/* Subtle Radial Glow */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,245,230,0.8)_0%,rgba(250,250,250,1)_70%)]"></div>

             {/* Majestic Chakra Ring */}
             <div className="absolute w-[600px] h-[600px] opacity-[0.15]">
                <motion.div
                    className="w-full h-full rounded-full border-[1.5px] border-dashed border-[#B22222]/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="absolute w-2.5 h-2.5 bg-gradient-to-br from-orange-300 to-red-500 rounded-full shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                             style={{
                                 top: '50%', left: '50%',
                                 transform: `rotate(${i * 30}deg) translate(300px) rotate(-${i * 30}deg)`
                             }}
                        />
                    ))}
                </motion.div>
                <motion.div
                    className="absolute inset-[80px] rounded-full border border-orange-400/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
             </div>

             {/* Dynamic Divine Glow Behind Book */}
             <motion.div 
                className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400/20 via-orange-500/10 to-transparent rounded-full blur-[80px]"
                animate={{ 
                    scale: stage === 'reveal' ? 1.6 : 0.8,
                    opacity: stage === 'reveal' ? 1 : 0.2
                }}
                transition={{ duration: 2, ease: elegantEasel }}
             />

             {/* Elegant Floating Particles */}
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: stage === 'open' || stage === 'reveal' ? 1 : 0 }} transition={{ duration: 2 }}>
                <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <Star className="absolute top-[20%] left-[25%] text-orange-400/80 w-8 h-8 drop-shadow-[0_0_20px_rgba(251,146,60,0.6)]" fill="currentColor" />
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                    <Moon className="absolute bottom-[25%] right-[20%] text-[#B22222]/40 w-14 h-14 drop-shadow-[0_0_20px_rgba(178,34,34,0.3)]" />
                </motion.div>
                <Sun className="absolute top-[30%] right-[25%] text-yellow-500/30 w-16 h-16 animate-spin-slow drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]" />
                <motion.div animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                    <Sparkles className="absolute bottom-[30%] left-[28%] text-orange-500/70 w-7 h-7" />
                </motion.div>
             </motion.div>
        </div>

        {/* --- 3D BOOK ASSEMBLY --- */}
        <div className="relative w-[340px] h-[460px]" style={{ perspective: '2500px' }}>
            <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ y: -1200, rotateX: 60, scale: 0.7, opacity: 0 }}
                animate={{
                    y: stage === 'drop' ? 0 : (stage === 'reveal' ? 15 : 0),
                    rotateX: stage === 'drop' ? 30 : (stage === 'reveal' ? 12 : 18),
                    rotateY: stage === 'reveal' ? -4 : 0,
                    scale: stage === 'reveal' ? 1.05 : 1,
                    opacity: 1
                }}
                transition={{
                    y: { type: "spring", stiffness: 60, damping: 14, mass: 1.2 }, // Heavier, more realistic drop
                    rotateX: { type: "spring", stiffness: 50, damping: 15 },
                    rotateY: { duration: 2, ease: elegantEasel },
                    scale: { duration: 2, ease: elegantEasel },
                    opacity: { duration: 0.8 }
                }}
            >
                {/* --- Static Base (Back Cover & Thick Pages) --- */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf5] to-[#f4f1e1] rounded-r-2xl rounded-l-md shadow-[30px_30px_80px_rgba(0,0,0,0.15),-5px_-5px_30px_rgba(255,255,255,1)] flex flex-col items-center justify-center border-r-[10px] border-b-[10px] border-[#e6d9bf] z-0">
                    
                    {/* Realistic Page Edges Texture */}
                    <div className="absolute right-0 top-0 bottom-0 w-[10px] bg-[repeating-linear-gradient(to_bottom,#e6d9bf_0px,#e6d9bf_1px,transparent_1px,transparent_3px)] opacity-40 rounded-r-md"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-[repeating-linear-gradient(to_right,#e6d9bf_0px,#e6d9bf_1px,transparent_1px,transparent_3px)] opacity-40 rounded-br-md"></div>
                    
                    {/* Inner binding shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>

                    {/* Content Revealed Inside (The Final View) */}
                     <AnimatePresence>
                        {(stage === 'open' || stage === 'reveal') && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                                animate={{ opacity: stage === 'reveal' ? 1 : 0, scale: stage === 'reveal' ? 1 : 0.95, y: stage === 'reveal' ? 0 : 5 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: elegantEasel }}
                                className="text-center w-full px-8 relative z-0 transform translate-x-3"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="w-32 h-32 mx-auto opacity-[0.07] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                >
                                    <Sun className="w-full h-full text-[#B22222]" />
                                </motion.div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <h2 className="text-[72px] font-black font-yatra text-transparent bg-clip-text bg-gradient-to-b from-[#B22222] to-[#8B0000] drop-shadow-sm mb-2 tracking-wide leading-none">
                                        लाल <br/> किताब
                                    </h2>
                                    <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent rounded-full my-6"/>
                                    <h3 className="text-2xl font-bold text-gray-800 font-yatra tracking-widest uppercase">Lal Kitab</h3>
                                    <div className="inline-flex items-center gap-3 mt-8 px-4 py-1.5 border border-orange-200 rounded-full bg-orange-50/50">
                                        <Sparkles size={12} className="text-orange-500" />
                                        <p className="text-orange-700 font-extrabold uppercase text-[10px] tracking-[0.4em]">
                                            Amrit Vani
                                        </p>
                                        <Sparkles size={12} className="text-orange-500" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                     </AnimatePresence>
                </div>

                {/* --- Elegantly Flipping Pages --- */}
                {[...Array(4)].map((_, i) => {
                    const isFlipped = flippedPages > i;
                    return (
                    <motion.div
                        key={i}
                        className="absolute inset-0 origin-left"
                        style={{ transformStyle: 'preserve-3d', zIndex: 10 - i }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped ? -176 + (i * 1.5) : 0 }}
                        transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] as const }} // Custom spring-like bezier for page flips
                    >
                        {/* Front of the page (facing right initially) */}
                        <div 
                            className="absolute inset-0 bg-gradient-to-br from-[#fffcf2] to-[#f9f5e8] rounded-r-2xl rounded-l-sm border-r border-t border-b border-[#e6d9bf] shadow-[-2px_0_5px_rgba(0,0,0,0.02)] flex flex-col px-10 py-12" 
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] opacity-30 pointer-events-none rounded-r-xl"></div>
                             
                             <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent"></div>

                             <div className="space-y-6 opacity-20 relative z-10 pt-4">
                                 <div className="h-2.5 w-full bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-5/6 bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-full bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-4/5 bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-full bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-2/3 bg-[#5c4b3a] rounded-sm"></div>
                             </div>
                             
                             {i === 0 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60 mt-10">
                                    <h2 className="text-5xl font-yatra text-[#8B1A1A]">Index</h2>
                                    <div className="w-20 h-0.5 bg-[#8B1A1A] my-4 opacity-50"></div>
                                </div>
                             )}
                             <div className="mt-auto absolute bottom-6 text-[11px] text-[#a89b8c] font-bold self-center left-1/2 -translate-x-1/2 tracking-widest">{i * 2 + 1}</div>
                        </div>

                        {/* Back of the page (facing left after flip) */}
                        <div 
                            className="absolute inset-0 bg-gradient-to-bl from-[#fffcf2] to-[#f9f5e8] rounded-l-2xl rounded-r-sm border-l border-t border-b border-[#e6d9bf] shadow-[2px_0_5px_rgba(0,0,0,0.02)] flex flex-col px-10 py-12" 
                            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                        >
                             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] opacity-30 pointer-events-none rounded-l-xl"></div>
                             
                             <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/5 to-transparent"></div>

                             <div className="space-y-6 opacity-20 pt-8 relative z-10">
                                 <div className="h-2.5 w-4/5 bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-full bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-5/6 bg-[#5c4b3a] rounded-sm"></div>
                                 <div className="h-2.5 w-full bg-[#5c4b3a] rounded-sm"></div>
                             </div>
                             
                             {i % 2 !== 0 && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
                                    <Sun className="w-48 h-48 text-[#B22222]" />
                                </div>
                             )}
                             <div className="mt-auto absolute bottom-6 text-[11px] text-[#a89b8c] font-bold self-center left-1/2 -translate-x-1/2 tracking-widest">{i * 2 + 2}</div>
                        </div>
                    </motion.div>
                )})}

                {/* --- Massive, Premium Front Cover (Hinged Opening) --- */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#c92a2a] via-[#9B1C1C] to-[#6b0000] rounded-r-2xl rounded-l-md shadow-[30px_10px_40px_rgba(0,0,0,0.4)] origin-left z-20"
                    style={{ transformStyle: 'preserve-3d' }}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: stage === 'open' || stage === 'reveal' ? -180 : 0 }}
                    transition={{
                        rotateY: { duration: 2.2, ease: elegantEasel }
                    }}
                >
                    {/* Front of the Cover */}
                    <div 
                        className="absolute inset-0 flex flex-col items-center justify-center border-y-[6px] border-r-[6px] border-[#4a0000] rounded-r-2xl rounded-l-md overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        {/* Inner Bevel / Highlight */}
                        <div className="absolute inset-0 border-[3px] border-white/10 rounded-r-xl pointer-events-none z-30"></div>

                        {/* Rich Leather Texture */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-40 mix-blend-multiply rounded-r-xl pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
                        
                        {/* Intricate Golden Frame */}
                        <div className="absolute inset-6 border-2 border-yellow-500/60 rounded-r-xl rounded-l-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_10px_rgba(234,179,8,0.2)] z-10"></div>
                        <div className="absolute inset-5 border border-dashed border-yellow-500/30 rounded-r-xl rounded-l-sm z-10"></div>

                        {/* Corner Ornaments */}
                        <div className="absolute top-6 right-6 w-6 h-6 border-t-[3px] border-r-[3px] border-yellow-500 shadow-[2px_−2px_5px_rgba(0,0,0,0.3)] z-10"></div>
                        <div className="absolute bottom-6 right-6 w-6 h-6 border-b-[3px] border-r-[3px] border-yellow-500 shadow-[2px_2px_5px_rgba(0,0,0,0.3)] z-10"></div>
                        <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-yellow-500/50 z-10"></div>
                        <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-yellow-500/50 z-10"></div>

                        {/* Majestic Center Icon */}
                        <div className="w-[160px] h-[160px] rounded-full border-[6px] border-[#ffd700]/30 border-t-[#ffd700]/60 flex items-center justify-center mb-10 bg-gradient-to-br from-[#7A0000] to-[#4a0000] shadow-[inset_0_10px_30px_rgba(0,0,0,0.8),0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden z-10 group">
                             {/* Inner glow */}
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25),transparent_70%)]"></div>
                             <span className="text-[80px] text-transparent bg-clip-text bg-gradient-to-b from-[#ffe066] to-[#b38f00] font-black relative z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">ॐ</span>
                        </div>

                        <h1 className="text-[72px] font-black font-yatra text-[#FFFDF5] drop-shadow-[0_6px_15px_rgba(0,0,0,0.6)] text-center leading-[0.9] z-10">
                            लाल <br/> <span className="text-[64px]">किताब</span>
                        </h1>
                        <p className="mt-8 text-[#ffe066] font-bold text-xs uppercase tracking-[0.4em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10 opacity-90">Original 1952</p>
                    </div>

                    {/* Back of the Cover (Inside facing left) */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-tl from-[#5c0000] to-[#8B0000] border-y-[6px] border-l-[6px] border-[#4a0000] rounded-l-2xl rounded-r-md flex flex-col items-center justify-center overflow-hidden"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                        {/* Inner leather */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-60 mix-blend-multiply rounded-l-xl pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none"></div>

                        <div className="absolute inset-6 border-[3px] border-dashed border-red-950/60 rounded-l-xl rounded-r-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
                        
                        <div className="opacity-30 flex flex-col items-center relative z-10 transform -translate-x-2">
                             <Sun className="w-40 h-40 text-red-950 mb-6 drop-shadow-md" />
                             <div className="h-1.5 w-24 bg-red-950 rounded-full shadow-inner"></div>
                        </div>
                    </div>

                    {/* Spine Realistic Highlight Canvas */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/30 via-white/5 to-transparent rounded-l-md pointer-events-none z-30"></div>
                </motion.div>

            </motion.div>
        </div>
    </motion.div>
  );
};

export default IntroAnimation;
