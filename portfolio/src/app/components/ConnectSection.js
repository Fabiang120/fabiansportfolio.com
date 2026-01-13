"use client";

export default function ConnectSection() {
    return (
        <section className="connect-section flex items-center relative pl-30">
            <div className="textarea z-10 w-1/3">
                <div className="intro py-5 flex items-start gap-4">
                    <img
                        className="h-55 drop-shadow-lg"
                        src="/images/Cuban-Trogon.png"
                        alt="Cuban Trogon"
                    />
                    <div className="speech-bubble relative bg-cyan-400 rounded-2xl px-8 py-4 mt-2">
                        <h2 className="text-5xl font-semibold tracking-tight leading-tight text-black">Hola!</h2>
                        {/* Speech bubble tail */}
                        <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-cyan-400 border-b-8 border-b-transparent"></div>
                    </div>
                </div>

                {/* lets put the cuban bird in a svg with the different colors*/}
                <p className="mt-4 text-lg leading-relaxed text-gray-300">My name is Fabian, and I dedicate most of my time to studying at the University of Florida and expanding my business, Fabian’s General Corner LLC. My work spans full-stack engineering, systems programming, applied machine learning, and API-driven automation. Currently, I’ve been focused on crafting clean, modern web experiences with Tailwind and Next.js, alongside developing a Minecraft mod. If you’re interested in exploring more of my work, scroll down to the next section!</p>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">Outside of my work, I push myself through boxing training, weightlifting, running, and disciplined nutrition planning. P.S. The bird featured here is the tocororo, also known as the “freedom bird”, the national bird of Cuba, representing resilience and independence.</p>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">Send me a message</p>
            </div>
            <div className="selfimage flex-1 h-full border border-white">
                Coming soon..
            </div>
        </section>
    );
}