"use client";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import SideNav from "../components/SideNav";
import { buttonVariants } from "../components/frameranims";

export default function PartingGiftsPage({portal}) {
    const handleClick = () => {
        window.location.href = "https://github.com/Fabiang120/PartingGifts";
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
                        src="/images/partinghero.jpg"
                        alt="Parting Gifts App"
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
                            Go, React, Vite, Tailwind CSS, Three.js, SQLite
                        </MotionP>

                        <MotionH1
                            {...fadeInUp(2.4)}
                            className="text-white/90 text-[2rem] sm:text-[3rem] md:text-5xl font-semibold tracking-tight leading-tight max-w-xl"
                        >
                            Parting Gifts
                        </MotionH1>

                        <MotionP
                            {...fadeInUp(3.0)}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 max-w-lg"
                        >
                            Led backend development and co-architected Parting Gifts, a digital
                            will and scheduled asset delivery platform.
                        </MotionP>
                    </div>
                </div>

                <div className="mt-70 h-screen px-6 sm:px-16 md:px-40 lg:px-80 py-45 flex flex-col justify-center items-center">
                    <div className="mb-40 px-4 md:px-20 lg:px-35">
                        <MotionH2
                            {...fadeInUp(1.2)}
                            className="text-white/90 text-[1.5rem] sm:text-[2rem] md:text-4xl font-semibold tracking-tight leading-tight max-w-lg"
                        >
                            The Purpose
                        </MotionH2>

                        <MotionP
                            {...fadeInUp(2.4)}
                            className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 text-pretty max-w-xl"
                        >
                            My goal with this application was to help ease the burden of losing
                            a loved one. I wanted to create a platform where people can record
                            memorial videos and securely manage their wills, helping their
                            families avoid extensive legal battles, something I experienced in
                            the past and wanted to make easier for others.
                        </MotionP>
                    </div>

                    <MotionImg
                        {...fadeInUp(3.6)}
                        className="w-full aspect-[16/9] md:aspect-[21/9] object-fill"
                        src="/images/parting.png"
                        alt="Parting Gifts UI"
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
                            Built a Go REST API with authentication and documented it via
                            Swagger. Developed a React frontend using Vite with WebRTC video
                            capture and interactive Three.js components, establishing reliable
                            system flows via Cypress and Vitest.
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
                            We worked in sprint cycles with detailed backlogging, delivering on
                            all of them to publish a fully functional app capable of recording
                            any type of file. By following Scrum practices, our incremental
                            releases ensured end-to-end functionality matched our original Figma
                            design flows, and we hope to see the platform adopted by larger
                            organizations or officially launched on the App Store in the future.
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