"use client";
import { DisplacementSphere } from "./canvas/DisplacementSphere";
import styles from "./IntroSection.module.css"
import { useState, useEffect } from "react"

export default function IntroSection() {
    const techSkills = ["C++", "JAVA", "JAVASCRIPT", "PYTHON", "REACT", "NEXT.JS", "NODE.JS", "SQL", "TAILWIND", "HTML/CSS"];
    const [currentIndex, setCurrentIndex] = useState(-1);
    const currentSkill = currentIndex === -1 ? "Full Stack Dev" : techSkills[currentIndex];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % techSkills.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="intro-section h-screen relative pl-30">
            <DisplacementSphere />
            <div aria-hidden="true" className={`${styles.fabian} uppercase font-black tracking-tighter leading-none absolute`}>Fabian</div>

            <div className="flex flex-col justify-end h-full z-10">
                <h1 className="text-5xl md-text-7xl lg:text-[7rem] font-extralight leading-tight">I build things</h1>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-semibold leading-tight">
                    <span className="gradient-text">for the web</span>
                </h1>
                <div className="flex items-center gap-3">
                    <span>+</span>
                    <span>{currentSkill}</span>
                </div>
            </div>
        </section>
    );
}
