"use client";
import { useEffect, useRef } from 'react';

export default function Vault({ className }) {
    const pathRefs = useRef([]);

    useEffect(() => {
        pathRefs.current.forEach((path, index) => {
            if (path) {
                // Determine length; we use a fallback if getTotalLength isn't available
                const length = path.getTotalLength ? path.getTotalLength() : 300;
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;

                // Add a slight stagger delay for the dots
                const delay = index === 0 ? 0 : 0.6 + (index * 0.2);

                // Only drawing the line, no filling to keep it strictly an outline
                path.style.animation = `drawLine 2.5s ease-out ${delay}s forwards`;
            }
        });
    }, []);

    return (
        <svg
            className={className}
            width="80"
            height="80"
            viewBox="0 0 100 100"
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

            {/* Chat Bubble Outline */}
            <path
                ref={el => pathRefs.current[0] = el}
                d="
                    M 25 20
                    L 75 20
                    A 15 15 0 0 1 90 35
                    L 90 60
                    A 15 15 0 0 1 75 75
                    L 60 75
                    L 35 95
                    L 45 75
                    L 25 75
                    A 15 15 0 0 1 10 60
                    L 10 35
                    A 15 15 0 0 1 25 20
                    Z
                "
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Dot 1 */}
            <path
                ref={el => pathRefs.current[1] = el}
                d="M 27 48 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* Dot 2 */}
            <path
                ref={el => pathRefs.current[2] = el}
                d="M 47 48 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* Dot 3 */}
            <path
                ref={el => pathRefs.current[3] = el}
                d="M 67 48 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
}