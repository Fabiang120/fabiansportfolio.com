"use client";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5"


export default function ConnectSection() {
    const router = useRouter();
    return (
        <section id="connect" className="flex flex-col lg:flex-row items-center lg:items-start mb-24 relative z-0 overflow-visible lg:pl-[10rem]">
            <div className="textarea z-10 w-[70%] lg:w-1/3">
                <div className="intro py-5 flex items-start gap-4">
                    <motion.img
                        initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
                        whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 15,
                            duration: 1.2
                        }}
                        className="h-55 drop-shadow-lg"
                        src="/images/Cuban-Trogon.png"
                        alt="Cuban Trogon"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            delay: 1.6
                        }}
                        className="speech-bubble relative bg-cyan-300 rounded-2xl px-2 py-1 md:px-4 md:py-2 mt-2">
                        <h2 className="text-5xl font-semibold tracking-tight leading-tight text-black/90">Hola!</h2>
                        <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-cyan-300 border-b-8 border-b-transparent"></div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 2, duration: 2 }}
                >
                    <p className="mt-4 text-lg leading-relaxed text-gray-300 inline-block max-w-[62ch] text-wrap">My name is Fabian, and I dedicate most of my time to studying at the University of Florida and expanding my business, Fabian's General Corner LLC. My work spans full-stack engineering, systems programming, applied machine learning, and API-driven automation. Currently, I've been focused on crafting clean, modern web experiences with Tailwind and Next.js, alongside developing a Minecraft mod. If you're interested in exploring more of my work, scroll down to the next section!</p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-300 inline-block max-w-[62ch] text-wrap">Outside of my work, I push myself through boxing training, weightlifting, running, and disciplined nutrition planning. P.S. The bird featured here is the tocororo, also known as the "freedom bird", the national bird of Cuba, representing resilience and independence.</p>
                    <button className="mt-5 mb-5 font-semibold text-lg rounded cursor-pointer text-cyan-300 flex items-center" onClick={() => router.push("/Message")}> <IoSend size={20} className="inline mr-2" /> Send Me a Message</button>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 2, duration: 2 }}
                className="selfimage mt-20 flex-1 max-w-[600px] w-[70%] lg:mt-0 lg:flex lg:justify-center lg:translate-y-[29rem] lg:max-w-none">
                <img src="/images/mountain.jpg" className="w-full lg:w-[480px]" />
            </motion.div>
        </section>
    );
}