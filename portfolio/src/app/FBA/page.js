"use client";

import { motion } from "framer-motion";
import { IoArrowForward, IoArrowBack, IoCodeSlash, IoTerminalOutline } from "react-icons/io5";
import SideNav from "../components/SideNav";
import { buttonVariants } from "../components/frameranims";

export default function FBAPage() {
    return (
        <>
            <SideNav />
            <div className="flex flex-col">
                <div className="h-screen">
                    <img src="/images/work.png" alt="Secret boxes from a secret company" />
                    <p>C++ Backend & API Integration</p>
                    <h1>Amazon FBA Sourcing Tool</h1>
                    <p>A backend application I built to parse wholesale catalogs and ping Amazon's Selling Partner API to find profitable items I believed in to sell.</p>
                </div>
                <div className="h-screen">
                    <h2>The problem</h2>
                    <p>Cross-referencing thousads of rows of supplier pricing data agains tlive Amazon catalog pricing manually was an operational bottleneck that tooks hours every single day. Speaking with businesses and hearing their stories is what I wanted to focus on, hence my primary goal was to automate this tedious process. I wanted to making my purchasing decisions instant and driven by real time data.</p>
                    <img src="/images/excel.png" alt="An excel sheet from a secret company" />
                </div>
                <div className="h-screen">
                    <h2>The Architecture</h2>
                    <p>This C++ Application utilizes the xlnt library which is explicitly built for rapid Excel data ingestion. Secure, asynchronous API communication was achieved natively via the Casablanca Rest SDK alongside OpenSSL to handle Amazon's rigorous SP-API authentication. To accomodate notoriously strict SP-API throttles, built in microsecond-level rate limiting and systematic exponetial backoff structures were engineered to pull catalogs cleanly without interruptions </p>
                </div>
                <div className="h-screen">
                    <h2>The Impact</h2>
                    <p>By completely automating the product discovery pipeline, the tool elimated 6+ hours of manual work every single day. Business operatios pivoted from spreadsheet crunching to business negotiations and strategic purchasings - contributing to over 20,000 sales.</p>
                    <motion.button
                        variants={buttonVariants}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1, type: 'tween' }}
                        whileHover="hover"
                        className="
                                                        px-6
                                                        py-4
                                                        mt-8 
                                                        text-lg 
                                                        text-black 
                                                        font-semibold 
                                                        bg-cyan-300
                                                        [clip-path:polygon(0_0,100%_0,100%_78%,calc(100%-8px)_100%,0_100%)] flex items-center">View GitHub <IoArrowForward size={20} className="inline ml-2" /></motion.button>
                </div>
            </div>
        </>
    );
}
