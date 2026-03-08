"use client";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import SideNav from "../components/SideNav";
import { buttonVariants } from "../components/frameranims";
export default function FBAPage() {
    const handleClick = () => {
        window.location.href = "https://github.com/Fabiang120/Amazon-Sourcing-Optimizer";
    };
    return (
        <>
            <SideNav />
            <div className="flex flex-col">
                <div className="relative h-screen flex flex-col align-center">
                    <img src="/images/work.jpg" alt="Secret boxes from a secret company" className="absolute inset-0 w-full h-full opacity-25 -z-10 object-cover" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#111111]" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-transparent to-[#111111]" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-l from-transparent via-transparent to-[#111111]" />
                    <div className="relative z-10 px-20 md:px-40 lg:px-80 py-45">
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-cyan-300">C++ Backend & API Integration</motion.p>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[2rem] sm:text-[3rem] md:text-5xl font-semibold tracking-tight leading-tight max-w-xl">Amazon FBA Sourcing Optimizer</motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 3.0, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 max-w-lg">A backend application I built to parse wholesale catalogs and ping Amazon's Selling Partner API to find profitable items I believed in to sell.
                        </motion.p>
                    </div>
                </div>
                <div className="mt-70 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="mb-40 px-4 md:px-20 lg:px-35">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg">The Obstacle</motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl">Cross-referencing thousands of rows of supplier pricing data against live Amazon catalog pricing manually was an operational bottleneck that tooks hours every single day. Speaking with businesses and hearing their stories is what I wanted to focus on, hence my primary goal was to automate this process.</motion.p>
                    </div>
                    <motion.img
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 3.6, duration: 1, type: 'tween' }}
                        src="/images/excel.png" alt="An excel sheet from a secret company" />
                </div>
                <div className="mt-45 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="px-4 md:px-20 lg:px-35">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg">Architecture</motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl">This C++ Application utilizes the xlnt library which is built for handling Excel data. Secure, asynchronous API communication was achieved via the Casablanca Rest SDK alongside OpenSSL to handle Amazon's rigorous SP-API authentication. To accomodate notoriously strict SP-API throttles, built in microsecond-level thread rate limiting and systematic exponetial backoff structures were engineered to pull catalogs cleanly without interruptions</motion.p>
                    </div>
                </div>
                <div className="mt-20 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="px-4 md:px-20 lg:px-35">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg">The Impact</motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl">By completely automating excel product discovery, the tool elimated 6+ hours of manual work every single day. Business operations pivoted from spreadsheet reading to business negotiations and strategic purchasings - contributing to over 20,000 sales.</motion.p>
                        <motion.button
                            variants={buttonVariants}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 3.6, duration: 1, type: 'tween' }}
                            whileHover="hover"
                            onClick={() => handleClick()}
                            className="px-6 py-4 mt-8 text-lg text-black font-semibold bg-cyan-300 [clip-path:polygon(0_0,100%_0,100%_78%,calc(100%-8px)_100%,0_100%)] flex items-center">View GitHub <IoArrowForward size={20} className="inline ml-2" /></motion.button>
                    </div>
                </div>
            </div>
        </>
    );
}