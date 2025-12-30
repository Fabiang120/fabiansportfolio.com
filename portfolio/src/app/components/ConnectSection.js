"use client";

export default function ConnectSection() {
    return (
        <section className="connect-section border flex items-center relative border-white">
            <div className="textarea px-8 z-10 w-1/3">
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
                <p className="mt-4 text-lg leading-relaxed text-gray-300">Let's connect and explore opportunities together.</p>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">Let's connect and explore opportunities together.</p>
            </div>
            <div className="selfimage flex-1 h-full border border-white">
                Coming soon..
            </div>
        </section>
    );
}