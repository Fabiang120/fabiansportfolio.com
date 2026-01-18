"use client";
import { DisplacementSphere } from "./canvas/DisplacementSphere";
import styles from "./IntroSection.module.css";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

export default function IntroSection() {
    const techSkills = ["C++", "JAVA", "JAVASCRIPT", "SWIFT", "PYTHON", "REACT", "NEXT.JS", "NODE.JS", "SQL", "TAILWIND", "HTML/CSS", "JSX", "FLASK", "BOOTSTRAP", "AWS", "GIT"
    ];
    const [currentIndex, setCurrentIndex] = useState(-1);
    const currentSkill = currentIndex === -1 ? "Full Stack Dev" : techSkills[currentIndex];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % techSkills.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section id="home" className="h-screen relative pl-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
            >
                <DisplacementSphere />
            </motion.div>
            <div className="flex flex-col justify-start h-full relative pt-30 lg:pt-15 gap-6 md:gap-2 lg:gap-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 2 }}
                    aria-hidden="true" className={`${styles.fabian} uppercase font-black tracking-tighter leading-none`}>Fabian</motion.div>
                <div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 2 }}
                        className="text-5xl text-[clamp(2rem,6vw,5rem)] text-white/90 md:text-7xl lg:text-[7rem] font-extralight leading-tight">I build services</motion.h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 2 }}
                        className="text-5xl text-[clamp(2rem,6vw,5rem)] text-white/90 md:text-7xl lg:text-[7rem] font-semibold leading-tight">
                        <span className={styles.gradientText}>for the web</span>
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 2 }}
                    className="flex items-center gap-3 mt-4">
                    <span className={`${styles.gradientText} text-5xl font-semibold `}>+</span>
                    <span className="text-3xl md:text-5xl font-normal text-white/70">{currentSkill}</span>
                </motion.div>
            </div>
        </section >
    );
}
