import React from 'react';
import { BookOpen, Clock, CheckCircle2, ShoppingCart, ArrowRight, Zap } from 'lucide-react';

const Courses = () => {
	const courses = [
		{
			id: 1,
			title: 'Basic Course',
			titleHi: 'बेसिक कोर्स',
			lectures: 16,
			duration: '120 min / lecture',
			price: '6000',
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
			price: '8000',
			description: 'In-depth remedies and complex chart calculations for professionals.',
			features: ['Varshphal Analysis', 'Advanced Remedies', 'Professional Practice'],
			color: 'from-[#B22222] to-red-900',
			popular: true,
		},
	];

	return (
		<section className="py-24 bg-[#fafafa] relative overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

			<div className="max-w-7xl mx-auto px-4 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<h4 className="text-[#B22222] font-bold uppercase tracking-widest text-sm">Our Curriculum</h4>
					<h2 className="text-4xl md:text-5xl font-black text-gray-900">
						Available <span className="text-[#B22222]">Courses</span>
					</h2>
					<p className="text-gray-500 max-w-2xl mx-auto font-medium">Choose the right path for your spiritual journey. From basic principles to professional mastery.</p>
				</div>

				{/* Course Grid */}
				<div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
					{courses.map((course) => (
						<div
							key={course.id}
							className={`relative group bg-white rounded-[40px] p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${course.popular ? 'ring-2 ring-[#B22222]' : ''}`}>
							{course.popular && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B22222] text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
									<Zap
										size={14}
										fill="currentColor"
									/>{' '}
									Most Popular
								</div>
							)}

							{/* Course Header */}
							<div className="mb-8">
								<div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
									<BookOpen size={32} />
								</div>
								<h3 className="text-3xl font-bold text-gray-900 mb-1">{course.title}</h3>
								<p className="text-[#B22222] font-bold text-lg mb-4">{course.titleHi}</p>
								<p className="text-gray-500 text-sm leading-relaxed">{course.description}</p>
							</div>

							{/* Stats Grid */}
							<div className="grid grid-cols-2 gap-4 mb-8">
								<div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3 border border-gray-100">
									<PlayCircleIcon className="text-[#B22222]" />
									<div>
										<p className="text-xs text-gray-400 font-bold uppercase">Lectures</p>
										<p className="text-sm font-bold text-gray-800">{course.lectures} Units</p>
									</div>
								</div>
								<div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3 border border-gray-100">
									<Clock
										className="text-[#B22222]"
										size={20}
									/>
									<div>
										<p className="text-xs text-gray-400 font-bold uppercase">Duration</p>
										<p className="text-sm font-bold text-gray-800">120 Min</p>
									</div>
								</div>
							</div>

							{/* Features List */}
							<div className="space-y-3 mb-10">
								{course.features.map((feat, i) => (
									<div
										key={i}
										className="flex items-center gap-3 text-gray-600 font-medium">
										<CheckCircle2
											size={18}
											className="text-green-500"
										/>
										<span>{feat}</span>
									</div>
								))}
							</div>

							{/* Pricing & CTA */}
							<div className="pt-6 border-t border-gray-100">
								<div className="flex items-end justify-between mb-6">
									<div>
										<p className="text-gray-400 text-xs font-bold uppercase">Course Fees</p>
										<p className="text-3xl font-black text-gray-900">₹{course.price}/-</p>
									</div>
									<div className="text-right">
										<p className="text-green-600 font-bold text-sm">Admission Open</p>
										<p className="text-xs text-gray-400">Limited batches</p>
									</div>
								</div>

								<div className="flex gap-3">
									<button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 group/btn">
										<ShoppingCart size={18} /> Add to Cart
									</button>
									<button className="flex-1 bg-[#B22222] text-white py-4 rounded-2xl font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all flex items-center justify-center gap-2">
										Buy Now{' '}
										<ArrowRight
											size={18}
											className="group-hover:translate-x-1 transition-transform"
										/>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const PlayCircleIcon = ({ className }: { className?: string }) => (
	<svg
		className={`w-5 h-5 ${className}`}
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

export default Courses;
