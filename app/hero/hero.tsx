'use client';
import React, { useState } from 'react';
import { BookOpen, Star, ShieldCheck, ArrowRight, PlayCircle, CheckCircle2, Loader2 } from 'lucide-react';

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

	return (
		<section className="relative min-h-screen py-20 flex items-center overflow-hidden bg-[#fafafa]">
			<div
				className="absolute inset-0 z-0 opacity-[0.03]"
				style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
			/>
			<div className="absolute top-20 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50 z-0" />
			<div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 z-0" />

			<div className="max-w-7xl mx-auto mt-4 px-4 lg:px-8 z-10 w-full">
				<div className="grid lg:grid-cols-2 gap-12 items-center mx-auto ">
					{/* Left Content */}
					<div className="space-y-8  flex flex-col items-center p-10  ">
						<div className="space-y-6">
							<h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
								Master <span className="text-[#B22222] font-yatra">लाल किताब</span> <br />
								ज्योतिष विद्या
							</h1>
							<p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
								Join India's most trusted astrology platform and transform your passion into a career with <span className="text-gray-900 font-bold">Jyotis Guru Kunwar Ji.</span>
							</p>
						</div>

						{/* Modernized Form / Success Message */}
						<div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50 relative">
							{!isSubmitted ? (
								<>
									<div className="absolute -top-3 -right-3 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">Limited Seats</div>
									<h3 className="text-2xl font-bold text-gray-800 mb-1">Book Free Demo</h3>
									<p className="text-gray-500 text-sm mb-6">अपना विवरण भरें और क्लास शुरू करें</p>

									<form
										className="space-y-4"
										onSubmit={handelSubmit}>
										<input
											type="text"
											name="name"
											required
											value={formData.name}
											onChange={handelChange}
											placeholder="Full Name (पूरा नाम)"
											className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-red-400 outline-none transition-all"
										/>
										<input
											type="email"
											name="email"
											required
											value={formData.email}
											onChange={handelChange}
											placeholder="Email Address (ईमेल)"
											className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-red-400 outline-none transition-all"
										/>
										<input
											type="tel"
											name="phone"
											required
											value={formData.phone}
											onChange={handelChange}
											placeholder="Phone Number (फोन नंबर)"
											className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-red-400 outline-none transition-all"
										/>

										<button
											disabled={isSubmitting}
											className="w-full py-4 bg-gradient-to-r from-[#B22222] to-red-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
											type="submit">
											{isSubmitting ? (
												<Loader2 className="animate-spin" />
											) : (
												<>
													Book Now <ArrowRight size={20} />
												</>
											)}
										</button>
									</form>
								</>
							) : (
								<div className="py-10 text-center animate-in fade-in zoom-in duration-500">
									<div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
										<CheckCircle2 size={40} />
									</div>
									<h3 className="text-3xl font-bold text-gray-900 mb-2">धन्यवाद! (Thank You)</h3>
									<p className="text-gray-600 mb-8">Your demo session has been booked. Our team will contact you shortly.</p>
									<button
										onClick={() => setIsSubmitted(false)}
										className="text-[#B22222] font-bold hover:underline">
										Submit another response
									</button>
								</div>
							)}
						</div>
					</div>

					{/* Right Section */}
					<div className="relative">
						<div className="relative z-10 w-full max-w-[550px] mx-auto">
							<div className="aspect-square rounded-full border-2 border-dashed border-red-200 p-6 relative">
								<div className="w-full h-full rounded-full overflow-hidden bg-white border-[12px] border-white shadow-2xl relative">
									<img
										src="https://lalkitabwithkunwarji.com/assets/homeimg-BCSN4SKr.png"
										alt="Guru Kunwar Ji"
										className="w-full h-full object-cover scale-125 transform origin-right translate-y-4"
									/>
								</div>
								<div className="absolute top-10 -left-4 animate-pulse bg-white p-3 rounded-2xl shadow-lg">
									<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
										<PlayCircle size={24} />
									</div>
								</div>
								<div className="absolute bottom-20 -right-2 bg-white p-3 rounded-2xl shadow-lg">
									<div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600 text-lg font-bold">ॐ</div>
								</div>
							</div>

							<div className="absolute -bottom-5 right-10 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-gray-50">
								<div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 font-black text-2xl shadow-inner">4.9</div>
								<div>
									<div className="flex text-orange-400 mb-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												size={12}
												fill="currentColor"
											/>
										))}
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
