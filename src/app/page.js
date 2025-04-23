"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import digital from "@/utils/digital";

const Homepage = () => {
	return (
		<motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
			<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				{/* IMAGE CONTAINER */}
				<div className="h-1/2 lg:h-full lg:w-1/2 relative">
					<Image
						src="/hero.png"
						alt=""
						fill
						className="object-contain"
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
				</div>
				{/* TEXT CONTAINER */}
				<div className="h-1/2 flex lg:h-full lg:w-1/2 flex-col gap-4 md:gap-6 lg:gap-8 items-center justify-center my-16 sm:my-0 ">
					{/* TITLE */}
					<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold"> {digital.title}</h1>
					{/* DESCRIPTION */}
					<p className="">{digital.desc}</p>
					{/* BUTTONS */}
					<div className="w-full flex flex-col sm:flex-row gap-4">
						<Link href="/portfolio">
							<button className="w-full p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white hover:text-black hover:bg-white cursor-pointer">View My Work</button>
						</Link>
						<Link href="/contact">
							<button className="w-full p-2 md:p-4 rounded-lg ring-1 ring-black hover:text-white hover:bg-black hover:ring-white cursor-pointer">Contact Me</button>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	)
};

export default Homepage;