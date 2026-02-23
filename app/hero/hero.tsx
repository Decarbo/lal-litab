'use client';
import React, { useState } from 'react';
import { BookOpen, Star, ShieldCheck, ArrowRight, PlayCircle, CheckCircle2, Loader2, Book, Compass, Sparkles, Award, Youtube, Play } from 'lucide-react';

const Hero = () => {
	const WEB_APP_URL = process.env.NEXT_PUBLIC_WEB_APP_URL;
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!WEB_APP_URL) return alert('Config Error');

		setIsSubmitting(true);

		try {
			// Using 'cors' mode is better if you've deployed correctly as "Anyone"
			await fetch(WEB_APP_URL, {
				method: 'POST',
				mode: 'no-cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			// Show success state
			setIsSubmitted(true);
			setFormData({ name: '', email: '', phone: '' });
		} catch (error) {
			console.error(error);
			alert('Something went wrong. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

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


	return (
		<>
			{/* HERO SECTION */}
			<section className="relative min-h-[95vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#fafafa]">
				<BackgroundGeometry />

				<div className="max-w-7xl mx-auto px-4 lg:px-8 z-10 w-full relative">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* ------------- LEFT COLUMN ------------- */}
						<div className="flex flex-col gap-10">
							{/* Text Header */}
							<div className="space-y-6 text-left">
								<div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
									<span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
										India's #1 Astrology Platform
									</span>
								</div>
								<h1 className="text-5xl lg:text-7xl xl:text-[80px] font-black text-gray-900 leading-[1.05] font-yatra drop-shadow-sm">
									Master{' '}
									<span className="text-[#B22222] relative inline-block pb-2">
										लाल किताब
										<svg
											className="absolute w-full h-3 -bottom-0 left-0 text-orange-400 opacity-60"
											viewBox="0 0 100 10"
											preserveAspectRatio="none">
											<path
												d="M0 5 Q 50 10 100 5"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
											/>
										</svg>
									</span>{' '}
									<br />
									<span className="text-gray-800 tracking-tight">
										ज्योतिष विद्या
									</span>
								</h1>
								<p className="text-xl text-gray-600 max-w-[90%] leading-relaxed font-medium">
									Transform your passion into a profession with{' '}
									<span className="text-[#B22222] font-black">
										Jyotish Guru Kunwar Ji
									</span>
									. Join the most trusted community of astrologers.
								</p>
							</div>

							{/* Modern Booking Form */}
							<div className="w-full max-w-lg bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 relative group hover:shadow-[0_20px_60px_rgba(178,34,34,0.08)] hover:border-red-100 transition-all duration-500">
								{/* Top Edge Highlight */}
								<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-400 via-[#B22222] to-[#8B0000] rounded-t-[2.5rem] opacity-80 group-hover:opacity-100 transition-opacity"></div>

								{!isSubmitted ? (
									<>
										<div className="absolute -top-4 right-8 bg-[#B22222] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5">
											<Sparkles
												size={12}
												fill="currentColor"
												className="text-yellow-300"
											/>{' '}
											Limited Seats
										</div>
										<div className="mb-8">
											<h3 className="text-2xl font-black text-gray-900 mb-1 font-yatra">
												Book Free Demo Class
											</h3>
											<p className="text-gray-500 text-sm font-medium">
												Secure your spot to start your spiritual journey
											</p>
										</div>

										<form
											className="space-y-4"
											onSubmit={handelSubmit}>
											<div className="relative">
												<input
													type="text"
													name="name"
													required
													value={formData.name}
													onChange={handelChange}
													placeholder="Full Name (पूरा नाम)"
													className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#B22222] focus:ring-4 focus:ring-red-500/10 focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium text-gray-800"
												/>
											</div>
											<div className="relative">
												<input
													type="email"
													name="email"
													required
													value={formData.email}
													onChange={handelChange}
													placeholder="Email Address (ईमेल)"
													className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#B22222] focus:ring-4 focus:ring-red-500/10 focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium text-gray-800"
												/>
											</div>
											<div className="relative">
												<input
													type="tel"
													name="phone"
													required
													value={formData.phone}
													onChange={handelChange}
													placeholder="Phone Number (फोन नंबर)"
													className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#B22222] focus:ring-4 focus:ring-red-500/10 focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium text-gray-800"
												/>
											</div>

											<button
												disabled={isSubmitting}
												className="w-full mt-2 py-4 bg-[#B22222] text-white rounded-2xl font-bold text-lg shadow-[0_8px_20px_rgba(178,34,34,0.25)] hover:bg-[#8B0000] hover:shadow-[0_10px_25px_rgba(178,34,34,0.35)] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 group/btn"
												type="submit">
												{isSubmitting ? (
													<Loader2 className="animate-spin" />
												) : (
													<>
														Reserve My Slot{' '}
														<ArrowRight
															size={20}
															className="group-hover/btn:translate-x-1.5 transition-transform"
														/>
													</>
												)}
											</button>
										</form>
									</>
								) : (
									<div className="py-16 text-center animate-in fade-in zoom-in duration-500 flex flex-col items-center">
										<div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl">
											<CheckCircle2
												size={40}
												strokeWidth={3}
											/>
										</div>
										<h3 className="text-3xl font-black text-gray-900 mb-2 font-yatra">
											धन्यवाद! (Thank You)
										</h3>
										<p className="text-gray-600 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
											Your demo session has been booked. Our support team will
											contact you shortly.
										</p>
										<button
											onClick={() => setIsSubmitted(false)}
											className="text-[#B22222] font-bold border-2 border-red-100 hover:bg-red-50 px-8 py-3 rounded-2xl transition-colors text-sm uppercase tracking-widest active:scale-95">
											Submit Another
										</button>
									</div>
								)}
							</div>
						</div>

						{/* ------------- RIGHT COLUMN ------------- */}
						<div className="relative w-full flex justify-center lg:justify-end mt-16 lg:mt-0">
							{/* Backdrop Glow */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-200/40 via-orange-100/40 to-transparent rounded-full blur-[80px] animate-pulse pointer-events-none"></div>

							<div className="relative z-10 w-full max-w-[500px]">
								{/* Portrait Image Wrapper */}
								<div className="aspect-[4/5] rounded-[3rem] p-4 relative group">
									{/* Rotating Border Layer */}
									<div className="absolute inset-0 bg-gradient-to-br from-[#B22222] to-orange-400 rounded-[3rem] -z-10 opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
									<div className="absolute inset-0 bg-white shadow-2xl rounded-[2.5rem] -z-10 rotate-[-1deg] group-hover:rotate-0 transition-transform duration-700"></div>

									<div className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-orange-50 to-white relative">
										<img
											src="https://lalkitabwithkunwarji.com/assets/homeimg-BCSN4SKr.png"
											alt="Guru Kunwar Ji"
											className="w-full h-full object-cover object-top scale-[1.03] transform transition-transform duration-700 group-hover:scale-110"
										/>
										<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent"></div>
									</div>

									{/* Floating Badges */}
									<div className="absolute top-12 -left-4 lg:-left-12 animate-bounce-slow bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white flex items-center gap-4">
										<div className="w-12 h-12 bg-[#B22222]/10 rounded-xl flex items-center justify-center text-[#B22222]">
											<PlayCircle
												size={24}
												fill="currentColor"
												className="text-red-100"
											/>
										</div>
										<div className="pr-2">
											<p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
												Live Session
											</p>
											<p className="text-sm font-bold text-gray-800 leading-none">
												Every Sunday
											</p>
										</div>
									</div>

									<div className="absolute bottom-1/4 -right-4 lg:-right-8 animate-pulse-slow bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-white/50 text-center">
										<div className="text-3xl font-black text-[#B22222] font-yatra drop-shadow-sm mb-1">
											ॐ
										</div>
										<p className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">
											Spiritual
										</p>
									</div>

									{/* Large Bottom Rating Floating Card */}
									<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-5 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-center gap-5 border border-gray-100 w-max transform hover:-translate-y-2 transition-all duration-300">
										<div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-[1.25rem] flex items-center justify-center text-yellow-600 font-black text-3xl shadow-inner border border-yellow-200">
											4.9
										</div>
										<div className="pr-4">
											<div className="flex text-yellow-500 mb-1 gap-0.5">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														size={16}
														fill="currentColor"
														strokeWidth={1}
													/>
												))}
											</div>
											<p className="text-lg font-black text-gray-900 leading-none mb-1">
												10k+ Students
											</p>
											<p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
												<ShieldCheck
													size={12}
													className="text-green-500"
												/>{' '}
												Verified Rating
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			
		</>
	);
};

export default Hero;
