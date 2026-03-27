"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const networkStats = [
    { label: "TOTAL GAMES", value: "3,000+" },
    { label: "ACTIVE PLAYERS", value: "60.15K" },
    { label: "ACTIVE PROVIDERS", value: "50+" },
    { label: "INSTANT PAYOUTS", value: "₹269.9M" },
];

import DecryptedText from "./DecryptedText";

const providerLogos = [
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/08/32/083229cf47e8c26c63c1ec7d50fd2616.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/52/ea/52ea4ef91c3da3183a080859a2f98906.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/f6/92/f692ce80dffb36d4471ecb792a59de43.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_domain/6f/fd/6ffd92cc1bb6835547e5f8d057c93b10.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/7e/0c/7e0ca3ce34a5e6d492dc9844bd1b7f5c.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/2b/e9/2be9d3e09b5a8fbc51a3488d677363df.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/27/cd/27cd6b1ca96be71406ccf61fc63d6408.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/62/4a/624a99ea82e28dbf8dafb70e5bf983fa.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/62/21/6221bd20a8dd8b2e1fddab7186d00474.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/32/34/323403ed745bfa72df8e18c96d4e480a.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/8e/49/8e495b9e73e12c1bf1a4769574bd1d14.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/f2/fe/f2fec64415aaee01bd04c90c2cdb3730.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/6b/06/6b06e197100fdcf3ad8c04510bcb86d4.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/62/6a/626a595a8850d0fcb96f0c8752fd0201.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/3c/a6/3ca6bb8ad53bd11495d108fc682ab9b2.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/8b/aa/8baaef7b511bd05c440480883679ac42.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/a5/da/a5daa5afa057a94e9aa0eea021c10562.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/28/01/2801b8744883e35ba4e349717e7e51fb.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/75/d5/75d54d115608301ef6333bf296994948.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/7f/fb/7ffbd160c16b1adcafbfbd7ee0ab7ac2.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/ee/bf/eebf6e65bd3ac7cb3de007bfde4217cf.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/67/f8/67f89398428dca83ed8d431ed2795402.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/0e/93/0e93b620a1b54331451003ed7c64276b.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/2f/48/2f48b55c775818737ea423a1d39550f6.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/8d/89/8d89af2c2bc35336785c08c40b7042dd.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///images/vendor/icon/e3/39/e339a5230e165f85365506b0855ca794.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/58/5a/585ad78375fb4ba541add3dc79c06c13.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/11/b2/11b2ee2a28544099a0537b3929be3e3d.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/33/c4/33c4581ac475df1302912289687c44b7.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/52/9d/529d1d836f0603f4c875e556b518511c.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/2c/96/2c96163e9e4d6286dd54b63678700f68.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/59/f7/59f72339850dcc747d3e6d2d184385db.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/ee/7d/ee7d472d4e5c5669afa0e2a874b12d03.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/8e/fa/8efa9209408319ada1f1896fb808220a.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/01/ba/01ba566c2203c808c7da13d53dfb51b7.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/08/9f/089fa1857eb6971106c1b994bfdfe1eb.png",
    "https://imgp.crlbou.com/insecure/dpr:2/f:avif/plain/local:///load_page_config/54/e3/54e338bf695fd9fe78f450666cfe30c2.png"
];

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">

            {/* ─── Full-Viewport Background Image ─── */}
            <Image
                src="/hero-section.jpg"
                alt="96in — Premium Sports & Casino"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50 z-[1]" />

            {/* Subtle gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-transparent to-[#0a0a0c]/80 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-transparent to-transparent z-[1]" />

            {/* Cinematic Lens Flare / Soft Glow Behind Text */}
            <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none z-[1]" />

            {/* ─── Hero Content Container ─── */}
            <div
                className="relative z-10 flex flex-col mx-auto w-full overflow-visible min-h-screen"
                style={{
                    maxWidth: '1440px',
                    padding: '140px 48px 24px',
                    gap: '32px',
                }}
            >
                {/* ─── Main Content Grid ─── */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center lg:items-end">

                    {/* ═══ LEFT COLUMN — Dynamic Cinematic Text ═══ */}
                    <div className="flex flex-col justify-end gap-6 pb-4 sm:pb-8 relative">
                        {/* Eyebrow Label */}
                        {/* <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            <div className="w-8 h-[1px] bg-brand-gold"></div>
                            <span className="text-brand-gold font-lexend text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                                Welcome to the Next Gen
                            </span>
                        </div> */}

                        {/* Cinematic Heading replacing previous static text */}
                        <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <h1
                                className="font-lexend font-black leading-[1.05] tracking-tighter text-white"
                                style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
                            >
                                96.com
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 font-light mt-2"
                                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: '1.2' }}
                                >
                                    Best online sports betting<br />and casino
                                </span>
                            </h1>
                            {/* Glowing reflection effect underneath text */}
                            <div className="absolute -inset-x-4 top-1/2 -z-10 h-[100%] bg-gradient-to-r from-brand-gold/20 via-brand-orange/10 to-transparent blur-3xl rounded-full opacity-50 mix-blend-screen pointer-events-none filter"></div>
                        </div>

                        {/* Dynamic CTA cluster */}
                        <div className="flex flex-wrap items-center gap-5 pt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            <button className="relative group overflow-hidden cursor-pointer rounded-full font-bold text-sm tracking-wide bg-white text-black px-9 py-4 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    Join the Action
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </span>
                                {/* Hover sweep effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            {/* <button className="px-8 py-4 rounded-full border border-white/10 text-white font-medium text-sm backdrop-blur-md hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                                View Odds
                            </button> */}
                        </div>
                    </div>

                    {/* ═══ RIGHT COLUMN — Network Stats Info Box ═══ */}
                    <div
                        className="flex flex-col items-end gap-6 w-full lg:w-[280px] xl:w-[320px] relative overflow-visible p-8 sm:p-10 bg-black/20 backdrop-blur-2xl animate-fade-in-up"
                        style={{
                            borderRadius: '24px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                            animationDelay: '400ms',
                        }}
                    >
                        {/* Section Title */}
                        <div className="flex items-center gap-3 w-full justify-end mb-2">
                            {/* <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> */}
                            <p className="text-white/40 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase font-lexend">
                                Game Statistics
                            </p>
                        </div>

                        {/* Stats */}
                        {networkStats.map((stat, i) => (
                            <div key={i} className="w-full flex flex-col items-end gap-1.5 pt-5 border-t border-white/5">
                                <span className="text-white/30 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase font-inter">
                                    {stat.label}
                                </span>
                                <span className="text-white font-mono text-2xl sm:text-[32px] leading-none font-light tracking-tight">
                                    <DecryptedText text={stat.value} delay={800 + i * 150} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══ BOTTOM — Partnership Strip ═══ */}
                <div className="relative border-t border-white/10 pt-6 pb-4 mt-auto mb-6 -mx-6 px-6 sm:-mx-12 sm:px-12 rounded-t-[3rem] animate-fade-in-up overflow-hidden" style={{ animationDelay: '500ms' }}>
                    {/* Dark gradient to make logos pop */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/0 -z-10" /> */}

                    <p className="relative z-10 text-white text-[10px] font-bold tracking-[0.3em] uppercase  font-lexend">
                        Powered by World-Class Providers
                    </p>
                    <div className="flex relative z-10 w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <motion.div
                            className="flex gap-12 sm:gap-16 pr-12 sm:pr-16 items-center flex-nowrap w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 100, repeat: Infinity }}
                        >
                            {[...providerLogos, ...providerLogos].map((logo, idx) => (
                                <div key={idx} className="relative w-32 h-16 sm:w-40 sm:h-20 flex-shrink-0 transition-opacity duration-500  cursor-pointer">
                                    <Image
                                        src={logo}
                                        alt={`Provider ${idx}`}
                                        fill
                                        className="object-contain"
                                        sizes="412px"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Inline CSS for simple animations since we can't edit tailwind config directly without restart risk */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
            `}} />
        </section>
    );
}
