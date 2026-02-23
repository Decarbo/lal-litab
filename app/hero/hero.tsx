'use client';
import React, { useState } from 'react';
import { Star, ArrowRight, CheckCircle2, Loader2, Sparkles, Users, Calendar } from 'lucide-react';
import Image from 'next/image';

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
			<div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-20 pb-16">
				<div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
					{/* LEFT COLUMN: BRAND & VIDEO */}
					<div className="lg:col-span-7 space-y-6 lg:space-y-8 lg:sticky lg:top-24">
						{/* Brand Logo */}
						<div className="group relative w-full h-80 overflow-hidden ">
							{/* Background Image (Top aligned) */}
							<Image
								src="/bg-removed-result.png"
								alt="Background"
								fill
								className="object-contain object-top transition-all duration-700"
								priority
							/>
							<div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60" />
						</div>
						{/* Bottom Logo */}
						<div className=" w-full">
							<Image
								src="/logolap.svg"
								alt="Logo"
								width={160}
								height={80}
								className="w-full object-contain"
								priority
							/>
						</div>
						<div className="flex gap-6 justify-center lg:gap-10 pt-2 animate-[blurReveal_1s_ease-out_0.6s_both]">
							<div className="space-y-1">
								<div className="flex items-center gap-2 text-[#B22222]">
									<Users
										size={18}
										className="fill-current opacity-20"
									/>
									<span className="text-xl lg:text-2xl font-black">10k+</span>
								</div>
								<p className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enrollments</p>
							</div>
							<div className="w-[1px] h-10 bg-gray-200" />
							<div className="space-y-1">
								<div className="flex items-center gap-2 text-orange-600">
									<Calendar
										size={18}
										className="fill-current opacity-20"
									/>
									<span className="text-xl lg:text-2xl font-black">Live</span>
								</div>
								<p className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Interactive</p>
							</div>
						</div>
						{/* VSL Video Container */}
						<div className="relative group rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] lg:border-[12px] border-white bg-black aspect-video w-full animate-[blurReveal_1.2s_ease-out_0.4s_both]">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/eqIvwa8I-28?si=N-A-K309XJtIeP_w&autoplay=0"
								title="Lal Kitab Demo"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>

					{/* RIGHT COLUMN: LEAD FORM */}
					<div className="lg:col-span-5 space-y-6 lg:space-y-8 lg:mt-12 animate-[blurReveal_1s_ease-out_0.3s_both]">
						<div className="space-y-2 lg:space-y-4 text-center lg:text-left pt-4 lg:pt-0">
							<h2 className="text-xl lg:text-3xl font-medium text-gray-800 font-yatra">अब घर बैठे बैठे</h2>
							<h1 className="text-5xl lg:text-8xl font-black text-[#B22222] leading-[0.95] tracking-tighter">
								लाल किताब <span className="text-gray-900 block lg:inline">ज्योतिष</span>
							</h1>
							<p className="text-xl lg:text-4xl font-light text-gray-600">सीखें और सफल बनें</p>
						</div>

						{/* Expert Preview Profile */}
						<div className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm group hover:shadow-md transition-shadow">
							<div className="relative">
								<div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg shrink-0">
									<img
										src="https://lalkitabwithkunwarji.com/assets/homeimg-BCSN4SKr.png"
										alt="Guru Kunwar Ji"
										className="w-full h-full object-cover scale-150 transform translate-y-2 translate-x-1"
									/>
								</div>
								<div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-1.5 rounded-lg shadow-lg">
									<Star
										size={16}
										fill="currentColor"
									/>
								</div>
							</div>
							<div>
								<h4 className="text-xl font-bold text-gray-900">Guru Kunwar Ji</h4>
								<p className="text-sm text-gray-500 font-medium">Lal Kitab Specialist</p>
								<div className="flex items-center gap-2 mt-2">
									<div className="flex text-orange-400">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												size={12}
												fill="currentColor"
											/>
										))}
									</div>
									<span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Verified Mentor</span>
								</div>
							</div>
						</div>
						{/* Social Proof */}
						<div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 lg:px-8">
							<div className="flex -space-x-2">
								{[12, 15, 22, 31].map((i) => (
									<div
										key={i}
										className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
										<img
											src={`https://i.pravatar.cc/100?img=${i}`}
											alt="student"
										/>
									</div>
								))}
							</div>
							<div className="text-center sm:text-right">
								<div className="flex text-orange-400 justify-center sm:justify-end gap-0.5">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											size={12}
											fill="currentColor"
										/>
									))}
								</div>
								<p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mt-1">Join a 4.9/5 rated community</p>
							</div>
						</div>
						{/* Red Action Card */}
						<div className="bg-[#B22222]  lg:p-4 rounded-md lg:rounded-md shadow-2xl relative overflow-hidden group">
							{!isSubmitted ? (
								<>
									<div className="mb-8 text-center lg:text-left">
										<h3 className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">Book Free Demo</h3>
										<p className="text-red-100 font-medium text-sm lg:text-base">अपना विवरण भरें और क्लास शुरू करें</p>
									</div>

									<form
										className="space-y-4"
										onSubmit={handleSubmit}>
										{['name', 'email', 'phone'].map((field) => (
											<div
												key={field}
												className="space-y-1 lg:space-y-1.5 w-full">
												<label className="block text-[9px] lg:text-[10px] font-bold text-red-100 uppercase tracking-widest opacity-80 ml-1 lg:ml-4">{field === 'phone' ? 'WhatsApp Number' : field}</label>
												<div className="px-1 lg:px-0">
													{' '}
													{/* Wrapper to prevent input from hitting screen edges on mobile */}
													<input
														type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
														name={field}
														required
														value={(formData as any)[field]}
														onChange={handleChange}
														placeholder={field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : '+91 00000 00000'}
														className="w-full px-4 lg:px-8 py-3 lg:py-2 rounded-xl lg:rounded-md bg-white border-2 border-transparent focus:border-red-400 outline-none transition-all duration-300 placeholder:text-gray-300 font-medium text-gray-900 shadow-inner text-sm lg:text-base"
													/>
												</div>
											</div>
										))}

										<button
											disabled={isSubmitting}
											className="w-full mt-4 py-4 lg:py-6 bg-gray-900 text-white rounded-2xl lg:rounded-[2rem] font-bold text-lg lg:text-xl shadow-xl hover:bg-black hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
											type="submit">
											{isSubmitting ? (
												<Loader2 className="animate-spin" />
											) : (
												<>
													Reserve My Seat <ArrowRight size={20} />
												</>
											)}
										</button>
									</form>
								</>
							) : (
								<div className="py-12 lg:py-16 text-center text-white">
									<div className="w-20 h-20 lg:w-28 lg:h-28 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 backdrop-blur-sm animate-pulse">
										<CheckCircle2
											size={48}
											className="text-white"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">सफलतापूर्वक भेजा गया!</h3>
									<p className="text-red-100 leading-relaxed lg:text-lg px-4 mb-8">Guru Ji's team will contact you shortly to confirm your demo.</p>
									<button
										onClick={() => setIsSubmitted(false)}
										className="text-xs font-bold text-white underline underline-offset-4 hover:text-orange-200 transition-colors uppercase tracking-widest">
										Submit New Inquiry
									</button>
								</div>
							)}
						</div>
						{/* Statistics */}
					</div>
				</div>
			</div>

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
