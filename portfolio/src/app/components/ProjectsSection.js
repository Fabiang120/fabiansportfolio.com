"use client";
import Laptop from "./canvas/Laptop";

export default function ProjectsSection() {
    return (
        <section className="projects-section border px-20 flex flex-col justify-center relative border-white">
            <div className="projects-grid">
                <div className="Project1 h-screen flex items-center relative border border-white">
                    <div className="px-8 z-10 w-1/3">
                        <h3 className="text-5xl font-light">Parting Gifts</h3>
                        <p className="mt-4">Encrypted digital will platform</p>
                    </div>
                    <div className="flex-1 h-full">
                        <Laptop screenImage="/images/parting.png" />
                    </div>
                </div>
                <div className="Project2 h-screen flex items-center relative border border-white">
                    <div className="px-8 z-10 w-1/3">
                        <h3 className="text-5xl font-light">Amazon FBA Sourcing Optimizer</h3>
                        <p className="mt-4">C++ tool that automates Amazon product research, saving 6+ hours daily and driving 20K+ sales.</p>
                    </div>
                    <div className="flex-1 h-full">
                        <Laptop screenImage="/images/excel.png" />
                    </div>
                </div>
                <div className="Project3 h-screen flex items-center relative border border-white">
                    <div className="px-8 z-10 w-1/3">
                        <h3 className="text-5xl font-light">Vault</h3>
                        <p className="mt-4">Time capsule social media app to lock away memories today and unlock them in the future.</p>
                    </div>
                    <div className="flex-1 h-full">
                        <Laptop screenImage="/images/vaul.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}
