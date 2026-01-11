"use client";

export default function FBAPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111]">
            <h1 className="text-6xl font-bold text-white mb-6">🚧</h1>
            <h2 className="text-4xl font-semibold text-white mb-4">Under Construction</h2>
            <p className="text-gray-400 text-lg mb-8">This page is being built. Check back soon!</p>
            <a
                href="/"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
                ← Back to Home
            </a>
        </div>
    );
}
