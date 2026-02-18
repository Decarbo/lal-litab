'use client';
import React from 'react';
import { BookOpen, Star, ShieldCheck, ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
	return (
		<section className="relative min-h-screen py-20  flex items-center overflow-hidden bg-[#fafafa]">
			{/* Modern Grid Background */}
			<div
				className="absolute inset-0 z-0 opacity-[0.03]"
				style={{
					backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
					backgroundSize: '40px 40px',
				}}></div>

			{/* Decorative Gradient Blobs */}
			<div className="absolute top-20 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50 z-0" />
			<div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 z-0" />

			<div className="max-w-7xl mx-auto mt-4 px-4 lg:px-8 z-10 w-full">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-8 animate-fade-in">
						<div className="space-y-6">
							<h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
								Master <span className="text-[#B22222] font-yatra">लाल किताब</span> <br />
								ज्योतिष विद्या
							</h1>

							<p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
								Join India's most trusted astrology platform and transform your passion into a career with <span className="text-gray-900 font-bold">Jyotis Guru Kunwar Ji.</span>
							</p>
						</div>

						{/* Modernized Form */}
						<div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50 relative group">
							<div className="absolute -top-3 -right-3 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">Limited Seats</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-1">Book Free Demo</h3>
							<p className="text-gray-500 text-sm mb-6">अपना विवरण भरें और क्लास शुरू करें</p>

							<form className="space-y-4">
								<div className="relative">
									<input
										type="text"
										placeholder="Full Name (पूरा नाम)"
										className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-red-400 focus:bg-white outline-none transition-all"
									/>
								</div>
								<div className="relative">
									<input
										type="email"
										placeholder="Email Address (ईमेल)"
										className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-red-400 focus:bg-white outline-none transition-all"
									/>
								</div>
								<button className="w-full py-4 bg-gradient-to-r from-[#B22222] to-red-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
									Join Now / अभी जुड़ें <ArrowRight size={20} />
								</button>
							</form>
						</div>
					</div>

					{/* Right Section */}
					<div className="relative">
						<div className="relative z-10 w-full max-w-[550px] mx-auto">
							{/* Outer Decorative Circle */}
							<div className="aspect-square rounded-full border-2 border-dashed border-red-200 p-6  relative">
								{/* Inner Image Container */}
								<div className="w-full h-full rounded-full overflow-hidden bg-white border-[12px] border-white shadow-2xl relative">
									<img
										src="https://lalkitabwithkunwarji.com/assets/homeimg-BCSN4SKr.png"
										alt="Guru Kunwar Ji"
										className="w-full h-full object-cover scale-125 transform origin-right translate-y-4"
									/>
								</div>

								{/* Social Proof Icons (Referencing Image 2) */}
								<div className="absolute top-10 -left-4 animate-pulse delay-100 bg-white p-3 rounded-2xl shadow-lg">
									<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
										<PlayCircle size={24} />
									</div>
								</div>
								<div className="absolute bottom-20 -right-2 animate-pulse bg-white p-3 rounded-2xl shadow-lg">
									<div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600 text-lg font-bold">ॐ</div>
								</div>
							</div>

							{/* Floating Badge */}
							<div className="absolute -bottom-5 right-10 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-gray-50 animate-fade-in-up">
								<div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 font-black text-2xl shadow-inner">4.9</div>
								<div>
									<div className="flex text-orange-400 mb-1">
										<Star
											size={12}
											fill="currentColor"
										/>
										<Star
											size={12}
											fill="currentColor"
										/>
										<Star
											size={12}
											fill="currentColor"
										/>
										<Star
											size={12}
											fill="currentColor"
										/>
										<Star
											size={12}
											fill="currentColor"
										/>
									</div>
									<p className="text-sm font-bold text-gray-800">10k+ Students</p>
									<p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Trusted Nationwide</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
