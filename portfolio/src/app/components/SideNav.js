"use client";
import { useState } from "react";
import { LuGithub } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const FLogo = ({ size = 40, className = "", style = {} }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
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
            {/* Pull tab - always visible */}
            <div
                className="fixed left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
                onClick={() => setIsOpen(true)}
                style={{
                    opacity: isOpen ? 0 : 1,
                    pointerEvents: isOpen ? 'none' : 'auto',
                    transition: 'opacity 0.3s ease',
                }}
            >
                <div
                    className="flex items-center justify-center animate-pulse-subtle"
                    style={{
                        width: '24px',
                        height: '80px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '0 8px 8px 0',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <div
                        style={{
                            width: '3px',
                            height: '30px',
                            background: 'rgba(255,255,255,0.4)',
                            borderRadius: '2px',
                        }}
                    />
                </div>
            </div>

            {/* Overlay when nav is open */}
            <div
                className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
                style={{
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                }}
                onClick={() => setIsOpen(false)}
            />

            {/* Slide-out navigation */}
            <nav
                className="fixed left-0 top-0 h-screen z-50 flex flex-col items-center justify-between py-8 transition-transform duration-500 ease-out"
                style={{
                    width: '120px',
                    background: 'rgba(17,17,17,0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                }}
            >
                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <IoClose size={20} />
                </button>

                {/* Logo and nav links */}
                <div className="flex flex-col items-center gap-10">
                    <FLogo size={50} />
                    <ul
                        className="flex flex-row-reverse rotate-180 list-none"
                        style={{ writingMode: 'vertical-lr' }}
                    >
                        <li className="p-4 text-gray-300 hover:text-white cursor-pointer transition-colors">Home</li>
                        <li className="p-4 text-gray-300 hover:text-white cursor-pointer transition-colors">Projects</li>
                        <li className="p-4 text-gray-300 hover:text-white cursor-pointer transition-colors">Other Work</li>
                        <li className="p-4 text-gray-300 hover:text-white cursor-pointer transition-colors">Connect</li>
                    </ul>
                </div>

                {/* Social links */}
                <div className="flex flex-col items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <IoLogoGithub size={20} />
                    </a>
                </div>
            </nav>
        </>
    );
}