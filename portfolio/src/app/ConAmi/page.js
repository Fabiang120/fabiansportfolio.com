"use client";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import SideNav from "../components/SideNav";
import { buttonVariants } from "../components/frameranims";

export default function ConAmiPage() {
    const handleClick = () => {
        window.location.href = "https://github.com/Fabiang120/ConAmi";
    };

    return (
        <>
            <SideNav />
            <div className="flex flex-col">
                <div className="relative h-screen flex flex-col align-center">
                    <img src="/images/conamihero.jpg" alt="ConAmi Platform" className="absolute inset-0 w-full h-full opacity-25 -z-10 object-cover" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#111111]" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-transparent to-[#111111]" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-l from-transparent via-transparent to-[#111111]" />
                    <div className="relative z-10 px-20 md:px-40 lg:px-80 py-45">
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-cyan-300">Python, Next.js, React, Tailwind CSS, FastAPI, PostgreSQL</motion.p>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[2rem] sm:text-[3rem] md:text-5xl font-semibold tracking-tight leading-tight max-w-xl">ConAmi</motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 3.0, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 max-w-lg">Co-architected and developed ConAmi in a three-person team, a language exchange platform connecting English and Spanish speakers through real-time conversation.</motion.p>
                    </div>
                </div>

                <div className="mt-70 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="mb-40 px-4 md:px-20 lg:px-35">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg">The Mission</motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl">My group and I wanted to help connect people in the US with individuals in Latin and Hispanic countries, providing a chance to learn Spanish directly from those who want to teach or simply have conversations. Learning a new language often comes with the fear of speaking, so our mission with ConAmi is to remove that fear by making language exchange approachable, seamless, and human-centered.</motion.p>
                    </div>
                    <motion.img
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 3.6, duration: 1, type: 'tween' }}
                        className="w-full aspect-[16/9] md:aspect-[21/9] object-fill"
                        src="/images/ConAmi2.png" alt="ConAmi App Interface" />
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
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl">Designed the full-stack architecture, implementing a Next.js and React frontend communicating via REST APIs to a FastAPI backend. Engineered the database with PostgreSQL and SQLAlchemy for persistent user and messaging data, utilizing Alembic for database migrations.</motion.p>
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
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl">We are currently in the process of building this app, working in sprint cycles with detailed backlogging. We plan to add AI conversation support within the chats, and we hope to see the platform officially launched on the App Store in the future.</motion.p>
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