"use client";
import dynamic from 'next/dynamic'
import GiftBoxIcon from "./icons/GiftBoxIcon";
import DogBone from "./icons/DogBone";
import Vault from "./icons/Vault";
import ProjectTag from "./ProjectTag";
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from "react";
import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";
import { buttonVariants } from "./frameranims"
import { Perf } from 'r3f-perf'

const Laptop = dynamic(() => import('./canvas/Laptop'));

export default function ProjectsSection() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const [mounted1, setMounted1] = useState(false);
    const [mounted2, setMounted2] = useState(false);
    const [mounted3, setMounted3] = useState(false);

    const project1Ref = useRef();
    const project2Ref = useRef();
    const project3Ref = useRef();
    const router = useRouter();

    const handleClick = (route) => {
        router.push(`/${route}`)
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === project1Ref.current) {
                        setVisible1(true);
                        setMounted1(true);
                        observer.unobserve(project1Ref.current);
                    } else if (entry.target === project2Ref.current) {
                        setVisible2(true);
                        setMounted2(true);
                        observer.unobserve(project2Ref.current);
                    } else if (entry.target === project3Ref.current) {
                        setVisible3(true);
                        setMounted3(true);
                        observer.unobserve(project3Ref.current);
                    }
                }
            });
        },
            {
                threshold: 0.4,
            }
        );
        if (project1Ref.current) observer.observe(project1Ref.current);
        if (project2Ref.current) observer.observe(project2Ref.current);
        if (project3Ref.current) observer.observe(project3Ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <section id="projects" className="flex flex-col justify-center relative overflow-hidden">
            <div className="px-12 md:pl-16 lg:pl-32">
                {/* Project 1 */}
                <div ref={project1Ref} className="Project1 min-h-screen grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(260px,32%)_1fr] lg:gap-8 relative">
                    {mounted1 && (
                        <>
                            <div className={`${styles.textarea} order-2 lg:order-1`}>
                                <GiftBoxIcon className="text-cyan-400 mb-4" />
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                                    className="text-white/90 text-[2rem] sm:text-[2.5rem] md:text-5xl font-semibold tracking-tight leading-tight">Parting Gifts</motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                                    className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">Encrypted digital will and scheduled message delivery platform, helping with the process for those that pass away.</motion.p>
                                <motion.button
                                    variants={buttonVariants}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 1, type: 'tween' }}
                                    whileHover="hover"
                                    className="px-4 py-2 mt-5 text-sm sm:text-base text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("PartingGift")}>View Project</motion.button>
                            </div>
                            {/* 100vw to spread across viewport, lg is breakpoint for flex-row */}
                            {/* translate-x-30 to push to the right in lg, need to limit width of laptop wrapper on lg screens */}
                            {/* */}
                            <div className="laptop relative w-full lg:w-[120%] min-w-0 order-1 lg:order-2">
                                <ProjectTag className={styles.projectTag} />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 2 }}
                                    className="relative w-full h-full aspect-[12/10]">
                                    <Laptop screenImage="/images/parting.png" isVisible={visible1} />
                                </motion.div>
                            </div>
                        </>
                    )}
                </div>

                {/* Project 2 */}
                <div ref={project2Ref} className="Project2 min-h-screen lg:h-screen flex flex-col lg:items-center lg:flex-row items-start relative">
                    {mounted2 && (
                        <>
                            <div className={styles.textarea}>
                                <DogBone className="text-cyan-400 mb-4" />
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                                    className="text-white/90 text-[2rem] sm:text-[2.5rem] md:text-5xl font-semibold tracking-tight leading-tight">Amazon FBA Sourcing Optimizer</motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                                    className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">C++ automation tool for Amazon product research. Saved 6+ hours daily and contributed to 20000+ sales.</motion.p>
                                <motion.button
                                    variants={buttonVariants}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 1, type: 'tween' }}
                                    whileHover="hover"
                                    className="px-4 py-2 mt-5 text-sm sm:text-base text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("FBA")}>View Project</motion.button>
                            </div>
                            <div className="laptop -ml-12 lg:-ml-24 w-screen h-[50vh] md:w-[95vw] md:h-[85vh] lg:ml-0 lg:h-[95vh] relative order-1 lg:order-2">
                                <div className="h-full">
                                    <ProjectTag className={styles.projectTag} />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 2 }}
                                        className="relative z-10 h-full">
                                        <Laptop screenImage="/images/excel.png" isVisible={visible2} />
                                    </motion.div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Project 3 */}
                <div ref={project3Ref} className="Project3 min-h-screen lg:h-screen flex flex-col lg:items-center lg:flex-row items-start relative">
                    {mounted3 && (
                        <>
                            <div className={styles.textarea}>
                                <Vault className="text-cyan-400 mb-4" />
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 2.4, duration: 1, type: 'tween' }}
                                    className="text-white/90 text-[2rem] sm:text-[2.5rem] md:text-5xl font-semibold tracking-tight leading-tight">Vault</motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                                    className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">Time capsule social media app for storing and scheduling content to unlock with friends & family.</motion.p>
                                <motion.button
                                    variants={buttonVariants}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 1, type: 'tween' }}
                                    whileHover="hover"
                                    className="px-4 py-2 mt-5 text-sm sm:text-base text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("Vault")}>View Project</motion.button>
                            </div>
                            <div className="laptop -ml-12 lg:-ml-24 w-screen h-[50vh] md:w-[95vw] md:h-[85vh] lg:ml-0 lg:h-[95vh] relative order-1 lg:order-2">
                                <div className="h-full">
                                    <ProjectTag className={styles.projectTag} />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 2 }}
                                        className="relative z-10 h-full">
                                        <Laptop screenImage="/images/vaul.png" isVisible={visible3} />
                                    </motion.div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section >
    );
}
