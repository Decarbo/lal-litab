'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  Star, 
  Award, 
  Users, 
  BookOpen, 
  Feather, 
  Sun,
  Sparkles,
  Scroll,
  Compass,
  Book
} from 'lucide-react';

// --- Components ---

// 1. Counter Hook for "Living Numbers"
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);

    return () => {
        if(animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, end, duration]);

  return { count, ref };
};

interface StatItemProps {
    label: string;
    value: string | number;
    suffix?: string;
}

const StatItem = ({ label, value, suffix = "+" }: StatItemProps) => {
  // Extract number from string if needed, or pass raw number
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/,/g, ''), 10) : value;
  const { count, ref } = useCounter(numericValue);

  return (
    <div ref={ref} className="text-center group p-4 rounded-2xl hover:bg-orange-50 transition-colors duration-300">
      <div className="text-4xl md:text-5xl font-yatra text-[#B22222] mb-2 group-hover:scale-110 transition-transform duration-500">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="h-1 w-12 bg-orange-400 mx-auto mb-3 rounded-full group-hover:w-24 transition-all duration-500"></div>
      <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">{label}</p>
    </div>
  );
};

// 2. Background Geometry (Simplified & Standardized)
const BackgroundGeometry = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
     {/* Grid Pattern similar to Hero */}
    <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
    />
    
    <div className="absolute top-10 left-10 text-orange-400 opacity-10 animate-spin-slow">
      <Book size={400} strokeWidth={0.5} />
    </div>
    <div className="absolute bottom-10 right-10 text-[#B22222] opacity-5 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
      <Compass size={500} strokeWidth={0.5} />
    </div>
  </div>
);

// 3. Student Tag
interface StudentTagProps {
    text: string;
    delay: number;
    icon?: React.ElementType;
}

const StudentTag = ({ text, delay, icon: Icon }: StudentTagProps) => (
  <div 
    className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 cursor-default hover:shadow-lg hover:-translate-y-1 border border-orange-100 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
    style={{ animationDelay: `${delay}ms`, animationDuration: '0.8s' }}
  >
    <div className="w-2 h-2 rounded-full bg-[#B22222]"></div>
    <span className="text-gray-800 font-medium text-sm md:text-base">{text}</span>
  </div>
);

const AboutUs = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const experts = ['Vedic Astrologers', 'Palmists', 'Vaastu Experts', 'Tarot Readers', 'Numerologists', 'Ramal Experts', 'Nadi Experts', 'KP Astrologers'];
  const professionals = ['Retired Officers', 'Teachers', 'Professors', 'Advocates', 'Doctors', 'Engineers', 'Architects', 'Housewives'];

  if (!mounted) return null; // Avoid hydration mismatch for simple client-side only render if needed, or can remove if using hydration safe methods

  return (
    <div className="min-h-screen relative py-24 overflow-hidden bg-[#fafafa]">
      <BackgroundGeometry />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            {/* <Sparkles size={16} className="text-[#B22222] animate-pulse" /> */}
            <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">Mastery in Lal Kitab</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-yatra text-gray-900 mb-6 drop-shadow-sm">
            About <span className="text-[#B22222] relative inline-block">
              Kunwar Ji
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-orange-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between ancient wisdom and modern understanding.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Interactive Image */}
          <div className="relative group perspective-1000 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] transition-transform duration-700">
              
              {/* Spinning Halo */}
               <div className="absolute inset-[-20px] border-2 border-dashed border-orange-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-[-10px] border border-[#B22222]/10 rounded-full"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10 bg-white">
                <img
                  src="https://lalkitabwithkunwarji.com/assets/about-BavIcsiY.png"
                  alt="Kunwar Ji"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                 {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-[bounce_3s_infinite] z-20">
                <div className="bg-[#B22222] p-2.5 rounded-lg text-white shadow-md"><Award size={24} /></div>
                <div>
                   <p className="text-xs text-orange-600 font-bold uppercase">Experience</p>
                   <p className="font-yatra text-xl text-gray-900">26 Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text & Stats */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 relative hover:shadow-xl transition-shadow duration-300">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#B22222] rounded-l-3xl"></div>
               <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
                 <span className="text-5xl float-left mr-3 mt-[-10px] font-serif text-orange-400">"</span>
                 A world-renowned mentor who has dedicated his life to decoding the karmic ledger. Through his mastery of <span className="font-bold text-[#B22222]">Lal Kitab</span>, he transforms complex astrological mathematics into simple, life-altering remedies.
               </p>
            </div>

            {/* Live Counter Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-orange-100">
               <StatItem label="Global Students" value={32000} suffix="+" />
               <StatItem label="Countries" value={14} suffix="" />
               <StatItem label="Workshops" value={500} suffix="+" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
               <div className="flex items-center gap-2 text-sm font-bold text-[#B22222] bg-red-50 px-5 py-2.5 rounded-full border border-red-100 hover:bg-red-100 transition-colors">
                  <BookOpen size={16} /> Online Courses
               </div>
               <div className="flex items-center gap-2 text-sm font-bold text-[#B22222] bg-red-50 px-5 py-2.5 rounded-full border border-red-100 hover:bg-red-100 transition-colors">
                  <Users size={16} /> Live Workshops
               </div>
            </div>
          </div>
        </div>

        {/* --- Student Base Section (Enhanced) --- */}
        <div className="relative mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-yatra text-gray-900 mb-4">Who Learns from Kunwar Ji?</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#B22222] to-transparent mx-auto opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left: The Practitioners */}
            <div className="space-y-8">
               <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] flex-1 bg-orange-200"></div>
                  <h4 className="font-yatra text-xl text-[#B22222] flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm"><Scroll size={20}/> The Practitioners</h4>
                  <div className="h-[1px] flex-1 bg-orange-200"></div>
               </div>
               <div className="flex flex-wrap justify-center gap-3">
                  {experts.map((item, idx) => (
                    <StudentTag key={idx} text={item} delay={idx * 50} />
                  ))}
               </div>
            </div>

            {/* Right: The Professionals */}
            <div className="space-y-8">
               <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] flex-1 bg-orange-200"></div>
                  <h4 className="font-yatra text-xl text-[#B22222] flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm"><Feather size={20}/> The Seekers</h4>
                  <div className="h-[1px] flex-1 bg-orange-200"></div>
               </div>
               <div className="flex flex-wrap justify-center gap-3">
                  {professionals.map((item, idx) => (
                    <StudentTag key={idx} text={item} delay={400 + (idx * 50)} />
                  ))}
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;