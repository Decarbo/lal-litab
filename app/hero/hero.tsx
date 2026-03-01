'use client';

import React, { useState } from 'react';
import { Star, ArrowRight, CheckCircle2, Loader2, Sparkles, Users, Calendar, Play } from 'lucide-react';
import Image from 'next/image';
import Courses from '../courses/page'; // Import Courses page as a component

// Background Geometry (Simplified & Standardized)
const BackgroundGeometry = () => (
	<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
		{/* Grid Pattern similar to Hero */}
		<div
			className="absolute inset-0 z-0 opacity-[0.03]"
			style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
		/>
	</div>
);

const Hero = () => {
	const WEB_APP_URL = process.env.NEXT_PUBLIC_WEB_APP_URL;
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!WEB_APP_URL || WEB_APP_URL === '') {
            return alert('Config Error: You need to set NEXT_PUBLIC_WEB_APP_URL in your .env.local file. Please check the setup guide.');
        }
		
        setIsSubmitting(true);
		
        try {
            // Google Apps Script requires FormData for no-cors POST requests
            const formPayload = new FormData();
            formPayload.append('name', formData.name);
            formPayload.append('email', formData.email);
            formPayload.append('phone', formData.phone);

			await fetch(WEB_APP_URL, {
				method: 'POST',
				mode: 'no-cors',
				body: formPayload,
			});
            
			setIsSubmitted(true);
			setFormData({ name: '', email: '', phone: '' });
		} catch (error) {
			console.error(error);
			alert('Something went wrong connecting to the server.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="relative bg-[#FDFCFB] overflow-hidden selection:bg-red-100 font-sans w-full min-h-screen">
			<BackgroundGeometry />
			
			{/* 1. VIDEO CONTAINER (Below Nav) */}
			<section className="relative z-10 w-full pt-16 md:pt-20 animate-[blurReveal_1s_ease-out_0.2s_both]">
				{/* Full width video container - 70vh height */}
				<div className="relative group w-full h-[70vh] overflow-hidden shadow-2xl bg-black">
					{/* Inner Shadow for Screen effect */}
					<div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-10" />
					
					{/* Embedded VSL iframe */}
					<iframe
						className="w-full h-full relative z-0 object-cover scale-[1.01]"
						src="https://www.youtube.com/embed/eqIvwa8I-28?si=N-A-K309XJtIeP_w&autoplay=1&mute=1&controls=1"
						title="Lal Kitab Demo"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						style={{ border: 'none' }}
					/>
					
					{/* Subtle glow behind the video container on hover */}
					<div className="absolute -inset-4 bg-gradient-to-r from-[#B22222]/20 via-orange-500/20 to-[#B22222]/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
				</div>
			</section>

			{/* 2. COURSES SECTION */}
			<section className="relative z-20 w-full mt-10 lg:mt-16 animate-[blurReveal_1s_ease-out_0.4s_both]">
				<div className="bg-gradient-to-b from-[#FDFCFB] to-transparent h-12 absolute top-0 left-0 right-0 z-10 pointer-events-none" />
				{/* Rendering exact courses page component inside Hero */}
				<Courses />
			</section>

			{/* 3. HERO CONTENT & DEMO DIV */}
			<section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10 lg:pt-16 animate-[blurReveal_1s_ease-out_0.6s_both]">
				<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					
					{/* LEFT COLUMN: HERO CONTENT & BRANDING */}
					<div className="lg:col-span-7 space-y-10 lg:pr-8">
						
						{/* Title Block */}
						<div className="space-y-5">
							<div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm text-orange-600 shadow-sm hover:shadow-md transition-shadow cursor-default">
								<Sparkles size={16} />
								<span className="text-xs font-bold tracking-[0.2em] uppercase">Start Your Journey Today</span>
							</div>
							
							<div className="space-y-2">
								<h2 className="text-3xl lg:text-4xl font-medium text-gray-800 font-yatra drop-shadow-sm">अब घर बैठे बैठे</h2>
								<h1 className="text-6xl md:text-7xl lg:text-[7rem] font-black text-[#B22222] leading-[0.95] tracking-tighter drop-shadow-md">
									लाल किताब <span className="text-gray-900 block mt-2 lg:mt-4">ज्योतिष</span>
								</h1>
							</div>
							
							<p className="text-2xl lg:text-3xl font-light text-gray-600 mt-6 tracking-wide leading-relaxed max-w-lg">
								सीखें और सफल बनें
							</p>
						</div>

						{/* Brand & Stats Block */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 bg-white/60 p-6 rounded-[2rem] border border-gray-100 shadow-sm backdrop-blur-md">
							{/* Logo */}
							<div className="relative w-40 h-20 shrink-0 group">
								<Image
									src="/logolap.svg"
									alt="Lal Kitab Logo"
									fill
									className="object-contain object-left group-hover:scale-105 transition-transform duration-500"
									priority
								/>
							</div>
							
							<div className="h-12 w-[1px] bg-gray-200 hidden sm:block shrink-0" />
							
							{/* Stats */}
							<div className="flex justify-center flex-wrap sm:flex-nowrap gap-8 w-full sm:w-auto">
								<div className="space-y-1">
									<div className="flex items-center gap-2 text-[#B22222]">
										<Users size={20} className="fill-current opacity-20" />
										<span className="text-2xl lg:text-3xl font-black">10k+</span>
									</div>
									<p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-7">Enrollments</p>
								</div>
								
								<div className="space-y-1">
									<div className="flex items-center gap-2 text-orange-500">
										<Calendar size={20} className="fill-current opacity-20" />
										<span className="text-2xl lg:text-3xl font-black">Live</span>
									</div>
									<p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-7">Interactive</p>
								</div>
							</div>
						</div>

						{/* Expert Profile Strip */}
						<div className="inline-flex flex-col sm:flex-row items-center gap-6 p-3 pr-8 bg-white border border-gray-100 rounded-[2rem] sm:rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
							<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-100 shrink-0 relative shadow-inner">
								<img
									src="https://lalkitabwithkunwarji.com/assets/homeimg-BCSN4SKr.png"
									alt="Guru Kunwar Ji"
									className="w-full h-full object-cover scale-150 origin-top transform translate-y-1"
								/>
							</div>
							<div className="text-center sm:text-left">
								<h4 className="text-lg font-black text-gray-900 tracking-tight">Guru Kunwar Ji</h4>
								<div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
									<div className="flex text-orange-400">
										{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
									</div>
									<span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Verified Mentor</span>
								</div>
							</div>
						</div>

					</div>

					{/* RIGHT COLUMN: DEMO DIV (Booking Form) */}
					<div className="lg:col-span-5 relative mt-8 lg:mt-0">
						{/* Ambient decorative glow behind form */}
						<div className="absolute inset-x-0 -top-10 bottom-10 bg-gradient-to-b from-orange-400/20 to-red-500/10 blur-3xl rounded-[4rem] transform scale-95" />
						
						<div className="bg-gradient-to-br from-[#B22222] via-[#a01e1e] to-[#8B0000] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(178,34,34,0.3)] relative overflow-hidden group border border-red-500/30">
							
							{/* Shimmer/Flare effect inside form container */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/3 pointer-events-none" />
							
							{!isSubmitted ? (
								<>
									<div className="mb-8 text-center sm:text-left relative z-10">
										<h3 className="text-3xl lg:text-[2.5rem] leading-tight font-black text-white mb-3 tracking-tighter drop-shadow-sm font-yatra">Book Free Demo</h3>
										<p className="text-red-100/90 font-medium text-sm lg:text-[15px] block">अपना विवरण भरें और क्लास शुरू करें</p>
									</div>

									<form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
										{['name', 'email', 'phone'].map((field) => (
											<div key={field} className="space-y-1.5 w-full">
												<label className="block text-[10px] lg:text-xs font-bold text-red-100/70 uppercase tracking-[0.2em] pl-2 drop-shadow-sm">
													{field === 'phone' ? 'WhatsApp Number' : field}
												</label>
												<input
													type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
													name={field}
													required
													value={(formData as any)[field]}
													onChange={handleChange}
													placeholder={field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : '+91 00000 00000'}
													className="w-full px-6 py-4 rounded-xl lg:rounded-2xl bg-white/95 border-2 border-transparent focus:border-red-300 focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400 font-medium text-gray-900 shadow-inner text-base"
												/>
											</div>
										))}

										<div className="pt-2">
											<button
												disabled={isSubmitting}
												className="w-full py-5 bg-white text-[#B22222] rounded-xl lg:rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-gray-50 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-80 group/btn"
												type="submit">
												{isSubmitting ? (
													<Loader2 className="animate-spin text-[#B22222]" />
												) : (
													<>
														Book Free Demo
														<span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover/btn:bg-red-100 transition-colors">
															<ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
														</span>
													</>
												)}
											</button>
										</div>
									</form>
								</>
							) : (
								<div className="py-16 lg:py-20 text-center text-white relative z-10 animate-in fade-in duration-700">
									<div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/30 animate-[pulse_2s_infinite]">
										<CheckCircle2 size={56} className="text-white drop-shadow-md" strokeWidth={1.5} />
									</div>
									<h3 className="text-3xl lg:text-[2.5rem] font-black mb-4 tracking-tighter font-yatra drop-shadow-sm">सफलतापूर्वक भेजा गया!</h3>
									<p className="text-red-100/90 leading-relaxed lg:text-lg px-4 mb-10 max-w-sm mx-auto">
										Guru Ji's team will contact you shortly to confirm your demo.
									</p>
									<button
										onClick={() => setIsSubmitted(false)}
										className="text-xs font-bold text-white/80 hover:text-white underline underline-offset-8 transition-colors uppercase tracking-[0.2em]">
										Submit New Demo
									</button>
								</div>
							)}
						</div>
					</div>

				</div>
			</section>

			{/* Global Styles for the Blur Reveal Animation */}
			<style jsx global>{`
				@keyframes blurReveal {
					0% {
						filter: blur(12px);
						opacity: 0;
						transform: translateY(20px);
					}
					100% {
						filter: blur(0);
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</main>
	);
};

export default Hero;
