"use client";
import Portal from "./canvas/Portal";
import { motion } from "framer-motion";

export default function Works() {
    return (
        <section id="other-work" className="Works-section z-10 relative min-h-screen text-center flex flex-col items-center justify-center">
            {/* Top text */}
            {/*<p className="absolute left-8 bottom-12 w-48 text-xl text-gray-400 leading-relaxed">It has always been on my mind why I have never seen a website with a portal. The routing aspect to me seemed like it was directly made for it </p>
            <p className="absolute right-8 bottom-12 w-48 text-xl text-gray-400 leading-relaxed">If you've played minecraft before than you should be able to tell that its slightly based off the nether portal but with a runic twist to it </p> */}
            <div className="absolute z-20 left-1/2 -translate-x-1/2">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="text-5xl md:text-7xl font-extralight text-white/90 tracking-tight">
                    Enter my world
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="mt-4 text-gray-300 text-base md:text-lg">
                    Click on the portal to continue
                </motion.p>
            </div>

            {/* Portal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
                className="relative z-10 w-full">
                <Portal />
            </motion.div>
            <p></p>
        </section >
    );
}