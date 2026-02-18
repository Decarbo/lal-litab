import React from 'react';
import { CheckCircle2, Sparkles, ShieldOff, ShoppingBasket, Heart, BookOpen, Clock, Banknote, Layout, Zap, ArrowRightToLine, ArrowRight } from 'lucide-react';
const LalKitabPage = () => {
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

	return (
		<div className="min-h-screen bg-[#fafafa] pt-24 pb-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Breadcrumb / Small Header */}
				<div className="text-center mb-12">
					<h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
						Lal <span className="text-[#B22222]">Kitab</span>
					</h2>
					<div className="h-1.5 w-24 bg-[#B22222] mx-auto rounded-full mb-4"></div>
					<p className="text-gray-500 font-bold uppercase tracking-widest text-sm">The Legend of the "Red Book"</p>
				</div>

				{/* Hero Card - Founder Tribute */}
				<div className="relative mb-24">
					<div className="absolute inset-0 bg-red-100 rounded-[50px] rotate-1 scale-[1.02] -z-10 opacity-50"></div>
					<div className="bg-[#B22222] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center relative">
						{/* Left: Portrait Section */}
						<div className="w-full md:w-2/5 p-12 flex justify-center">
							<div className="relative group">
								<div className="absolute -inset-4 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all"></div>
								<div className="relative w-64 h-64 rounded-full border-8 border-white/30 p-2 overflow-hidden shadow-2xl">
									<div className="w-full h-full rounded-full bg-white overflow-hidden">
										<img
											src="https://lalkitabwithkunwarji.com/assets/lalkitab-CPDVCSxM.png"
											alt="Pandit Roop Chand Joshi Ji"
											className="w-full h-full object-cover scale-125 transform origin-left translate-l-40  "
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Right: Text Content */}
						<div className="w-full md:w-3/5 p-12 text-center md:text-left text-white space-y-6">
							<div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">Lal Kitab Founder</div>
							<h3 className="text-4xl md:text-5xl font-black leading-tight">पंडित रूप चंद जोशी जी</h3>
							<p className="text-xl text-red-100 font-medium">( 18 जनवरी 1898 - 24 दिसंबर 1982 )</p>
							<div className="space-y-2 opacity-90">
								<p className="text-lg leading-relaxed">
									गांव फरवाला, तहसील फिलौर <br />
									नूरमहल, जालंधर, पंजाब
								</p>
							</div>
							<div className="pt-4">
								<button className="px-8 py-3 bg-white text-[#B22222] rounded-2xl font-black shadow-lg hover:bg-red-50 transition-colors uppercase text-sm tracking-tighter">Explore Legacy</button>
							</div>
						</div>

						{/* Decorative Om Symbol */}
						<div className="absolute top-10 right-10 text-white/5 font-black text-[12rem] select-none">ॐ</div>
					</div>
				</div>

				<section className="py-16 bg-white">
					<div className="max-w-4xl mx-auto px-6">
						<div className="mb-12 text-center md:text-left">
							<h2 className="text-3xl font-black text-gray-900 mb-2">
								Lal Kitab is <span className="text-[#B22222]">Famous</span> For:
							</h2>
							<div className="h-1 w-20 bg-[#B22222] rounded-full"></div>
						</div>

						<div className="grid gap-4">
							{features.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-5 p-5 rounded-2xl bg-[#fafafa] border border-gray-100 hover:border-red-200 hover:bg-white hover:shadow-md transition-all duration-300 group">
									<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
									<p className="text-lg font-semibold text-gray-700 leading-tight">{item.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Banner */}
				<div className="mt-24 p-12 rounded-[40px] bg-gray-900 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
					<div className="relative z-10 text-center md:text-left">
						<h4 className="text-red-500 font-bold mb-2">Want to learn more?</h4>
						<h3 className="text-3xl font-black">Unlock the secrets of your future.</h3>
					</div>
					<button className="relative z-10 px-10 py-5 bg-[#B22222] text-white rounded-2xl font-black shadow-2xl hover:bg-red-700 transition-all flex items-center gap-3">
						Join Basic Course{' '}
						<ArrowRight
							size={20}
							fill="currentColor"
						/>
					</button>

					{/* Background decoration */}
					<div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>
					<div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]"></div>
				</div>
			</div>
		</div>
	);
};

export default LalKitabPage;
