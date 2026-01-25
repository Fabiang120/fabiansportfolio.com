"use client";
import { useState } from "react";
import { LuGithub } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { buttonVariants } from "./frameranims";
import { AnimatePresence } from "framer-motion";

const FLogo = ({ className = "" }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <mask id="fmask">
                <rect width="100" height="100" fill="white" />
                <polygon points="55,15 65,15 35,85 25,85" fill="black" />
            </mask>
        </defs>
        <polygon
            points="25,15 75,15 75,30 42,30 42,42 65,42 65,57 42,57 42,85 25,85"
            fill="white"
            mask="url(#fmask)"
        />
    </svg>
);

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen && (
                <motion.button
                    onClick={() => setIsOpen(true)}
                    style={{ cursor: "pointer" }}
                    className="fixed top-4 right-4 md:top-6 md:right-6 z-30"
                >
                    <div className="flex flex-col gap-1">
                        <span className="block w-5 md:w-6 h-0.5 bg-white"></span>
                        <span className="block w-5 md:w-6 h-0.5 bg-white"></span>
                        <span className="block w-5 md:w-6 h-0.5 bg-white"></span>
                    </div>
                </motion.button>
            )}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "tween", duration: 0.5 }}
                        className="fixed inset-0 backdrop-blur-xl z-20 bg-black/80 flex flex-col">
                        <div className="flex justify-between items-center py-5 px-5 md:px-8">
                            <FLogo className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                            <IoClose
                                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer text-white hover:text-gray-300 transition-colors"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                        <div className="nav-links flex flex-1 flex-col justify-center items-center">
                            <ul
                                className="list-none"
                            >
                                <a href="#home" onClick={() => setIsOpen(false)}>
                                    <li className="p-3 md:p-4 text-2xl md:text-3xl lg:text-4xl text-gray-300 hover:text-white cursor-pointer transition-colors">Home</li>
                                </a>
                                <a href="#projects" onClick={() => setIsOpen(false)}>
                                    <li className="p-3 md:p-4 text-2xl md:text-3xl lg:text-4xl text-gray-300 hover:text-white cursor-pointer transition-colors">Projects</li>
                                </a>
                                <a href="#connect" onClick={() => setIsOpen(false)}>
                                    <li className="p-3 md:p-4 text-2xl md:text-3xl lg:text-4xl text-gray-300 hover:text-white cursor-pointer transition-colors">Connect</li>
                                </a>
                                <a href="#other-work" onClick={() => setIsOpen(false)}>
                                    <li className="p-3 md:p-4 text-2xl md:text-3xl lg:text-4xl text-gray-300 hover:text-white cursor-pointer transition-colors">Other Work</li>
                                </a>
                            </ul>
                        </div>
                        <div className="social-links flex gap-4 py-5 px-5 md:px-8">
                            <a href="https://www.linkedin.com/in/fabian-garcia-787006292/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                            </a>
                            <a href="https://github.com/Fabiang120" target="_blank" rel="noopener noreferrer" className="text-gray-400  hover:text-white transition-colors">
                                <IoLogoGithub className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}