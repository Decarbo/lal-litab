'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Star, ArrowRight, CheckCircle2, Loader2, Sparkles, Users, Calendar, Book, Compass } from 'lucide-react';
import Image from 'next/image';
import Courses from '../courses/page';
import Gallery from '../gallery/page';
// 2. Background Geometry (Simplified & Standardized)

const BackgroundGeometry = () => (
	<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
		{/* Grid Pattern */}
		<div className="absolute inset-0 z-0 max-w-6xl mx-auto opacity-[0.11] ">
			<Image
				src="/bghome-DKHT1xLK.svg"
				alt="Background"
				fill
				className="object-contain object-top transition-all duration-700"
				priority
			/>
		</div>
	</div>
);

const useCounter = (end: number, duration: number = 2000) => {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);
				}
			},
			{ threshold: 0.5 }
		);

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
			if (animationFrameId) cancelAnimationFrame(animationFrameId);
		};
	}, [hasStarted, end, duration]);

	return { count, ref };
};

interface StatItemProps {
	label: string;
	value: string | number;
	suffix?: string;
}

const StatItem = ({ label, value, suffix = '+' }: StatItemProps) => {
	const numericValue = typeof value === 'string' ? parseInt(value.replace(/,/g, ''), 10) : value;
	const { count, ref } = useCounter(numericValue);

	return (
		<div
			ref={ref}
			className="text-center group p-6 rounded-2xl hover:bg-orange-50 transition-colors duration-300 border border-transparent hover:border-orange-100">
			<div className="text-4xl md:text-5xl font-yatra text-[#B22222] mb-2 group-hover:scale-110 transition-transform duration-500">
				{count.toLocaleString()}
				{suffix}
			</div>
			<div className="h-1 w-12 bg-orange-400 mx-auto mb-3 rounded-full group-hover:w-24 transition-all duration-500"></div>
			<p className="text-xs font-bold text-orange-600 uppercase tracking-widest">{label}</p>
		</div>
	);
};

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
		if (!WEB_APP_URL) return alert('Config Error');
		setIsSubmitting(true);
		try {
			await fetch(WEB_APP_URL, {
				method: 'POST',
				mode: 'no-cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			setIsSubmitted(true);
			setFormData({ name: '', email: '', phone: '' });
		} catch (error) {
			console.error(error);
			alert('Something went wrong.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="relative min-h-screen bg-[#FDFCFB] overflow-hidden py-8 selection:bg-red-100 font-sans">
			<BackgroundGeometry />
			<div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-20 pb-16">
				<div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
					{/* LEFT COLUMN: BRAND & VIDEO */}
					<div className="lg:col-span-7  lg:sticky lg:top-24">
						{/* Brand Logo */}

						{/* Bottom Logo */}
						<div className=" w-full  ">
							<Image
								src="/rr.svg"
								alt="Logo"
								width={100}
								height={60}
								className="w-full object-contain "
								priority
							/>
						</div>
					</div>

					{/* RIGHT COLUMN: LEAD FORM */}
					<div className="lg:col-span-5  lg:space-y-8 lg:mt-16 animate-[blurReveal_1s_ease-out_0.3s_both]">
						<div className="lg:col-span-5 relative mt-8 lg:mt-0">
							<div className="bg-gradient-to-br from-[#B22222] via-[#a01e1e] to-[#8B0000] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(178,34,34,0.3)] relative overflow-hidden group border border-red-500/30">
								{!isSubmitted ? (
									<>
										<div className="mb-8 text-center sm:text-left relative z-10">
											<h3 className="text-3xl lg:text-[2.5rem] leading-tight font-bold text-white mb-3 tracking-tighter drop-shadow-sm font-yatra">Book - Free - Demo</h3>
											<p className="text-red-100/90  font-bold text-sm lg:text-[15px]  block">अपना विवरण भरें और Demo - Class पाएं </p>
										</div>

										<form
											className="space-y-5 relative z-10"
											onSubmit={handleSubmit}>
											{['name', 'email', 'phone'].map((field) => (
												<div
													key={field}
													className="space-y-1.5 w-full">
													<label className="block text-[15px] lg:text-xs font-bold text-red-100/70 uppercase tracking-[0.2em] pl-2 drop-shadow-sm">{field === 'phone' ? 'WhatsApp Number' : field}</label>
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
													className=" p-3 bg-[#c3c3c3]  tracking-wider w-[65%] text-[#000] rounded-2xl lg:rounded-full mx-auto font-bold text-md shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-gray-50 active:translate-y-0 transition-all duration-300 flex items-center  justify-center gap-3 disabled:opacity-80 group/btn"
													type="submit">
													{isSubmitting ? <Loader2 className="animate-spin text-[#fff]" /> : <>Submit</>}
												</button>
											</div>
										</form>
									</>
								) : (
									<div className="py-16 lg:py-20 text-center text-white relative z-10 animate-in fade-in duration-700">
										<div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/30 animate-[pulse_2s_infinite]">
											<CheckCircle2
												size={56}
												className="text-white drop-shadow-md"
												strokeWidth={1.5}
											/>
										</div>
										<h3 className="text-3xl lg:text-[2.5rem] font-black mb-4 tracking-tighter font-yatra drop-shadow-sm">सफलतापूर्वक भेजा गया!</h3>
										<p className="text-red-100/90 leading-relaxed lg:text-lg px-4 mb-10 max-w-sm mx-auto">Guru Ji's team will contact you shortly to confirm your demo.</p>
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
				</div>
				{/* --- Quick Stats --- */}
				<div className="hidden md:grid grid-cols-2 gap-8 mt-6  w-full my-8 mx-auto border-y border-red-300 py-3 bg-white/40 backdrop-blur-sm ">
					<StatItem
						label="Total Students"
						value={32670}
						suffix="+"
					/>

					<StatItem
						label="Completion Rate"
						value={93}
						suffix="%"
					/>
				</div>
				{/* VSL Video Container */}
				<div className="relative group rounded-3xl mt-6 lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] lg:border-[12px] border-white bg-black aspect-video w-full animate-[blurReveal_1.2s_ease-out_0.4s_both]">
					<iframe
						className="w-full h-full"
						src="https://www.youtube.com/embed/eqIvwa8I-28?si=N-A-K309XJtIeP_w&autoplay=0"
						title="Lal Kitab Demo"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</div>
			<Courses />
			<Gallery />
			<style
				jsx
				global>{`
				@keyframes blurReveal {
					0% {
						filter: blur(10px);
						opacity: 0;
						transform: translateY(15px);
					}
					100% {
						filter: blur(0);
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	);
};

export default Hero;
