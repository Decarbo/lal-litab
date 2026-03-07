'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10 overflow-hidden border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16 justify-between ">
					{/* Brand & About */}
					<div className="space-y-6">
						<div className=" flex items-center gap-3  max-w-4xl ">
							<Image
								src="/logo.png"
								alt="Lal Kitab with Guru Kunwar Ji"
								width={160}
								height={45}
								className="w-auto h-20 object-contain transition-transform duration-500 group-hover:scale-105"
								priority
							/>
						</div>

						<p className="text-gray-400 text-sm leading-relaxed max-w-sm">अब घर बैठे बैठे लाल किताब ज्योतिष सीखें</p>
						<div className="flex space-x-4 pt-2">
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B22222] hover:-translate-y-1 transition-all duration-300 group">
								<Youtube
									size={18}
									className="text-gray-400 group-hover:text-white transition-colors"
								/>
							</a>
						</div>
					</div>

					{/* Learning Paths */}
					<div className="space-y-6">
						<h4 className="text-lg font-bold text-white uppercase tracking-wider relative inline-block pb-2">
							Learning Paths
							<span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
						</h4>
						<ul className="space-y-3">
							{['Lal Kitab Basics', 'Advanced Prediction', 'Remedies & Solutions', 'Professional Consultations', 'Workshop Series'].map((item) => (
								<li key={item}>
									<Link
										href="#"
										className="text-gray-400 hover:text-orange-400 transition-colors flex items-center group text-sm">
										<ChevronRight
											size={14}
											className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-orange-500"
										/>
										<span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-6">
						<h4 className="text-lg font-bold text-white uppercase tracking-wider relative inline-block pb-2">
							Contact Us
							<span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
						</h4>
						<ul className="space-y-4">
							<li className="flex items-start">
								<MapPin
									size={18}
									className="text-orange-500 mr-3 mt-0.5 shrink-0"
								/>
								<span className="text-gray-400 text-sm leading-relaxed">Ahmedabad India</span>
							</li>
							<li className="flex items-center">
								<Phone
									size={18}
									className="text-orange-500 mr-3 shrink-0"
								/>
								<a
									href="tel:+918780442055"
									className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
									+91 8780442055
								</a>
							</li>
							<li className="flex items-center">
								<Mail
									size={18}
									className="text-orange-500 mr-3 shrink-0"
								/>
								<a
									href="mailto:info@lalkitab.com"
									className="text-gray-400 hover:text-white transition-colors text-sm">
									info@lalkitab.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
