"use client";
import { useEffect, useRef } from 'react';

export default function GiftBoxIcon({ className = "" }) {
    const pathRefs = useRef([]);

    useEffect(() => {
        pathRefs.current.forEach((path, index) => {
            if (path) {
                const length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
                path.style.animation = `drawLine 0.8s ease-out ${index * 0.2}s forwards`;
            }
        });
    }, []);

    return (
        <svg
            className={className}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>
                {`
                    @keyframes drawLine {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}
            </style>

            {/* Box body - converted to path */}
            <path
                ref={el => pathRefs.current[0] = el}
                d="M8 25 L52 25 L52 55 L8 55 Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Box lid - converted to path */}
            <path
                ref={el => pathRefs.current[1] = el}
                d="M5 18 L55 18 L55 28 L5 28 Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Vertical ribbon */}
            <path
                ref={el => pathRefs.current[2] = el}
                d="M30 28 L30 55"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Horizontal ribbon */}
            <path
                ref={el => pathRefs.current[3] = el}
                d="M8 40 L52 40"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Bow left loop */}
            <path
                ref={el => pathRefs.current[4] = el}
                d="M30 18 C22 8, 10 10, 20 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Bow right loop */}
            <path
                ref={el => pathRefs.current[5] = el}
                d="M30 18 C38 8, 50 10, 40 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
