"use client";
import Portal from "./canvas/Portal";

export default function Works() {
    return (
        <section className="Works-section relative min-h-screen text-center flex flex-col items-center justify-center overflow-hidden">
            {/* Top text */}
            <div className="absolute z-20 left-1/2 -translate-x-1/2">
                <h2 className="text-5xl md:text-7xl font-extralight text-white/90 tracking-tight">
                    Enter my world
                </h2>
                <p className="mt-4 text-gray-300 text-base md:text-lg">
                    Click on the portal to continue
                </p>
            </div>

            {/* Portal */}
            <div className="relative z-10 w-full">
                <Portal />
            </div>

            <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-0.5 h-25 bg-gradient-to-b via-cyan-400/40 ">
                    </div>
                    <span className="text-balance tracking-widest -rotate-90 whitespace-nowrap text-gray-300">Portfolio</span>
                    <div className="w-0.5 h-25 bg-gradient-to-b via-cyan-400/40" />
                </div>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col items-center gap-4 ">
                    <div className="w-0.5 h-25 bg-gradient-to-b via-cyan-400/40" />
                    <span className="text-balance tracking-widest rotate-90 whitespace-nowrap text-gray-300">©2026 Fabian Garcia </span>
                    <div className="w-0.5 h-25 bg-gradient-to-b via-cyan-400/40" />
                </div>
            </div>
        </section >
    );
}