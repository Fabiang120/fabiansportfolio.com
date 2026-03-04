"use client";

import { motion } from "framer-motion";
import { IoArrowForward, IoArrowBack, IoCodeSlash, IoTerminalOutline } from "react-icons/io5";
import SideNav from "../components/SideNav";
import { buttonVariants } from "../components/frameranims";

export default function FBAPage() {
    return (
        <>
            <SideNav />
            <div className="flex flex-col">
                <div className="relative h-screen flex flex-col align-center">
                    <img src="/images/work.jpg" alt="Secret boxes from a secret company" className="absolute inset-0 w-full h-full opacity-20 -z-10" />
                    <div className="relative z-10 px-80 py-45">
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">C++ Backend & API Integration</motion.p>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[2rem] sm:text-[3rem] md:text-5xl font-semibold tracking-tight leading-tight">Amazon FBA Sourcing Optimizer</motion.h1>
                        <p>A backend application I built to parse wholesale catalogs and ping Amazon's Selling Partner API to find profitable items I believed in to sell.</p>
                    </div>
                </div>
                <div className="h-screen px-80 py-45 flex flex-col align-center gap-28">
                    <div className="px-35">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight">The Obstacle</motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300 text-pretty max-w-lg">Cross-referencing thousads of rows of supplier pricing data agains tlive Amazon catalog pricing manually was an operational bottleneck that tooks hours every single day. Speaking with businesses and hearing their stories is what I wanted to focus on, hence my primary goal was to automate this tedious process. I wanted to making my purchasing decisions instant and driven by real time data.</motion.p>
                    </div>
                    <img src="/images/excel.png" alt="An excel sheet from a secret company" />
                </div>
                <div className="h-screen mt-80 px-80 py-45 flex flex-col align-center">
                    <div className="px-35">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight">Architecture</motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300 text-pretty max-w-lg">This C++ Application utilizes the xlnt library which is explicitly built for rapid Excel data ingestion. Secure, asynchronous API communication was achieved natively via the Casablanca Rest SDK alongside OpenSSL to handle Amazon's rigorous SP-API authentication. To accomodate notoriously strict SP-API throttles, built in microsecond-level rate limiting and systematic exponetial backoff structures were engineered to pull catalogs cleanly without interruptions </motion.p>
                    </div>
                </div>
                <div className="h-screen px-80 py-45 flex flex-col align-center">
                    <div className="px-35">
                        <img
                            src="/images/BusinessCerti.png"
                            alt="Florida State LLC Registration Certificate"
                            className="w-full h-auto" />
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight">The Impact</motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300 text-pretty max-w-lg">By completely automating the product discovery pipeline, the tool elimated 6+ hours of manual work every single day. Business operatios pivoted from spreadsheet crunching to business negotiations and strategic purchasings - contributing to over 20,000 sales.</motion.p>

                        <motion.button
                            variants={buttonVariants}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1, type: 'tween' }}
                            whileHover="hover"
                            className="
                                                        px-6
                                                        py-4
                                                        mt-8 
                                                        text-lg 
                                                        text-black 
                                                        font-semibold 
                                                        bg-cyan-300
                                                        [clip-path:polygon(0_0,100%_0,100%_78%,calc(100%-8px)_100%,0_100%)] flex items-center">View GitHub <IoArrowForward size={20} className="inline ml-2" /></motion.button>
                    </div>
                </div>
            </div>
        </>
    );
}
