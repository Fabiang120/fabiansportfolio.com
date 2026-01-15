"use client";
import { DisplacementSphere } from "./canvas/DisplacementSphere";
import styles from "./IntroSection.module.css"
import { useState, useEffect } from "react"

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
        <section className="intro-section h-screen relative pl-20">
            <DisplacementSphere />
            <div className="flex flex-col justify-start h-full relative z-10 pt-30 lg:pt-15 gap-6 md:gap-2 lg:gap-1">
                <div aria-hidden="true" className={`${styles.fabian} uppercase font-black tracking-tighter leading-none`}>Fabian</div>
                <div>
                    <h1 className="text-5xl text-white/90 md:text-7xl lg:text-[7rem] font-extralight leading-tight">I build services</h1>
                    <h1 className="text-5xl text-white/90 md:text-7xl lg:text-[7rem] font-semibold leading-tight">
                        <span className={styles.gradientText}>for the web</span>
                    </h1>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <span className={`${styles.gradientText} text-5xl font-semibold `}>+</span>
                    <span className="text-3xl md:text-5xl font-normal text-white/70">{currentSkill}</span>
                </div>
            </div>
        </section >
    );
}
