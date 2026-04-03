"use client";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import SideNav from "../components/SideNav";
import { buttonVariants } from "../components/frameranims";

export default function FBAPage({ portal }) {
    const handleClick = () => {
        window.location.href = "https://github.com/Fabiang120/Amazon-Sourcing-Optimizer";
    };

    const MotionP = portal ? "p" : motion.p;
    const MotionH1 = portal ? "h1" : motion.h1;
    const MotionH2 = portal ? "h2" : motion.h2;
    const MotionImg = portal ? "img" : motion.img;
    const MotionButton = portal ? "button" : motion.button;

    const fadeInUp = (delay) =>
        portal
            ? {}
            : {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: true },
                transition: { delay, duration: 1, type: "tween" },
            };

    return (
        <>
            <SideNav portal={portal} />
            <div className="flex flex-col">
                <div className="relative h-screen flex flex-col align-center">
                    <img
                        src="/images/work.jpg"
                        alt="Secret boxes from a secret company"
                        className="absolute inset-0 w-full h-full opacity-25 -z-10 object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#111111]" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-transparent to-[#111111]" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-l from-transparent via-transparent to-[#111111]" />

                    <div className="relative z-10 px-20 md:px-40 lg:px-80 py-45">
                        <MotionP
                            {...fadeInUp(1.2)}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-cyan-300"
                        >
                            C++ Backend & API Integration
                        </MotionP>

                        <MotionH1
                            {...fadeInUp(2.4)}
                            className="text-white/90 text-[2rem] sm:text-[3rem] md:text-5xl font-semibold tracking-tight leading-tight max-w-xl"
                        >
                            Amazon FBA Sourcing Optimizer
                        </MotionH1>

                        <MotionP
                            {...fadeInUp(3.0)}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 max-w-lg"
                        >
                            A backend application I built to parse wholesale catalogs and ping
                            Amazon&apos;s Selling Partner API to find profitable items I believed
                            in to sell.
                        </MotionP>
                    </div>
                </div>

                <div className="mt-70 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="mb-40 px-4 md:px-20 lg:px-35">
                        <MotionH2
                            {...fadeInUp(1.2)}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg"
                        >
                            The Obstacle
                        </MotionH2>

                        <MotionP
                            {...fadeInUp(2.4)}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl"
                        >
                            Cross-referencing thousands of rows of supplier pricing data
                            against live Amazon catalog pricing manually was an operational
                            bottleneck that took hours every single day. Speaking with
                            businesses and hearing their stories is what I wanted to focus on,
                            hence my primary goal was to automate this process.
                        </MotionP>
                    </div>

                    <MotionImg
                        {...fadeInUp(3.6)}
                        src="/images/excel.png"
                        alt="An excel sheet from a secret company"
                    />
                </div>

                <div className="mt-45 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="px-4 md:px-20 lg:px-35">
                        <MotionH2
                            {...fadeInUp(1.2)}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg"
                        >
                            Architecture
                        </MotionH2>

                        <MotionP
                            {...fadeInUp(2.4)}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl"
                        >
                            This C++ application utilizes the xlnt library which is built for
                            handling Excel data. Secure, asynchronous API communication was
                            achieved via the Casablanca REST SDK alongside OpenSSL to handle
                            Amazon&apos;s rigorous SP-API authentication. To accommodate
                            notoriously strict SP-API throttles, built-in microsecond-level
                            thread rate limiting and systematic exponential backoff structures
                            were engineered to pull catalogs cleanly without interruptions.
                        </MotionP>
                    </div>
                </div>

                <div className="mt-20 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="px-4 md:px-20 lg:px-35">
                        <MotionH2
                            {...fadeInUp(1.2)}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg"
                        >
                            The Impact
                        </MotionH2>

                        <MotionP
                            {...fadeInUp(2.4)}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl"
                        >
                            By completely automating Excel product discovery, the tool
                            eliminated 6+ hours of manual work every single day. Business
                            operations pivoted from spreadsheet reading to business negotiations
                            and strategic purchasing, contributing to over 20,000 sales.
                        </MotionP>

                        <MotionButton
                            {...fadeInUp(3.6)}
                            {...(!portal ? { variants: buttonVariants, whileHover: "hover" } : {})}
                            onClick={() => handleClick()}
                            className="px-6 py-4 mt-8 text-lg text-black font-semibold bg-cyan-300 [clip-path:polygon(0_0,100%_0,100%_78%,calc(100%-8px)_100%,0_100%)] flex items-center"
                        >
                            View GitHub <IoArrowForward size={20} className="inline ml-2" />
                        </MotionButton>
                    </div>
                </div>
            </div>
        </>
    );
}