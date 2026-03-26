"use client";
import React from "react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

            <div className="glass-panel max-w-5xl w-full mx-auto p-8 md:p-12 lg:p-20 relative z-10 text-center space-y-8 animate-fade-in-up">

                <div className="inline-block glass-badge text-brand-gold font-medium text-sm md:text-base border-brand-gold/30 mb-4 tracking-wider">
                    OFFICIAL 96IN & 96.COM LAUNCHED IN INDIA
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-lexend">
                    The Ultimate <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-orange">
                        Sports & Casino
                    </span>
                    <br className="hidden md:block" /> Destination
                </h1>

                <p className="text-lg md:text-xl text-brand-text/80 max-w-3xl mx-auto leading-relaxed font-inter">
                    Welcome to 96in, fast-growing as one of the preeminent online gaming destinations in India. Our casino boasts an extensive library of games contributed by the best software developers in the world, including slot machines, table games, 96 game, and live dealer games.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-brand-bg font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(254,205,17,0.6)] transition-all transform hover:-translate-y-1">
                        Register Now!
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 glass-panel border border-brand-text/20 text-brand-text font-bold rounded-full text-lg hover:bg-brand-text/10 transition-all self-stretch flex items-center justify-center">
                        Download App
                    </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-brand-text/10 mt-12">
                    {[
                        { label: "Games", value: "3000+" },
                        { label: "Providers", value: "Evolution, PG..." },
                        { label: "Payout", value: "Instant" },
                        { label: "Licensed", value: "Anjouan" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center space-y-2">
                            <span className="text-2xl md:text-3xl font-bold text-brand-text font-lexend">{stat.value}</span>
                            <span className="text-brand-text/60 text-sm uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
