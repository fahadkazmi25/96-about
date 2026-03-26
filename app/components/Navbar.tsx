"use client";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
    "Sports",
    "Casino",
    "Betting Tips",
    "Mobile App",
    "Bonus",
    "Affiliates",
    "Blogs",
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 rounded-none bg-brand-bg/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-3xl font-bold font-lexend text-gradient">
                            96IN
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link}
                                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                                    className="text-brand-text hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-brand-text hover:text-brand-text/80 px-4 py-2 font-medium transition">
                            Login
                        </button>
                        <button className="bg-brand-gold text-brand-bg px-6 py-2 rounded-full font-bold hover:shadow-[0_0_20px_rgba(254,205,17,0.4)] transition-all">
                            Register
                        </button>
                    </div>

                    <div className="md:hidden flex">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-text hover:text-brand-gold focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass-panel rounded-t-none">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link}
                                href={`#${link.toLowerCase().replace(" ", "-")}`}
                                onClick={() => setIsOpen(false)}
                                className="text-brand-text hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-2 p-2">
                            <button className="text-brand-text border border-brand-text/20 hover:bg-brand-text/10 px-4 py-2 rounded-lg font-medium transition">
                                Login
                            </button>
                            <button className="bg-brand-gold text-brand-bg px-4 py-2 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(254,205,17,0.4)] transition-all">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
