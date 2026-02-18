'use client';
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex items-center justify-center pt-20 bg-white p-6">
			<div className="w-full max-w-md mt-10">
				{/* Header Section */}
				<div className="text-center mb-10">
					<p className="text-gray-500 font-medium">अपनी पढ़ाई जारी रखने के लिए लॉगिन करें</p>
					<div className="h-1 w-12 bg-[#B22222] mx-auto mt-4 rounded-full"></div>
				</div>

				{/* Form Section */}
				<form
					className="space-y-6"
					onSubmit={(e) => e.preventDefault()}>
					<div className="space-y-1">
						<label className="text-sm font-bold text-gray-700 ml-1">Email Address*</label>
						<div className="relative group">
							<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#B22222] transition-colors">
								<Mail size={20} />
							</div>
							<input
								type="email"
								placeholder="name@example.com"
								className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#B22222] focus:bg-white transition-all font-medium"
								required
							/>
						</div>
					</div>

					<div className="space-y-1">
						<label className="text-sm font-bold text-gray-700 ml-1">Password*</label>
						<div className="relative group">
							<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#B22222] transition-colors">
								<Lock size={20} />
							</div>
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder="••••••••"
								className="block w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#B22222] focus:bg-white transition-all font-medium"
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors">
								{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
							</button>
						</div>
					</div>

					<div className="flex items-center justify-between px-1">
						<label className="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								className="w-4 h-4 rounded border-gray-300 text-[#B22222] focus:ring-[#B22222]"
							/>
							<span className="text-sm text-gray-600 font-medium">Remember me</span>
						</label>
						<button
							type="button"
							className="text-sm font-bold text-[#B22222] hover:underline">
							Forgot Password?
						</button>
					</div>

					<button
						type="submit"
						className="w-full py-4 bg-[#B22222] text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-100 hover:bg-red-700 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 group">
						Sign In{' '}
						<ArrowRight
							size={20}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>
				</form>

				{/* Footer Section */}
				<div className="mt-8 text-center">
					<p className="text-gray-500 font-medium">
						Don't have an account?
						<Link href="/auth/sign-up">
							<button className="text-[#B22222] font-black hover:underline underline-offset-4">Create Account</button>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
