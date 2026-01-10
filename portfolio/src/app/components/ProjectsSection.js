"use client";
import Laptop from "./canvas/Laptop";
import GiftBoxIcon from "./icons/GiftBoxIcon";
import DogBone from "./icons/DogBone";
import Vault from "./icons/Vault";

export default function ProjectsSection() {
    return (
        <section className="projects-section border flex flex-col justify-center relative border-white">
            <div className="projects-grid">
                <div className="Project1 px-50 h-screen flex items-center relative border border-white overflow-hidden">
                    <div className="textarea  z-10 w-1/3">
                        <GiftBoxIcon className="text-cyan-400 mb-4" />
                        <h3 className="text-5xl font-semibold tracking-tight leading-tight">Parting Gifts</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-300">Encrypted digital will platform</p>
                        <button>View Project</button>
                    </div>
                    <div className="laptop w-1/2 relative">
                        <div className="min-w-[180%] aspect-[12/10] relative left-[14%] top-[6%]">
                            <Laptop screenImage="/images/parting.png" />
                        </div>
                    </div>
                </div>
                <div className="Project2 px-50 h-screen flex items-center relative border border-white">
                    <div className="textarea z-10 w-1/3">
                        <DogBone className="text-cyan-400 mb-4" />
                        <h3 className="text-5xl font-semibold tracking-tight leading-tight">Amazon FBA Sourcing Optimizer</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-300">C++ tool that automates Amazon product research, saving 6+ hours daily and driving 20K+ sales.</p>
                        <button>View Project</button>
                    </div>
                    <div className="laptop w-1/2 relative">
                        <div className="min-w-[180%] aspect-[12/10] relative left-[14%] top-[6%]">
                            <Laptop screenImage="/images/excel.png" />
                        </div>
                    </div>
                </div>

                <div className="Project3 px-50 h-screen flex items-center relative border border-white">
                    <div className="z-10 w-1/3">
                        <Vault className="text-cyan-400 mb-4" />
                        <h3 className="text-5xl font-semibold tracking-tight leading-tight">Vault</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-300">Time capsule social media app to lock away memories today and unlock them in the future.</p>
                        <button>View Project</button>
                    </div>
                    <div className="laptop w-1/2 relative">
                        <div className="min-w-[180%] aspect-[12/10] relative left-[14%] top-[6%]">
                            <Laptop screenImage="/images/vaul.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
