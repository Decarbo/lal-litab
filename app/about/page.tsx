import React from 'react';
import { CheckCircle, Award, Star } from 'lucide-react';

const AboutUs = () => {
	const studentBaseLeft = ['Vedic Astrologers', 'Palmists', 'Vaastu Experts', 'Tarot Card Readers', 'Numerologists', 'Ramal Experts', 'Nadi Experts', 'KP Astrologers'];

	const studentBaseRight = ['Retired individuals', 'Teachers', 'Professors', 'Advocates', 'Doctors', 'Engineers', 'Architects', 'Housewives'];

	return (
		<div className="bg-[#fafafa] py-20">
			<div className="max-w-6xl mx-auto px-6">
				{/* About Kunwar Ji Section */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-black text-gray-900 mb-8">About Kunwar Ji</h2>

					<div className="relative inline-block mb-10">
						{/* The Zodiac Circle from the image */}

						<div className="   md:h-56 ">
							<img
								src="https://lalkitabwithkunwarji.com/assets/about-BavIcsiY.png"
								alt="Kunwar Ji"
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
					</div>

					<div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed font-medium">
						<p>
							World-renowned Lal Kitab Teacher, <span className="text-[#B22222] font-bold">Kunwar Ji</span>, has dedicated the last 26 years to mastering and teaching the Lal Kitab Astrology System.
						</p>
						<p>With an impressive track record, he has taught over 32,000 students across 14 countries through face-to-face (Workshops) and online courses.</p>
						<p>Mentored students who have become successful astrologers, trainers, and practitioners worldwide.</p>
					</div>
				</div>

				{/* Diverse Student Base Section */}
				<div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-10 md:p-16 relative overflow-hidden">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-black text-gray-900 mb-2">Diverse Student Base</h3>
						<p className="text-gray-500 font-bold">Kunwar Ji's students come from various backgrounds, including:</p>
					</div>

					<div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
						{/* Left Column */}
						<div className="space-y-4">
							{studentBaseLeft.map((item, idx) => (
								<div
									key={idx}
									className="flex items-center gap-3 group">
									<div className="w-2 h-2 bg-[#B22222] rounded-full group-hover:scale-150 transition-transform"></div>
									<span className="text-lg text-gray-700 font-semibold">{item}</span>
								</div>
							))}
						</div>

						{/* Right Column */}
						<div className="space-y-4">
							{studentBaseRight.map((item, idx) => (
								<div
									key={idx}
									className="flex items-center gap-3 group">
									<div className="w-2 h-2 bg-[#B22222] rounded-full group-hover:scale-150 transition-transform"></div>
									<span className="text-lg text-gray-700 font-semibold">{item}</span>
								</div>
							))}
						</div>
					</div>

					{/* Decorative Corner Element */}
					<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-60"></div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
