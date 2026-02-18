import React from 'react';
import { Trash2, ShoppingBag, ArrowLeft, ShieldCheck, Zap, CreditCard } from 'lucide-react';

const CartPage = () => {
	// Mock data based on the courses identified in the original site
	const cartItems = [
		{
			id: 1,
			name: 'Advance Course (एडवांस कोर्स)',
			instructor: 'Jyotis Guru Kunwar Ji',
			price: 8000,
			image: 'https://lalkitabwithkunwarji.com/assets/homeimg-BCSN4SKr.png',
		},
	];

	const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
	const gst = subtotal * 0.18; // Example GST
	const total = subtotal + gst;

	return (
		<div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="flex items-center justify-between mb-10">
					<div>
						<h1 className="text-4xl font-black text-gray-900 flex items-center gap-3">
							Your <span className="text-[#B22222]">Cart</span> <ShoppingBag className="text-[#B22222]" />
						</h1>
						<p className="text-gray-500 font-medium mt-1">You have {cartItems.length} items in your basket</p>
					</div>
					{/* <button className="flex items-center gap-2 text-gray-500 hover:text-[#B22222] font-bold transition-colors">
						<ArrowLeft size={20} /> Back to Courses
					</button> */}
				</div>

				<div className="grid lg:grid-cols-3 gap-10">
					{/* Left Side: Cart Items */}
					<div className="lg:col-span-2 space-y-6">
						{cartItems.length > 0 ? (
							cartItems.map((item) => (
								<div
									key={item.id}
									className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 group hover:shadow-md transition-shadow">
									{/* Item Image */}
									<div className="w-32 h-32 rounded-2xl overflow-hidden bg-red-50 flex-shrink-0">
										<img
											src={item.image}
											alt={item.name}
											className="w-full h-full object-cover scale-110"
										/>
									</div>

									{/* Item Info */}
									<div className="flex-grow text-center md:text-left">
										<div className="inline-block px-3 py-1 bg-red-50 text-[#B22222] text-[10px] font-black uppercase rounded-full mb-2">Popular Choice</div>
										<h3 className="text-xl font-black text-gray-900 leading-tight">{item.name}</h3>
										<p className="text-gray-500 font-medium text-sm mt-1">by {item.instructor}</p>
									</div>

									{/* Price and Remove */}
									<div className="flex flex-col items-center md:items-end gap-4">
										<p className="text-2xl font-black text-gray-900">₹{item.price}/-</p>
										<button className="p-3 text-gray-300 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-xl transition-all">
											<Trash2 size={20} />
										</button>
									</div>
								</div>
							))
						) : (
							<div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-200">
								<p className="text-gray-400 font-bold">Your cart is empty.</p>
							</div>
						)}
					</div>

					{/* Right Side: Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-50 sticky top-28">
							<h3 className="text-2xl font-black text-gray-900 mb-8">Order Summary</h3>

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
									<span className="text-gray-900 font-black">Total Amount</span>
									<span className="text-3xl font-black text-[#B22222]">₹{total.toLocaleString()}/-</span>
								</div>
							</div>

							<div className="space-y-4">
								<button className="w-full py-5 bg-[#B22222] text-white rounded-2xl font-black text-lg shadow-xl shadow-red-100 hover:bg-red-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3">Checkout Now </button>

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
