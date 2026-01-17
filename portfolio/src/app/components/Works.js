"use client";
import Portal from "./canvas/Portal";

export default function Works() {
    return (
        <section className="Works-section z-10 relative min-h-screen text-center flex flex-col items-center justify-center">
            {/* Top text */}
            {/*<p className="absolute left-8 bottom-12 w-48 text-xl text-gray-400 leading-relaxed">It has always been on my mind why I have never seen a website with a portal. The routing aspect to me seemed like it was directly made for it </p>
            <p className="absolute right-8 bottom-12 w-48 text-xl text-gray-400 leading-relaxed">If you've played minecraft before than you should be able to tell that its slightly based off the nether portal but with a runic twist to it </p> */}
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
            <p></p>
        </section >
    );
}