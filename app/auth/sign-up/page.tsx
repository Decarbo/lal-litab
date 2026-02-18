'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const CreateAccount = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 lg:p-8">
			<div className="w-full max-w-md  ">
				{/* Left Side: Signup Form */}
				<div className=" p-8 lg:p-16 bg-white">
					<div className="max-w-md mx-auto">
						<div className="mb-10 text-center lg:text-left">
							<h3 className="text-3xl font-black text-gray-900 mb-2">Create Account</h3>
							<p className="text-gray-500 font-medium">अपना निःशुल्क डेमो क्लास शुरू करने के लिए रजिस्टर करें</p>
						</div>

						<form
							className="space-y-5"
							onSubmit={(e) => e.preventDefault()}>
							{/* Full Name */}
							<div className="space-y-1">
								<label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
								<div className="relative group">
									<User
										className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#B22222] transition-colors"
										size={20}
									/>
									<input
										type="text"
										placeholder="John Doe"
										className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#B22222] focus:bg-white transition-all font-bold"
									/>
								</div>
							</div>

							{/* Email */}
							<div className="space-y-1">
								<label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
								<div className="relative group">
									<Mail
										className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#B22222] transition-colors"
										size={20}
									/>
									<input
										type="email"
										placeholder="name@example.com"
										className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#B22222] focus:bg-white transition-all font-bold"
									/>
								</div>
							</div>

							{/* Phone */}
							<div className="space-y-1">
								<label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
								<div className="relative group">
									<Phone
										className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#B22222] transition-colors"
										size={20}
									/>
									<input
										type="tel"
										placeholder="+91 00000 00000"
										className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#B22222] focus:bg-white transition-all font-bold"
									/>
								</div>
							</div>

							{/* Password */}
							<div className="space-y-1">
								<label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
								<div className="relative group">
									<Lock
										className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#B22222] transition-colors"
										size={20}
									/>
									<input
										type={showPassword ? 'text' : 'password'}
										placeholder="••••••••"
										className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#B22222] focus:bg-white transition-all font-bold"
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#B22222]">
										{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
									</button>
								</div>
							</div>

							<div className="pt-2">
								<button className="w-full py-5 bg-[#B22222] text-white rounded-2xl font-black text-lg shadow-xl shadow-red-100 hover:bg-red-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
									Register Now{' '}
									<ArrowRight
										size={20}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</button>
							</div>
						</form>

						<div className="mt-10 text-center">
							<p className="text-gray-500 font-bold">
								Already have an account?
								<Link href="/auth/login">
									<button className="text-[#B22222] hover:underline underline-offset-4 font-black">Sign In</button>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
