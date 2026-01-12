"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { LuGithub } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

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
        <rect width="100" height="100" fill="#111" />
        {/* Main F shape */}
        <polygon points="25,15 75,15 75,30 42,30 42,42 65,42 65,57 42,57 42,85 25,85" fill="white" />
        {/* Black diagonal slash cutting through the F */}
        <polygon points="55,15 65,15 35,85 25,85" fill="#111" />
    </svg>
);

export default function SideNav() {
    return (
        <nav className="side-nav fixed py-8 left-0 top-0 w-30 h-screen flex flex-col items-center justify-start gap-8">
            <div className="flex flex-col items-center gap-10">
                <FLogo size={60} />
                <ul
                    className="flex flex-row-reverse rotate-180 list-none"
                    style={{ writingMode: 'vertical-lr' }}
                >
                    <li className="p-4 text-gray-300">Home</li>
                    <li className="p-4 text-gray-300">Projects</li>
                    <li className="p-4 text-gray-300">Other Work</li>
                    <li className="p-4 text-gray-300">Connect</li>
                </ul>
            </div>
            <div className="py-34 flex flex-col items-center gap-8">
                <FaLinkedinIn className="text-gray-300" size={20} />
                <IoLogoGithub className="text-gray-300" size={20} />
            </div>
        </nav>
    );
}