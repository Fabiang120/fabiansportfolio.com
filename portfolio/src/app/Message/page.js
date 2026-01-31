"use client";
import { motion } from "framer-motion";
import { useState } from 'react';
import SideNav from "../components/SideNav";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { buttonVariants } from "../components/frameranims"
import { IoSend } from "react-icons/io5"



export default function MessagePage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = async () => {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message })
        });

        const data = await response.json();

        if (data.success) {
            setEmail('');
            setMessage('');
            setStatus('Message Sent!')
        } else {
            setStatus('Something Went Wrong')
        }
    };
    return (
        <>
            <SideNav />
            <div className="min-h-screen relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-26 p-8">
                <div className="contact-info w-[80%] justify-self-center self-center">
                    <h1 className="text-white/80 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-8">Get In Touch</h1>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-14 h-14 rounded-full bg-[#10c8e0] flex items-center justify-center">
                            <FiPhone size={24} />
                        </div>
                        <div>
                            <p className="text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">Phone</p>
                            <p className="text-white/90 text-[1rem] md:text-2xl font-semibold tracking-tight leading-tight">+17863174619</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-14 h-14 rounded-full bg-[#10c8e0] flex items-center justify-center">
                            <FiMail size={24} />
                        </div>
                        <div>
                            <p className="text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">Email</p>
                            <p className="text-white/90 text-[1rem] md:text-2xl font-semibold tracking-tight leading-tight">sales@fabiansgeneralcorner.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-14 h-14 rounded-full bg-[#10c8e0] flex items-center justify-center">
                            <FiMapPin size={24} />
                        </div>
                        <div>
                            <p className="text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">City & State</p>
                            <p className="text-white/90 text-[1rem] md:text-2xl font-semibold tracking-tight leading-tight">Gainesville, Florida</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form w-[80%] rounded-xl justify-self-center self-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <p className="font-mono text-lg sm:text-xl text-white/70">
                            #include &lt;your_idea.hpp&gt;
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.0"
                            viewBox="0 0 600.000000 412.000000"
                            preserveAspectRatio="xMidYMid meet"
                            className="w-full h-auto max-w-[160px] sm:max-w-[220px]"
                        >
                            <g transform="translate(0.000000,412.000000) scale(0.050000,-0.050000)" fill="#22d3ee" stroke="none">
                                <path d="M7570 4649 c-321 -58 -351 -64 -543 -119 -229 -65 -315 -107 -540 -261 -352 -241 -938 -478 -903 -364 8 26 69 58 456 242 361 172 400 248 149 295 -389 72 -665 -40 -1079 -438 -92 -89 -215 -183 -290 -223 -71 -38 -175 -111 -230 -162 -139 -131 -209 -161 -641 -280 -209 -57 -382 -112 -385 -121 -4 -8 -18 -11 -32 -6 -15 6 -135 -18 -269 -51 l-243 -62 -125 58 c-69 31 -188 110 -266 176 -327 276 -833 323 -1110 104 -167 -132 -441 -504 -410 -556 6 -10 1 -21 -11 -25 -12 -4 -27 -48 -32 -98 -16 -136 135 -242 349 -245 36 -1 65 -7 65 -14 0 -78 1475 -94 2070 -23 2368 285 2890 306 2230 94 -60 -19 -119 -41 -130 -47 -11 -7 -32 -14 -48 -16 -166 -25 -10 -123 298 -187 368 -76 1582 -24 1661 71 29 35 -22 59 -190 89 -340 59 -172 134 355 160 211 11 438 32 504 47 258 58 521 140 545 170 18 22 25 23 25 5 0 -17 13 -21 35 -12 226 89 733 117 1476 82 590 -28 603 28 127 535 -442 470 -811 643 -1423 667 l-295 11 -64 113 c-204 359 -559 487 -1086 391z m154 -1062 c-6 -389 41 -493 123 -275 46 122 48 345 5 465 l-32 87 75 -13 c428 -74 537 -372 237 -648 -281 -258 -848 -179 -1209 170 l-106 103 31 59 c97 188 510 356 831 338 l49 -3 -4 -283z" />
                                <path d="M10952 3083 c-8 -12 37 -39 108 -65 142 -51 144 -76 9 -115 -288 -82 -319 -94 -319 -123 0 -42 227 -31 446 21 247 58 309 99 250 164 -62 68 -465 165 -494 118z" />
                                <path d="M603 2777 c-288 -34 -401 -160 -225 -252 183 -96 702 -192 702 -130 0 21 -300 132 -315 116 -13 -13 -105 74 -105 99 0 13 45 44 100 70 93 43 133 98 75 102 -14 1 -43 3 -65 5 -22 2 -97 -2 -167 -10z" />
                            </g>
                        </svg>
                    </motion.div>
                    <p className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">Your email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent border-b border-cyan-400 w-full mb-8 outline-none" />
                    <p className="mt-4 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-gray-300">Message</p>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="bg-transparent border-b border-cyan-400 w-full mb-8 outline-none resize-none" rows={1} />
                    <motion.button
                        variants={buttonVariants}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1, type: 'tween' }}
                        onClick={handleSubmit}
                        whileHover="hover"
                        className="px-6 py-4 mt-5 text-sm sm:text-base text-black font-semibold bg-cyan-300 [clip-path:polygon(0_0,100%_0,100%_78%,calc(100%-8px)_100%,0_100%)] flex items-center"
                    >
                        <IoSend size={20} className="inline mr-2" />
                        Send Message
                    </motion.button>
                    {status && <p className="text-cyan-400 mt-4">{status}</p>}
                </div >
            </div >
        </>
    );
}
