'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const { cart } = useCart();
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Lal Kitab', href: '/lal-kitab' },
		{ name: 'About', href: '/about' },
	];

	return (
		<nav className={`fixed w-full z-[100] transition-all duration-500 border-b ${scrolled ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-gray-100 py-3' : 'bg-transparent border-transparent py-5'}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-14">
					{/* Logo Section */}
					<Link
						href="/"
						className="group flex-shrink-0 flex items-center gap-2 relative z-50">
						<div className="relative overflow-hidden rounded-lg">
							<Image
								src="/logolap.svg"
								alt="Lal Kitab with Guru Kunwar Ji"
								width={160}
								height={45}
								className="w-auto h-10 md:h-12 object-contain transition-transform duration-500 group-hover:scale-105"
								priority
							/>
							{/* subtle shine effect on hover */}
							<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 pointer-events-none"></div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1 lg:space-x-2">
						{navLinks.map((link) => {
							const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
							return (
								<Link
									key={link.name}
									href={link.href}
									className={`relative px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 group overflow-hidden
                                        ${isActive ? 'text-[#B22222]' : 'text-gray-700 hover:text-[#B22222]'}`}>
									<span className="relative z-10">{link.name}</span>
									{/* Hover Background */}
									<div className={`absolute inset-0 bg-red-50 -z-0 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-center ${isActive ? 'scale-100 opacity-100 bg-red-50/80' : ''}`}></div>
								</Link>
							);
						})}
					</div>

					{/* Right Side Icons & CTA - Restored & Improved */}
					<div className="hidden md:flex items-center space-x-6">
						{/* <Link href="/auth/login">
							<button className="flex items-center gap-2 bg-[#B22222] text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-[0_4px_14px_0_rgba(178,34,34,0.39)] hover:shadow-[0_6px_20px_rgba(178,34,34,0.23)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group overflow-hidden relative">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
								<User size={18} className="relative z-10" />
								<span className="relative z-10 font-bold">Login</span>
							</button>
						</Link> */}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center relative z-50">
						<Link
							href="/cart"
							className="mr-4 relative group">
							<button className="text-gray-600 hover:text-[#B22222] p-1.5 rounded-full hover:bg-red-50 transition-colors">
								<ShoppingCart size={22} />
								{cart.length > 0 && <span className="absolute -top-1 -right-1 bg-[#B22222] text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center border border-white">{cart.length}</span>}
							</button>
						</Link>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${isOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'}`}>
							{isOpen ? (
								<X
									size={24}
									className="animate-in spin-in-90 duration-300"
								/>
							) : (
								<Menu
									size={24}
									className="animate-in spin-in-[-90deg] duration-300"
								/>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Sidebar */}
			<div className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-[40] md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-[105%]'}`}>
				<div className="p-6 flex flex-col h-full pt-24 overflow-y-auto">
					<div className="flex flex-col space-y-2">
						{navLinks.map((link, index) => {
							const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
							return (
								<Link
									key={link.name}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className={`flex items-center justify-between p-4 rounded-2xl font-bold transition-all duration-300 ${isActive ? 'bg-red-50 text-[#B22222]' : 'text-gray-800 hover:bg-gray-50 hover:text-[#B22222]'}`}
									style={{
										transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
										opacity: isOpen ? 1 : 0,
										transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
										transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
									}}>
									{link.name}
									<ChevronRight
										size={18}
										className={`transition-transform duration-300 ${isActive ? 'translate-x-1' : 'opacity-50'}`}
									/>
								</Link>
							);
						})}
					</div>

					<div
						className="mt-auto pt-8 border-t border-gray-100 space-y-4"
						style={{
							opacity: isOpen ? 1 : 0,
							transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
							transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
						}}>
						<Link
							href="/auth/login"
							onClick={() => setIsOpen(false)}>
							<button className="w-full flex justify-center items-center gap-2 bg-[#B22222] text-white py-4 rounded-xl font-bold shadow-[0_8px_25px_rgba(178,34,34,0.3)] hover:shadow-[0_12px_30px_rgba(178,34,34,0.4)] hover:bg-red-700 active:scale-95 transition-all duration-300 group">
								<User
									size={20}
									className="group-hover:scale-110 transition-transform"
								/>
								Student Login
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Overlay for Mobile Menu */}
			<div
				className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[30] md:hidden transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
				onClick={() => setIsOpen(false)}
			/>
		</nav>
	);
};

export default Navbar;
