"use client";



import React, { useEffect, useState, useRef } from 'react';
import { Book, Compass, FileText, CheckCircle2, Award, PlayCircle, Play, Youtube, Star, MessageSquareQuote, ArrowRight, Sun, Sparkles, ShieldOff, ShoppingBasket, Heart, BookOpen, Clock, Banknote, Layout, Zap, ArrowRightToLine } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

// Background Geometry Component (Copied from Courses)
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

const LalKitabPage = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
	const features = [
		{
			text: 'Simple and effective remedies',
			icon: <Sparkles className="text-amber-500" />,
		},
		{
			text: 'Absence of complex Tantra Mantra methods',
			icon: <ShieldOff className="text-blue-500" />,
		},
		{
			text: 'Use of everyday items like water, sweets, and copper coins',
			icon: <ShoppingBasket className="text-orange-500" />,
		},
		{
			text: 'Emphasis on easy-to-perform rituals like feeding street dogs and worshipping young girls',
			icon: <Heart className="text-red-500" />,
		},
		{
			text: 'Focuses on simple and easy remedies',
			icon: <CheckCircle2 className="text-green-500" />,
		},
		{
			text: 'Lal Kitab provides easy-to-understand concepts and remedies',
			icon: <BookOpen className="text-purple-500" />,
		},
		{
			text: 'Easy-to-learn and practice approach',
			icon: <Clock className="text-indigo-500" />,
		},
		{
			text: 'Low-cost remedies using everyday items',
			icon: <Banknote className="text-emerald-500" />,
		},
		{
			text: 'Practical applications in daily life',
			icon: <Layout className="text-slate-500" />,
		},
	];

	// Mock Videos Data
	const videos = [
		{
			title: 'Understanding 12 Houses in Lal Kitab',
			duration: '22:10',
			tag: 'Astrology',
            url: 'https://youtube.com/',
			image: 'https://images.unsplash.com/photo-1533227260871-bf4436841284?auto=format&fit=crop&q=80',
		},
		{
			title: 'Planetary Positions & Deep Remedies',
			duration: '15:24',
			tag: 'Remedies',
            url: 'https://youtube.com/',
			image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80',
		},
		{
			title: 'Quick Fixes for Pitra Dosha at Home',
			duration: '08:45',
			tag: 'Karma',
            url: 'https://youtube.com/',
			image: 'https://images.unsplash.com/photo-1502484390501-5d070b8f4ed4?auto=format&fit=crop&q=80',
		},
	];

	return (
		<div className="min-h-screen relative py-24 overflow-hidden bg-[#fafafa]">
            <BackgroundGeometry />
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">The Legend of the "Red Book"</span>
                    </div>
					<h2 className="text-5xl md:text-6xl font-yatra text-gray-900 mb-6 drop-shadow-sm">
						Lal <span className="text-[#B22222] relative inline-block">
							Kitab
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-orange-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
						</span>
					</h2>
				</div>

				{/* Hero Card - Founder Tribute (Red Premium Design) */}
				<div className="relative mb-24 group perspective-1000 max-w-5xl mx-auto">
					{/* Outer Glow / Drop Shadow Layer */}
					<div className="absolute inset-0 bg-gradient-to-br from-[#9B1C1C] to-[#B22222] rounded-[3rem] rotate-1 scale-[1.03] -z-10 opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
					<div className="absolute inset-0 bg-gradient-to-br from-[#9B1C1C] to-[#B22222] rounded-[3rem] -rotate-1 scale-[1.01] -z-10 opacity-70 border border-red-500/50"></div>

					<div className="bg-gradient-to-br from-[#B22222] via-[#9B1C1C] to-[#8B0000] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch relative border border-red-400/30 transition-transform duration-500 hover:scale-[1.01]">
						
                        {/* Background Ambient Effects */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        {/* Left: Portrait Section */}
						<div className="w-full md:w-5/12 p-10 md:p-14 flex items-center justify-center relative bg-black/10 border-r border-white/10 backdrop-blur-sm">
							<div className="relative group/image z-10 w-full max-w-[280px] aspect-square">
								{/* Image Glow */}
                                <div className="absolute -inset-6 bg-yellow-500/20 rounded-full blur-2xl group-hover/image:bg-yellow-400/30 group-hover/image:scale-110 transition-all duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-full border-4 border-yellow-500/30 shadow-[0_0_40px_rgba(0,0,0,0.3)] p-1.5 overflow-hidden bg-white/5 backdrop-blur-sm">
									<div className="w-full h-full rounded-full bg-orange-50 overflow-hidden relative">
										<img
											src="https://lalkitabwithkunwarji.com/assets/lalkitab-CPDVCSxM.png"
											alt="Pandit Roop Chand Joshi Ji"
											className="w-full h-full object-cover scale-[1.15] transform group-hover/image:scale-[1.25] transition-transform duration-700 ease-out"
										/>
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
									</div>
								</div>
							</div>

                            {/* Decorative Astrological Elements behind image */}
                            <div className="absolute top-8 left-8 text-white/5 animate-spin-slow pointer-events-none">
                                <Sun size={80} strokeWidth={1} />
                            </div>
						</div>

						{/* Right: Text Content */}
						<div className="w-full md:w-7/12 p-10 md:p-14 text-center md:text-left space-y-8 relative z-10 flex flex-col justify-center">
							<div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-6 backdrop-blur-sm">
                                    <Star size={12} fill="currentColor" /> Lal Kitab Founder
                                </div>
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-yatra text-white leading-[1.1] drop-shadow-md mb-2">पंडित रूप चंद जोशी जी</h3>
                                <p className="text-xl md:text-2xl text-yellow-500/90 font-bold font-serif italic tracking-wide">( 18 जनवरी 1898 - 24 दिसंबर 1982 )</p>
                            </div>

							<div className="space-y-4">
                                <div className="flex items-start gap-4 justify-center md:justify-start">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 shrink-0 backdrop-blur-md border border-white/10 hidden sm:flex">
                                        <Compass size={20} />
                                    </div>
                                    <p className="text-lg md:text-xl leading-relaxed font-medium text-red-50 text-opacity-90">
                                        गांव फरवाला, तहसील फिलौर <br />
                                        <span className="text-white font-bold opacity-100">नूरमहल, जालंधर, पंजाब</span>
                                    </p>
                                </div>
							</div>

							<div className="pt-6 border-t border-white/10">
								<button className="px-8 py-4 bg-white text-[#B22222] rounded-2xl font-black shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-red-50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 uppercase text-sm tracking-[0.15em] flex items-center gap-3 mx-auto md:mx-0 group/btn">
                                    Read Full Legacy 
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                                </button>
							</div>
						</div>

						{/* Decorative Om Symbol */}
						<div className="absolute top-0 right-0 text-white/5 font-black text-[20rem] leading-none select-none pointer-events-none -translate-y-20 translate-x-10">ॐ</div>
					</div>
				</div>

				<section className="py-16 relative">
					<div className="max-w-5xl mx-auto px-6">
						<div className="mb-16 text-center md:text-left">
							<h2 className="text-4xl font-black font-yatra text-gray-900 mb-2">
								Lal Kitab is <span className="text-[#B22222]">Famous</span> For:
							</h2>
							<div className="h-1.5 w-24 bg-[#B22222] rounded-full mx-auto md:mx-0"></div>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							{features.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-6 p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/60 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-orange-50 shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:bg-[#B22222] group-hover:text-white transition-all duration-300">
                                        {React.cloneElement(item.icon as React.ReactElement<any>, { className: "group-hover:text-white transition-colors duration-300", size: 24 })}
                                    </div>
									<p className="text-lg font-bold text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">{item.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Banner */}
				<div className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
					<div className="relative z-10 text-center md:text-left space-y-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">
                              Start Your Journey
                        </div>
						<h3 className="text-4xl font-black font-yatra leading-tight">Unlock the secrets of your future.</h3>
                        <p className="text-gray-400 max-w-md">Join thousands of students mastering the ancient wisdom of Lal Kitab.</p>
					</div>
					<button 
                        onClick={() => router.push('/courses')}
                        className="relative z-10 px-10 py-5 bg-[#B22222] text-white rounded-2xl font-bold shadow-2xl shadow-red-900/50 hover:bg-red-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
						Join Basic Course{' '}
						<ArrowRight
							size={20}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>

					{/* Background decoration */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-[#B22222]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
				</div>
			</div>

			
		
		</div>
	);
};

export default LalKitabPage;
