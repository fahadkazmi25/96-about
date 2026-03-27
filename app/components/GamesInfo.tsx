import React from "react";

export default function GamesInfo() {
    const categories = [
        { title: "Sports Betting", color: "from-brand-gold to-brand-orange" },
        { title: "Casino Games", color: "from-brand-yellow to-brand-orange" },
        { title: "Card Games", color: "from-brand-orange to-[#ff5151]" },
        { title: "Slot Games", color: "from-[#ff5151] to-[#c751ff]" },
    ];

    const slots = ["Mega Moolah", "Ryse of Rome", "Dead or Alive", "Lady Fortuna"];

    return (
        <section className="py-24 px-4 relative z-10 w-full" id="casino">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-lexend font-bold text-brand-text mb-6">
                        96in and 96.com – <span className="text-gradient">Best Online Casino</span>
                    </h2>
                    <p className="text-lg text-brand-text/80 font-inter">
                        Perfect betting site for cricket fans with a dedicated section called Cricketbook. Experience the excitement of live casino gaming from the comfort of your own screens. Real-life dealers hosting games in real-time.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group cursor-pointer">
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                            <h3 className="text-xl font-bold font-lexend relative z-10">{cat.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Info Blocks */}
                <div className="grid md:grid-cols-2 gap-12 pt-8">
                    <div className="glass-panel p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px]" />
                        <h3 className="text-2xl font-bold font-lexend mb-4 text-brand-gold">Live Dealer Casino</h3>
                        <p className="text-brand-text/70 leading-relaxed font-inter mb-6">
                            Experience the excitement of live casino gaming with traditional Indian games such as Teen Patti, Andar Bahar, and 96 game. Interact with friendly and professional dealers.
                        </p>
                        <button className="text-brand-bg bg-brand-gold px-6 py-2 rounded-full font-bold hover:shadow-[0_0_15px_rgba(254,205,17,0.5)] transition-all">
                            Play Now
                        </button>
                    </div>

                    <div className="glass-panel p-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px]" />
                        <h3 className="text-2xl font-bold font-lexend mb-4 text-brand-yellow">Premium Slots</h3>
                        <p className="text-brand-text/70 leading-relaxed font-inter mb-6">
                            Online slots at 96.com offer a simple, random-based gaming experience with features like wild symbols, multipliers, free spins, and bonus games.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {slots.map((slot, i) => (
                                <span key={i} className="px-4 py-2 border border-brand-text/20 rounded-full text-sm font-medium bg-brand-text/5 text-brand-text">
                                    {slot}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
