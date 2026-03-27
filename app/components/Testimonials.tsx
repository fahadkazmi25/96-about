import React from "react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Ishani",
            role: "Player 2, India",
            content: "96.COM is an online gaming destination that never fails to impress. The platform boasts an extensive library of games that truly cater to every player's preferences. The quality of the games is top-notch, with the best software developers in the world contributing to the offerings. The security of my personal and financial data is of utmost importance to me, and I appreciate the platform's use of industry-standard encryption to protect my information. The Curacao Gaming Commission's regulation and registration add an extra layer of reassurance."
        },
        {
            name: "Sehar",
            role: "Player 1, India",
            content: "Dedicated player on 96.COM, I can confidently say that this online gaming destination is the epitome of excellence in the Indian gaming industry. The extensive library of games available on the platform, ranging from slot machines and table games to live dealer games, is a testament to the quality of the software developers who contribute to the casino's offerings. I have never encountered any issues with the security of my personal and financial data."
        }
    ];

    return (
        <section className="py-24 px-4 relative z-10 overflow-hidden text-center md:text-left">
            <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px] -translate-y-1/2 -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-lexend font-bold mb-4">
                        Hear from our <span className="text-gradient">Players</span>
                    </h2>
                    <p className="text-brand-text/80 text-lg font-inter max-w-2xl mx-auto">
                        Discover why players across India choose 96in as their trusted gaming and sports betting destination.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((test, i) => (
                        <div key={i} className="glass-panel p-8 md:p-10 relative flex flex-col justify-between">
                            <div className="absolute top-8 right-8 text-brand-yellow/20 text-6xl font-serif">&quot;</div>
                            <p className="text-brand-text/90 italic font-inter leading-relaxed tracking-wide mb-8 z-10 text-left">
                                {test.content}
                            </p>
                            <div className="flex items-center gap-4 border-t border-brand-text/10 pt-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-gold to-brand-orange flex items-center justify-center font-bold text-brand-bg text-xl uppercase">
                                    {test.name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-lexend font-bold text-brand-text text-lg">{test.name}</h4>
                                    <p className="font-inter text-brand-text/60 text-sm tracking-wide">{test.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
