"use client";
import { useState } from "react";
import { DisplacementSphere } from "./canvas/DisplacementSphere";

export default function IntroSection() {
    return (
        // We need a animated image in the back ground screen must be transparent
        // My name needs to be there 
        // Plus the text developer and + languages 
        <section className="intro-section border px-20 h-screen flex flex-col justify-center relative overflow-hidden border-white">
            <DisplacementSphere />
            <p className="font-(--font-signature) text-sm text-gray-400 uppercase"> Fabian Garcia </p>
            <h1 className="text-7xl font-light mt-4">Full Stack Developer</h1>
            <h1>Languages: C++ Java JavaScript Python HTML/CSS React SQL TailWind Bootstrap Next Node.js</h1>
            <div className="w-48 h-px bg-white mt-6"></div>
        </section>
    );
}
