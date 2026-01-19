"use client";
import Laptop from "./canvas/Laptop";
import GiftBoxIcon from "./icons/GiftBoxIcon";
import DogBone from "./icons/DogBone";
import Vault from "./icons/Vault";
import ProjectTag from "./ProjectTag";
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from "react";
import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";
import { buttonVariants } from "./frameranims"

export default function ProjectsSection() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
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
                        observer.unobserve(project1Ref.current);
                    } else if (entry.target === project2Ref.current) {
                        setVisible2(true);
                        observer.unobserve(project2Ref.current);
                    } else if (entry.target === project3Ref.current) {
                        setVisible3(true);
                        observer.unobserve(project3Ref.current);
                    }
                }
            });
        });
        if (project1Ref.current) observer.observe(project1Ref.current);
        if (project2Ref.current) observer.observe(project2Ref.current);
        if (project3Ref.current) observer.observe(project3Ref.current);
        return () => observer.disconnect();
    }, [])
    return (
        <section id="projects" className="flex flex-col justify-center relative overflow-hidden ">
            <div className="projects-grid">
                {/* Project 1 */}
                <div ref={project1Ref} className="Project1 min-h-screen md:h-screen flex flex-col md:items-center md:flex-row items-start relative pl-0 md:pl-20 ">
                    {visible1 && (
                        <>
                            <div className={styles.textarea}>
                                <GiftBoxIcon className="text-cyan-400 mb-4" />
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                                    className="text-white/90 text-5xl text-balance font-semibold tracking-tight leading-tight">Parting Gifts</motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 1, type: 'tween' }}
                                    className="mt-4 text-lg leading-relaxed text-gray-300">Encrypted digital will and scheduled message delivery platform, automating the process for those that pass away.</motion.p>
                                <motion.button
                                    variants={buttonVariants}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 1, type: 'tween' }}
                                    whileHover="hover"
                                    className="px-4 py-2 mt-5 text-balance text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("PartingGift")}>View Project</motion.button>
                            </div>
                            <div className="laptop w-full md:w-1/2 relative order-1 md:order-2">
                                {/* Laptop wrapper - contains both laptop and tag */}
                                <div className="w-[120%] -ml-[8%] md:min-w-[180%] lg:min-w-[160%] relative top-[6%]">
                                    {/* ProjectTag - positioned absolutely, aligned to right edge */}

                                    {/* Add styling later */}
                                    <ProjectTag className={styles.projectTag} />
                                    {/* Laptop in front */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1, duration: 2 }}
                                        className="relative z-10">
                                        <Laptop screenImage="/images/parting.png" />
                                    </motion.div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Project 2 */}
                <div ref={project2Ref} className="Project2 min-h-screen md:h-screen flex flex-col md:items-center md:flex-row items-start relative pl-0 md:pl-20 ">
                    {visible2 && (
                        <>
                            <div className={styles.textarea}>
                                <DogBone className="text-cyan-400 mb-4" />
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                                    className="text-white/90 text-5xl font-semibold tracking-tight leading-tight">Amazon FBA Sourcing Optimizer</motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 1, type: 'tween' }}
                                    className="mt-4 text-lg leading-relaxed text-gray-300">C++ automation tool for Amazon product research. Saved 6+ hours daily and contributed to 20000+ sales.</motion.p>
                                <motion.button
                                    variants={buttonVariants}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 1, type: 'tween' }}
                                    whileHover="hover"
                                    className="px-4 py-2 mt-5 cursor-pointer text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("FBA")}>View Project</motion.button>
                            </div>
                            <div className="laptop w-full md:w-1/2 relative order-1 md:order-2">
                                {/* Laptop wrapper - contains both laptop and tag */}
                                <div className="w-[120%] -ml-[8%] md:min-w-[180%] lg:min-w-[160%] relative top-[6%]">
                                    {/* ProjectTag - positioned absolutely, aligned to right edge */}
                                    <ProjectTag className={styles.projectTag} />
                                    {/* Laptop in front */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1, duration: 2 }}
                                        className="relative z-10">
                                        <Laptop screenImage="/images/excel.png" />
                                    </motion.div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Project 3 */}
                <div ref={project3Ref} className="Project3 min-h-screen md:h-screen flex flex-col md:items-center md:flex-row items-start relative pl-0 md:pl-20 ">
                    {visible3 && (
                        <>
                            <div className={styles.textarea}>
                                <Vault className="text-cyan-400 mb-4" />
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1, type: 'tween' }}
                                    className="text-white/90 text-5xl font-semibold tracking-tight leading-tight">Vault</motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 1, type: 'tween' }}
                                    className="mt-4 text-lg leading-relaxed text-gray-300">Time capsule social media app for storing and scheduling content to unlock.</motion.p>
                                <motion.button
                                    variants={buttonVariants}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 1, type: 'tween' }}
                                    whileHover="hover"
                                    className="px-4 py-2 mt-5 cursor-pointer text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("Vault")}>View Project</motion.button>
                            </div>
                            <div className="laptop w-full md:w-1/2 relative order-1 md:order-2">
                                {/* Laptop wrapper - contains both laptop and tag */}
                                <div className="w-[120%] -ml-[8%] md:min-w-[180%] lg:min-w-[160%] relative top-[6%]">
                                    {/* ProjectTag - positioned absolutely, aligned to right edge */}
                                    <ProjectTag className={styles.projectTag} />
                                    {/* Laptop in front */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1, duration: 2 }}
                                        className="relative z-10">
                                        <Laptop screenImage="/images/vaul.png" />
                                    </motion.div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
