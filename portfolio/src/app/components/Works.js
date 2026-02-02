"use client";
import Portal from "./canvas/Portal";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

export default function Works() {
    return (
        <section id="other-work" className="Works-section z-10 relative min-h-screen text-center flex flex-col items-center justify-center mt-[15rem] lg:mt-[40rem]">
            <div className="absolute z-20 left-1/2 -translate-x-1/2">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="text-5xl md:text-7xl font-extralight text-white/90 tracking-tight">
                    Enter my world
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="mt-4 text-gray-300 text-base md:text-lg">
                    Click on the portal to continue
                </motion.p>
            </div>

            <div className="relative z-10 w-full">
                <Portal />
            </div>
        </section>
    );
}