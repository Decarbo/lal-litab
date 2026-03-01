'use client';

import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, Clock, CheckCircle2, ShoppingCart, ArrowRight, Zap, Book, Compass, Star, Sun } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { time } from 'console';

// --- Components ---

// 2. Background Geometry
const BackgroundGeometry = () => (
	<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
		{/* Grid Pattern */}
		<div className="absolute inset-0 z-0 opacity-[0.11] ">
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
			lectures: 2,
			price: 4500,
			time: '120 minutes',
			duration: '3 Months',
			mode: 'Video ( Private Email )',
			description: 'Master the fundamentals of Lal Kitab astrology from scratch.',
			features: ['Pitra Dosha Basics', 'Planet Significators', 'House Analysis'],
			color: 'from-orange-500 to-red-600',
			popular: false,
		},
		{
			id: 2,
			title: 'Advance Course',
			lectures: 2,
			price: 6000,
			time: '120 minutes',
			duration: '12 Months',
			mode: 'Video ( Private Email )',
			description: 'Master the fundamentals of Lal Kitab astrology from scratch.',
			features: ['Pitra Dosha Basics', 'Planet Significators', 'House Analysis'],
			color: 'from-orange-500 to-red-600',
			popular: false,
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
						Available{' '}
						<span className="text-[#B22222] relative inline-block">
							Courses
							<svg
								className="absolute w-full h-3 -bottom-2 left-0 text-orange-400 opacity-60"
								viewBox="0 0 100 10"
								preserveAspectRatio="none">
								<path
									d="M0 5 Q 50 10 100 5"
									stroke="currentColor"
									strokeWidth="2"
									fill="none"
								/>
							</svg>
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Choose the right path for your spiritual journey. From basic principles to professional mastery.</p>
				</div>

				<div className="w-full max-w-7xl  mx-auto px-4 py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-between">
						{courses.map((course) => (
							<div
								key={course.id}
								className="relative w-full max-w-[500px] mx-auto bg-[#C41E1E] rounded-[30px] p-8 shadow-2xl flex flex-col items-center text-center overflow-hidden border-b-8 border-black/20 transition-all duration-300 hover:-translate-y-2">
								{/* Top White Header Section */}
								<div className="w-full bg-white rounded-[25px] py-8 px-4 mb-10 shadow-lg relative z-10 min-h-[220px] flex flex-col justify-center">
									<h3 className="text-[#B22222] text-4xl font-bold mb-2">{course.title}</h3>
									<p className="text-[#B22222] text-xl font-semibold mb-4">Admission Open</p>
									<div className="flex justify-center">
										<Image
											src="/copy.svg"
											alt="Book"
											width={60}
											height={60}
											className="text-[#B22222]"
										/>
									</div>
								</div>

								{/* Pricing Pill */}
								<div className="w-full bg-white rounded-full py-4 mb-8 shadow-md">
									<span className="text-black text-md font-bold">Duration : {course.duration}</span>
								</div>
								<div className="w-full bg-white rounded-full py-4 mb-8 shadow-md">
									<span className="text-black text-md font-bold">Weekly : {course.lectures} lectures</span>
								</div>
								<div className="w-full bg-white rounded-full py-4 mb-8 shadow-md">
									<span className="text-black text-md font-bold">Each Lecture : {course.time}</span>
								</div>
								<div className="w-full bg-white rounded-full py-4 mb-8 shadow-md">
									<span className="text-black text-md font-bold">Class via : {course.mode}</span>
								</div>
								<div className="w-full bg-white rounded-full py-4 mb-8 shadow-md">
									<span className="text-black text-md font-bold">Fees : Rs. {course.price}/- pm</span>
								</div>

								{/* Action Buttons */}

								{/* Decorative inner shadow */}
								<div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-black/5 to-transparent"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
