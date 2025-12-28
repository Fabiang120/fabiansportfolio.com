"use client";
import Laptop from "./canvas/Laptop";

export default function ProjectsSection() {
    return (
        <section className="projects-section border px-20 flex flex-col justify-center relative border-white">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="Project1 h-screen">
                    <h3>Parting Gifts</h3>
                    <p>Encrypted digital will platform that delivers your final messages and gifts when you're gone.</p>
                    <Laptop />
                </div>
                <div className="Project2 h-screen">
                    <h3>Amazon FBA Sourcing Optimizer</h3>
                    <p>C++ tool that automates Amazon product research, saving 6+ hours daily and driving 20K+ sales.</p>
                    <Laptop />
                </div>
                <div className="Project3 h-screen">
                    <h3>Vault</h3>
                    <p>Time capsule social media app to lock away memories today and unlock them in the future.</p>
                    <Laptop />
                </div>
            </div>
        </section>
    );
}
