import Image from 'next/image';
import React from 'react';


const Gallery = () => {

const images = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image5.png",
  "/image6.png",
];


const marqueeImages = [...images, ...images];

	return (
		<div>
			{/* 4. IMAGE MARQUEE SECTION */}
			<section className="relative z-20 w-full py-20 bg-white border-t border-orange-50 overflow-hidden animate-[blurReveal_1s_ease-out_0.8s_both]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-yatra drop-shadow-sm">OUR GLIMPSE</h2>
					<div className="h-1 w-24 bg-orange-400 mx-auto mt-4 rounded-full"></div>
					<p className="text-gray-500 mt-4 max-w-2xl mx-auto">See the vibrant moments and experiences of our growing community.</p>
				</div>

				<div className="relative flex overflow-hidden w-full group">
					{/* Gradient Masks for smooth fade on edges */}
					<div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
					<div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

					{/* Marquee Track container - left to right animation (reverse direction) */}
					<div className="flex gap-6 items-center w-max animate-[marquee_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused] px-3">
						{marqueeImages.map((src, index) => (
							<div
								key={index}
								className="w-72 h-48 md:w-96 md:h-64 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-orange-100 relative group/img cursor-pointer bg-gray-100">
								<img
									src={src}
									alt={`Gallery Image ${index + 1}`}
									loading="lazy"
									className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
								/>
								<div className="absolute inset-0 bg-[#B22222]/0 group-hover/img:bg-[#B22222]/20 transition-colors duration-500"></div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
