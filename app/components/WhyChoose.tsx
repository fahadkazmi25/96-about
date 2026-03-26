"use client";
import React from "react";

export default function WhyChoose() {
    const advantages = [
        {
            title: "All-in-One Platform",
            desc: "Inside the same interface, users can enjoy slots, jackpots, live dealer tables, and complete sports betting markets."
        },
        {
            title: "Instant Switch",
            desc: "If luck isn't working in the casino, players can instantly move to sports betting. Keep the experience engaging at all times."
        },
        {
            title: "Wide Choices",
            desc: "Thousands of sports markets — cricket, football, tennis, kabaddi — along with premium casino titles."
        },
        {
            title: "Exciting Bonuses",
            desc: "Consistent rewards through welcome bonuses, reload offers, free bets, and special promotions."
        }
    ];

    return (
        <section id="why-choose" className="py-24 px-4 relative z-10">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-lexend font-bold tracking-tight">
                        Why Choose the <br />
                        <span className="text-gradient">96 Official Betting App?</span>
                    </h2>
                    <p className="text-lg text-brand-text/80 font-inter">
                        The 96 platform including 96in and 96.com combines a world-class online casino with a complete sports betting experience. Built for players who want convenience, speed, and variety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {advantages.map((adv, idx) => (
                        <div key={idx} className="glass-panel p-8 md:p-10 group hover:border-brand-gold/50 transition-all duration-500 overflow-hidden relative">
                            {/* Subtle accent glow */}
                            <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-brand-gold/10 rounded-full blur-[60px] group-hover:bg-brand-gold/20 transition-all"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold font-lexend mb-4 text-brand-text group-hover:text-brand-gold transition-colors">
                                    {adv.title}
                                </h3>
                                <p className="text-brand-text/70 leading-relaxed font-inter">
                                    {adv.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-panel mt-16 p-8 md:p-12 text-center bg-gradient-to-r from-brand-bg/80 via-brand-gold/5 to-brand-bg/80">
                    <h3 className="text-2xl md:text-3xl font-bold font-lexend mb-6">A Trusted 96 Gaming Destination</h3>
                    <p className="text-lg text-brand-text/80 max-w-4xl mx-auto">
                        For anyone searching for reliable 96 games, smooth betting, and secure entertainment, the 96 official app stands out as a complete and enjoyable platform.
                    </p>
                </div>
            </div>
        </section>
    );
}
