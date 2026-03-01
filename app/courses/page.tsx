'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ShoppingCart, 
  ArrowRight, 
  Zap,
  Book,
  Compass,
  Star,
  Sun
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

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
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/,/g, ''), 10) : value;
  const { count, ref } = useCounter(numericValue);

  return (
    <div ref={ref} className="text-center group p-6 rounded-2xl hover:bg-orange-50 transition-colors duration-300 border border-transparent hover:border-orange-100">
      <div className="text-4xl md:text-5xl font-yatra text-[#B22222] mb-2 group-hover:scale-110 transition-transform duration-500">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="h-1 w-12 bg-orange-400 mx-auto mb-3 rounded-full group-hover:w-24 transition-all duration-500"></div>
      <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">{label}</p>
    </div>
  );
};

// 2. Background Geometry
const BackgroundGeometry = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
     {/* Grid Pattern */}
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

const PlayCircleIcon = ({ className, size = 20 }: { className?: string; size?: number | string }) => (
	<svg
		width={size}
		height={size}
		className={className}
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2.5}>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
);

const Courses = () => {
    const { addToCart } = useCart();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

	const courses = [
		{
			id: 1,
			title: 'Basic Course',
			titleHi: 'बेसिक कोर्स',
			lectures: 16,
			duration: '120 min / lecture',
			price: 6000,
			description: 'Master the fundamentals of Lal Kitab astrology from scratch.',
			features: ['Pitra Dosha Basics', 'Planet Significators', 'House Analysis'],
			color: 'from-orange-500 to-red-600',
			popular: false,
		},
		{
			id: 2,
			title: 'Advance Course',
			titleHi: 'एडवांस कोर्स',
			lectures: 48,
			duration: '120 min / lecture',
			price: 8000,
			description: 'In-depth remedies and complex chart calculations for professionals.',
			features: ['Varshphal Analysis', 'Advanced Remedies', 'Professional Practice'],
			color: 'from-[#B22222] to-red-900',
			popular: true,
		},
	];

    if (!mounted) return null;

	return (
		<div className="min-h-screen relative py-24 overflow-hidden bg-[#fafafa]">
            <BackgroundGeometry />
			
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				
                {/* --- Header Section --- */}
				<div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">Mastery in Lal Kitab</span>
                    </div>
					<h2 className="text-5xl md:text-6xl font-yatra text-gray-900 mb-6 drop-shadow-sm">
						Available <span className="text-[#B22222] relative inline-block">
							Courses
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-orange-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Choose the right path for your spiritual journey. From basic principles to professional mastery.
                    </p>
				</div>

                {/* --- Quick Stats --- */}
                 <div className="hidden md:grid grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto border-y border-orange-100 py-6 bg-white/40 backdrop-blur-sm rounded-3xl">
                    <StatItem label="Total Students" value={5000} suffix="+" />
                    <StatItem label="Total Lectures" value={64} suffix="" />
                    <StatItem label="Completion Rate" value={98} suffix="%" />
                 </div>

				{/* Premium Alternating Course Cards */}
				<div className="flex flex-col gap-16 max-w-6xl mx-auto pb-20">
					{courses.map((course, index) => (
						<div
							key={course.id}
							className={`group relative bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(178,34,34,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} overflow-hidden border border-gray-100`}
                        >
                            {/* --- Image/Cover Column --- */}
                            <div className={`md:w-5/12 bg-gradient-to-br from-[#9B1C1C] relative via-[#B22222] to-[#8B0000] p-10 lg:p-14 flex flex-col justify-between overflow-hidden text-white ${index % 2 !== 0 ? 'rounded-tl-[2.5rem] rounded-tr-[2.5rem] md:rounded-tr-none' : 'rounded-tl-[2.5rem] rounded-tr-[2.5rem] md:rounded-tl-none md:rounded-bl-[2.5rem]'}`}>
                                {/* Ambient Orbs */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff4d4d]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                {/* Astrological Background Motif */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 pointer-events-none group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-[1500ms]">
                                    <Sun size={400} strokeWidth={0.5} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-yellow-300 mb-8 border border-white/20 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                        <BookOpen size={32} />
                                    </div>
                                    {course.popular && (
                                        <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-[#9B1C1C] px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-lg">
                                            <Zap size={14} fill="currentColor" /> Best Seller
                                        </div>
                                    )}
                                    <h3 className="text-4xl lg:text-5xl font-bold mb-2 font-yatra drop-shadow-md leading-tight">{course.title}</h3>
                                    <p className="text-yellow-400 font-yatra text-2xl tracking-wider drop-shadow-sm opacity-90">{course.titleHi}</p>
                                </div>

                                <div className="relative z-10 mt-16 bg-black/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex text-yellow-400 mb-1">
                                                {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}
                                            </div>
                                            <span className="text-xs font-medium text-red-100">4.9/5 Rating</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-lg text-white">10k+</div>
                                            <div className="text-[10px] uppercase tracking-widest text-red-100">Enrolled</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Content Column --- */}
                            <div className="md:w-7/12 p-10 lg:p-14 flex flex-col bg-white relative">
                                
                                {/* Decor */}
                                <div className={`absolute top-0 w-32 h-32 bg-gray-50 -z-10 ${index % 2 !== 0 ? 'left-0 rounded-br-[100px]' : 'right-0 rounded-bl-[100px]'}`}></div>

                                <div className="flex flex-col h-full">
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{course.description}</p>
                                    
                                    {/* Stats */}
                                    <div className="flex flex-wrap gap-4 mb-10">
                                        <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#B22222]">
                                                <PlayCircleIcon size={20} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Modules</div>
                                                <div className="text-sm font-bold text-gray-800">{course.lectures} Lectures</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#B22222]">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Duration</div>
                                                <div className="text-sm font-bold text-gray-800">120 Min/Lec</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        <div className="col-span-1 sm:col-span-2 text-sm font-bold text-gray-800 uppercase tracking-wider mb-2">What you'll learn</div>
                                        {course.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-100/80 flex items-center justify-center text-green-600 shrink-0">
                                                    <CheckCircle2 size={14} strokeWidth={3} />
                                                </div>
                                                <span className="text-gray-700 text-sm font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col xl:flex-row items-center justify-between gap-6">
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">One-time payment</p>
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-5xl font-black text-[#B22222] font-yatra">₹{course.price}</span>
                                                <span className="text-lg text-gray-400 line-through font-bold">₹{course.price * 2}</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 w-full xl:w-auto">
                                            <button 
                                                onClick={() => {
                                                    addToCart(course);
                                                    alert('Added to cart!');
                                                }}
                                                className="flex-1 xl:flex-none px-6 py-4 rounded-2xl font-bold text-[#B22222] bg-red-50 hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                                                <ShoppingCart size={20} />
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    addToCart(course);
                                                    router.push('/cart');
                                                }}
                                                className="flex-[3] xl:flex-none px-10 py-4 bg-[#B22222] text-white rounded-2xl font-bold shadow-[0_8px_20px_rgba(178,34,34,0.3)] hover:bg-red-800 hover:shadow-[0_10px_25px_rgba(178,34,34,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group/buy text-lg whitespace-nowrap">
                                                Enroll Now <ArrowRight size={20} className="group-hover/buy:translate-x-2 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Courses;