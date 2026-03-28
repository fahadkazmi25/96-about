import React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    {
        name: "Sports",
        path: "#sports",
        submenus: [
            "Cricket",
            "Football Betting",
            "Tennis Betting",
            "Basketball Betting",
            "Kabaddi Betting",
            "Volleyball Betting",
            "Esports Betting",
            "Live Betting & Streaming",
            "Odds & Action Line",
        ],
    },
    {
        name: "Casino",
        path: "#casino",
        submenus: ["Casino", "Slots", "Cards"],
    },
    {
        name: "Betting Tips",
        path: "#betting-tips",
        submenus: [],
    },
    {
        name: "Bonus",
        path: "#bonus",
        submenus: ["VIP Rewards"],
    },
    {
        name: "Affiliates",
        path: "#affiliates",
        submenus: [],
    },
    {
        name: "Blogs",
        path: "#blogs",
        submenus: ["Cricket", "Football", "Casino"],
    },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 pt-6 sm:px-10 w-full max-w-[1440px] mx-auto pointer-events-none">

            {/* ─── LEFT PILL (Logo Only) ─── */}
            <div
                className="pointer-events-auto flex items-center justify-center relative overflow-hidden backdrop-blur-2xl rounded-full"
                style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
                    padding: "8px 24px",
                }}
            >
                <Link href="/" className="relative w-24 h-10 flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <Image
                        src="/96.com.png"
                        alt="96.com Logo"
                        fill
                        sizes="96px"
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>

            {/* ─── RIGHT PILL (Links + CTA) ─── */}
            <nav
                className="pointer-events-auto liquid-glass-nav flex items-center gap-6 sm:gap-8 px-8 py-2 relative overflow-visible backdrop-blur-2xl rounded-[40px]"
                style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
                }}
            >
                {/* Nav Links — Desktop */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group/navitem">
                            <Link
                                href={item.path}
                                className="flex items-center gap-1 text-white hover:text-brand-gold text-sm font-medium tracking-wide transition-colors duration-300 py-3"
                            >
                                {item.name.toUpperCase()}
                                {/* {item.submenus.length > 0 && (
                                    <svg
                                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover/navitem:rotate-180"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                )} */}
                            </Link>

                            {/* Dropdown Submenu */}
                            {item.submenus.length > 0 && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-300 translate-y-2 group-hover/navitem:translate-y-0 min-w-[220px]">
                                    <div
                                        className="flex flex-col py-3 px-2 rounded-2xl backdrop-blur-2xl"
                                        style={{
                                            // background: "rgba(27, 27, 30, 0.85)",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
                                        }}
                                    >
                                        {item.submenus.map((sub) => (
                                            <Link
                                                key={sub}
                                                href={`${item.path}/${sub.toLowerCase().replace(/ /g, "-")}`}
                                                className="text-white hover:text-brand-gold  hover:bg-white/5 px-4 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
                                            >
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-8 bg-brand-text/10 mix-blend-overlay"></div>

                {/* CTA Buttons */}
                <div className="hidden sm:flex items-center gap-4">
                    <Link
                        href="#login"
                        className="text-brand-text/70 hover:text-white text-sm font-medium transition-colors"
                    >
                        Log In
                    </Link>
                    <Link
                        href="#register"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-text/20 text-brand-text text-sm font-medium hover:bg-white/10 hover:border-brand-text/40 transition-all duration-300 flex-shrink-0"
                    >
                        Register
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
                <label
                    htmlFor="mobile-menu-toggle"
                    className="md:hidden text-brand-text hover:text-white cursor-pointer p-1 transition-colors"
                >
                    <span className="sr-only">Toggle Menu</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path className="hamburger-path" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>

                {/* Mobile Dropdown Menu */}
                <div
                    className="hidden peer-checked:flex flex-col absolute top-full right-0 mt-4 p-6 w-[300px] max-w-[90vw] z-50 overflow-y-auto max-h-[80vh]"
                    style={{
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        borderRadius: "32px",
                        background: "rgba(20, 20, 22, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)",
                    }}
                >
                    {navItems.map((item) => (
                        <div key={item.name} className="flex flex-col border-b border-white/5 pb-2 mb-2 last:border-0">
                            <Link
                                href={item.path}
                                className="text-white hover:text-brand-gold px-2 py-3 font-semibold text-lg tracking-wide transition-colors"
                            >
                                {item.name}
                            </Link>
                            {item.submenus.length > 0 && (
                                <div className="flex flex-col pl-4 gap-1 mb-2">
                                    {item.submenus.map((sub) => (
                                        <Link
                                            key={sub}
                                            href={`${item.path}/${sub.toLowerCase().replace(/ /g, "-")}`}
                                            className="text-brand-text/50 hover:text-white py-1.5 text-sm transition-colors"
                                        >
                                            {sub}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex flex-col gap-3 pt-6 mt-2">
                        <Link
                            href="#register"
                            className="flex items-center justify-center w-full px-6 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 transition-transform"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hamburger → Close animation css */}
            <style dangerouslySetInnerHTML={{
                __html: `
                #mobile-menu-toggle:checked ~ label svg path {
                    d: path('M6 18L18 6M6 6l12 12');
                }
            `}} />
        </header>
    );
}
