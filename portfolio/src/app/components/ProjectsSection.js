"use client";
import Laptop from "./canvas/Laptop";
import GiftBoxIcon from "./icons/GiftBoxIcon";
import DogBone from "./icons/DogBone";
import Vault from "./icons/Vault";
import ProjectTag from "./ProjectTag";
import { useRouter } from 'next/navigation';
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
    const router = useRouter();
    const handleClick = (route) => {
        router.push(`/${route}`)
    }
    return (
        <section className="projects-section flex flex-col justify-center relative ">
            <div className="projects-grid">
                <div className="Project1 min-h-screen md:h-screen flex flex-col md:items-center md:flex-row items-start relative pl-0 md:pl-20 ">
                    <div className={styles.textarea}>
                        <GiftBoxIcon className="text-cyan-400 mb-4" />
                        <h3 className="text-white/90 text-5xl font-semibold tracking-tight leading-tight">Parting Gifts</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-300">Encrypted digital will platform</p>
                        <button className="px-4 py-2 mt-5 text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("PartingGift")}>View Project</button>
                    </div>
                    <div className="laptop w-full md:w-1/2 relative order-1 md:order-2">
                        {/* Laptop wrapper - contains both laptop and tag */}
                        <div className="w-[120%] -ml-[8%] md:min-w-[180%] lg:min-w-[160%] relative top-[6%]">
                            {/* ProjectTag - positioned absolutely, aligned to right edge */}
                            <ProjectTag className={styles.projectTag} />
                            {/* Laptop in front */}
                            <div className="relative z-10">
                                <Laptop screenImage="/images/parting.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Project2 min-h-screen md:h-screen flex flex-col md:items-center md:flex-row items-start relative pl-0 md:pl-20 ">
                    <div className={styles.textarea}>
                        <DogBone className="text-cyan-400 mb-4" />
                        <h3 className="text-white/90 text-5xl font-semibold tracking-tight leading-tight">Amazon FBA Sourcing Optimizer</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-300">C++ tool that automates Amazon product research, saving 6+ hours daily and driving 20K+ sales.</p>
                        <button className="px-4 py-2 mt-5 text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("FBA")}>View Project</button>
                    </div>
                    <div className="laptop w-full md:w-1/2 relative order-1 md:order-2">
                        {/* Laptop wrapper - contains both laptop and tag */}
                        <div className="w-[120%] -ml-[8%] md:min-w-[180%] lg:min-w-[160%] relative top-[6%]">
                            {/* ProjectTag - positioned absolutely, aligned to right edge */}
                            <ProjectTag className={styles.projectTag} />
                            {/* Laptop in front */}
                            <div className="relative z-10">
                                <Laptop screenImage="/images/excel.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Project3 min-h-screen md:h-screen flex flex-col md:items-center md:flex-row items-start relative pl-0 md:pl-20 ">
                    <div className={styles.textarea}>
                        <Vault className="text-cyan-400 mb-4" />
                        <h3 className=" text-white/90 text-5xl font-semibold tracking-tight leading-tight">Vault</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-300">Time capsule social media app to lock away memories today and unlock them in the future.</p>
                        <button className="px-4 py-2 mt-5 text-black font-medium rounded bg-cyan-500" onClick={() => handleClick("Vault")}>View Project</button>
                    </div>
                    <div className="laptop w-full md:w-1/2 relative order-1 md:order-2">
                        {/* Laptop wrapper - contains both laptop and tag */}
                        <div className="w-[120%] -ml-[8%] md:min-w-[180%] lg:min-w-[160%] relative top-[6%]">
                            {/* ProjectTag - positioned absolutely, aligned to right edge */}
                            <ProjectTag className={styles.projectTag} />
                            {/* Laptop in front */}
                            <div className="relative z-10">
                                <Laptop screenImage="/images/vaul.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
