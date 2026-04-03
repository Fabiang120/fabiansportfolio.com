"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function SideNav({ portal = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const sectionPrefix = portal ? null : "/#";

    const links = [
        { href: sectionPrefix.concat("home"), label: "Home" },
        { href: sectionPrefix.concat("projects"), label: "Projects" },
        { href: sectionPrefix.concat("connect"), label: "Connect" },
        { href: sectionPrefix.concat("other-work"), label: "Other Work" },
    ];

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
                        className="fixed inset-0 backdrop-blur-xl z-20 bg-black/80 flex flex-col"
                    >
                        <div className="flex justify-between items-center py-5 px-5 md:px-8">
                            <FLogo className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                            <IoClose
                                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer text-white hover:text-gray-300 transition-colors"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                        <div className="nav-links flex flex-1 flex-col justify-center items-center">
                            <ul className="list-none">
                                {links.map((link) => (
                                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                                        <li className="p-3 md:p-4 text-2xl md:text-3xl lg:text-4xl text-gray-300 hover:text-white cursor-pointer transition-colors">
                                            {link.label}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}