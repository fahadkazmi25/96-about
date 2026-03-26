"use client";
import React from "react";

export default function RegisterGuide() {
    const steps = [
        { title: "Open the 96in app", desc: "Or visit the official website." },
        { title: "Click Register", desc: "Located at the top right corner of the homepage." },
        { title: "Enter Mobile", desc: "Type your number and click on 'Get Code'." },
        { title: "Verification", desc: "Enter the 6-digit verification code sent to your mobile." },
        { title: "Create Password", desc: "Ensure it's secure and memorable." },
        { title: "Complete", desc: "Click Register to complete the process." },
    ];

    return (
        <section className="py-24 px-4 relative z-10" id="register">
            <div className="max-w-7xl mx-auto space-y-20">

                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-lexend font-bold mb-4">
                        How to <span className="text-gradient">Register</span> on 96in
                    </h2>
                    <p className="text-lg text-brand-text/80 font-inter">
                        To register an account with 96.in for sports betting and casino gaming, simply follow these easy steps. It takes less than two minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Timeline connecting line */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-gold/20 via-brand-orange/50 to-brand-gold/20 z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-gold to-brand-orange flex items-center justify-center text-brand-bg font-bold text-2xl mb-6 shadow-[0_0_20px_rgba(254,205,17,0.5)]">
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-bold font-lexend text-brand-text mb-2">{step.title}</h3>
                            <p className="text-brand-text/70 font-inter">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Payments Section Mini */}
                <div className="glass-panel p-8 md:p-12 mt-20 relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
                    <h3 className="text-2xl md:text-3xl font-bold font-lexend mb-8 text-center">
                        Fast and <span className="text-gradient-orange">Secure</span> Payments
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {["Netbanking", "Bank Transfer", "UPI", "AstroPay", "Skrill"].map((method, i) => (
                            <span key={i} className="glass-badge font-lexend text-brand-text/80 hover:text-brand-text hover:border-brand-yellow/50 transition-colors">
                                {method}
                            </span>
                        ))}
                    </div>
                    <p className="text-brand-text/80 text-center max-w-3xl mx-auto font-inter">
                        At 96 affiliates, we offer 24/7 deposit methods for our customers, including local payment options like UPI. Fast withdrawal times (Instant) and up to ₹200,000 max withdrawal amount.
                    </p>
                </div>
            </div>
        </section>
    );
}
