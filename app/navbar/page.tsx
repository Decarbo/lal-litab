'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Lal Kitab', href: 'lal-kitab' },
		{ name: 'Courses', href: 'courses' },
		{ name: 'About', href: 'about' },
	];

	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo Section */}
					<Link href="/">
						<div className="flex-shrink-0 flex items-center gap-2">
							<div className="w-10 h-10 bg-[#B22222] rounded-lg flex items-center justify-center shadow-md">
								<span className="text-white font-bold text-xl">LK</span>
							</div>
							<div className="flex flex-col">
								<span className={`font-bold text-xl leading-none ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>
									LAL <span className="text-[#B22222]">KITAB</span>
								</span>
								<span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Guru Kunwar Ji</span>
							</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-gray-700 hover:text-[#B22222] font-medium transition-colors duration-200">
								{link.name}
							</a>
						))}
					</div>

					{/* Right Side Icons & CTA */}
					<div className="hidden md:flex items-center space-x-5">
						<Link href="/cart">
							<button className="text-gray-600 hover:text-[#B22222] relative transition-colors">
								<ShoppingCart size={22} />
								<span className="absolute -top-2 -right-2 bg-[#B22222] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
							</button>
						</Link>
						<Link href="/auth/login">
							<button className="flex items-center gap-2 bg-[#B22222] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all shadow-md hover:shadow-lg active:scale-95">
								<User size={18} />
								Login
							</button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 hover:text-[#B22222] focus:outline-none">
							{isOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Sidebar */}
			<div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className="p-6 flex flex-col h-full">
					<div className="flex justify-end mb-8">
						<button
							onClick={() => setIsOpen(false)}
							className="text-gray-500">
							<X size={28} />
						</button>
					</div>

					<div className="flex flex-col space-y-6">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="text-xl font-semibold text-gray-800 hover:text-[#B22222]">
								{link.name}
							</a>
						))}
					</div>

					<div className="mt-auto pb-8 space-y-4">
						<Link href="/cart">
							<button className="w-full flex justify-center items-center gap-2 my-2 bg-gray-100 text-gray-800 py-3 rounded-xl font-bold">
								<ShoppingCart size={20} /> Cart
							</button>
						</Link>
						<Link href="/auth/login">
							<button className="w-full bg-[#B22222] text-white py-3 rounded-xl font-bold shadow-lg">Student Login</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Overlay for Mobile Menu */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50] md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</nav>
	);
};

export default Navbar;
