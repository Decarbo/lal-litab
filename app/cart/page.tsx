'use client';

import React from 'react';
import { Trash2, ShoppingBag, ArrowLeft, ShieldCheck, Zap, CreditCard, Book, Compass, ArrowRight } from 'lucide-react';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

// Background Geometry Component (Copied from Courses)
const BackgroundGeometry = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
     {/* Grid Pattern */}
    <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
    />
    
    <div className="absolute top-10 left-10 text-orange-400 opacity-10 animate-spin-slow">
      <Book size={400} strokeWidth={0.5} />
    </div>
    <div className="absolute bottom-10 right-10 text-[#B22222] opacity-5 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
      <Compass size={500} strokeWidth={0.5} />
    </div>
  </div>
);

const CartPage = () => {
	const { cart, removeFromCart, getCartTotal } = useCart();

	const subtotal = getCartTotal();
	const gst = subtotal * 0.18; // Example GST
	const total = subtotal + gst;

	return (
		<div className="min-h-screen relative py-24 overflow-hidden bg-[#fafafa]">
            <BackgroundGeometry />
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">Secure Checkout</span>
                    </div>
					<h2 className="text-5xl md:text-6xl font-yatra text-gray-900 mb-6 drop-shadow-sm">
						Your <span className="text-[#B22222] relative inline-block">
							Cart
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-orange-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Review your selected courses and proceed to payment.
                         <span className="block mt-2 text-sm font-bold text-[#B22222] uppercase tracking-widest">
                            {cart.length} Items in Basket
                        </span>
                    </p>
				</div>

				<div className="grid lg:grid-cols-3 gap-10">
					{/* Left Side: Cart Items */}
					<div className="lg:col-span-2 space-y-6">
						{cart.length > 0 ? (
							cart.map((item) => (
								<div
									key={item.id}
									className="bg-white/90 backdrop-blur-sm rounded-[32px] p-6 shadow-xl border border-white/50 flex flex-col md:flex-row items-center gap-6 group hover:shadow-2xl transition-all hover:border-orange-200">
									{/* Item Image */}
									<div className="w-32 h-32 rounded-2xl overflow-hidden bg-red-50 flex-shrink-0">
                                        {/* Use a default image if none provided */}
										<img
											src={item.image || "https://lalkitabwithkunwarji.com/assets/homeimg-BCSN4SKr.png"}
											alt={item.title}
											className="w-full h-full object-cover scale-110"
										/>
									</div>

									{/* Item Info */}
									<div className="flex-grow text-center md:text-left">
										<div className="inline-block px-3 py-1 bg-red-50 text-[#B22222] text-[10px] font-black uppercase rounded-full mb-2 border border-red-100">Popular Choice</div>
										<h3 className="text-2xl font-bold font-yatra text-gray-900 leading-tight mb-1">{item.title}</h3>
                                        <h4 className="text-lg font-bold text-[#B22222] mb-2">{item.titleHi}</h4>
										<p className="text-gray-500 font-medium text-sm mt-1">{item.description}</p>
									</div>

									{/* Price and Remove */}
									<div className="flex flex-col items-center md:items-end gap-4">
										<p className="text-3xl font-black text-gray-900 font-yatra">₹{item.price}/-</p>
										<button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-3 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded-xl transition-all border border-gray-100 hover:border-red-100">
											<Trash2 size={20} />
										</button>
									</div>
								</div>
							))
						) : (
							<div className="text-center py-20 bg-white/60 backdrop-blur-sm rounded-[40px] border-2 border-dashed border-orange-200">
								<ShoppingBag className="mx-auto h-16 w-16 text-orange-200 mb-4" />
                                <p className="text-gray-500 font-bold text-xl mb-6">Your cart is empty.</p>
                                <Link href="/courses">
                                    <button className="px-8 py-4 bg-[#B22222] text-white rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                                        <ArrowLeft size={18} /> Browse Courses
                                    </button>
                                </Link>
							</div>
						)}
					</div>

					{/* Right Side: Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white/80 backdrop-blur-md rounded-[40px] p-8 shadow-xl border border-white/50 sticky top-28">
							<h3 className="text-2xl font-bold font-yatra text-gray-900 mb-8 pb-4 border-b border-gray-100">Order Summary</h3>

							<div className="space-y-4 mb-8">
								<div className="flex justify-between font-bold text-gray-500">
									<span>Subtotal</span>
									<span>₹{subtotal.toLocaleString()}/-</span>
								</div>
								<div className="flex justify-between font-bold text-gray-500">
									<span>Estimated Tax (GST 18%)</span>
									<span>₹{gst.toLocaleString()}/-</span>
								</div>
								<div className="h-px bg-gray-100 my-4"></div>
								<div className="flex justify-between items-end">
									<span className="text-gray-900 font-black text-lg">Total Amount</span>
									<span className="text-3xl font-black text-[#B22222] font-yatra">₹{total.toLocaleString()}/-</span>
								</div>
							</div>

							<div className="space-y-4">
								<button className="w-full py-5 bg-[#B22222] text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-100 hover:bg-red-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3">
                                    Checkout Now <ArrowRight size={20} />
                                </button>

								<div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
									<CreditCard size={14} /> Supported: UPI, Cards, Netbanking
								</div>
							</div>

							{/* Promo Code */}
							<div className="mt-8 pt-8 border-t border-gray-100">
								<p className="text-sm font-bold text-gray-700 mb-3">Have a coupon?</p>
								<div className="flex gap-2">
									<input
										type="text"
										placeholder="LALKITAB2026"
										className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-red-200 transition-all font-bold uppercase text-sm"
									/>
									<button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-colors">Apply</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
