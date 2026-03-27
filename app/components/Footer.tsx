import React from "react";
import Link from "next/link";

export default function Footer() {
    const links = {
        social: ["Facebook", "Twitter", "Instagram", "Pinterest", "LinkedIn", "YouTube"],
        rules: ["Football Book Betting Rules", "Cricket Betting Rules", "Kabaddi Betting Rules", "Responsible Gaming", "Privacy and Cookie Policy", "T&Cs"],
        quickLinks: ["Contact Us", "Bonus", "FAQs", "News", "Write For Us", "Blogs", "Affiliate Program"]
    };

    return (
        <footer className="w-full bg-brand-bg/90 pt-24 pb-12 px-4 relative z-0 border-t border-brand-text/10" id="footer">
            <div className="absolute bottom-0 inset-x-0 h-[200px] bg-gradient-to-t from-brand-gold/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">

                    <div className="space-y-6">
                        <h2 className="text-4xl font-lexend font-bold text-gradient inline-block">96IN</h2>
                        <p className="text-brand-text/70 font-inter leading-relaxed pr-8">
                            The about96 website is the best place to bet on cricket. At the Cricketbook, you can explore exciting cricket markets. 96.com also offers online casino games 24 hours a day.
                        </p>
                        <p className="text-brand-yellow font-inter font-medium pt-4">Please play responsibly and enjoy our sports and gaming experience.</p>
                    </div>

                    <div>
                        <h3 className="text-brand-text font-lexend font-bold text-lg mb-6 tracking-wide">Social Media</h3>
                        <ul className="space-y-4">
                            {links.social.map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-brand-text/70 hover:text-brand-gold hover:underline decoration-brand-gold/30 underline-offset-4 transition-all">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-brand-text font-lexend font-bold text-lg mb-6 tracking-wide">Support & Legal</h3>
                        <ul className="space-y-4">
                            {links.rules.map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-brand-text/70 hover:text-brand-yellow hover:underline decoration-brand-yellow/30 underline-offset-4 transition-all">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-brand-text font-lexend font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
                        <ul className="space-y-4">
                            {links.quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-brand-text/70 hover:text-brand-gold hover:underline decoration-brand-gold/30 underline-offset-4 transition-all">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-brand-text/10 pt-8 mt-16 text-center">
                    <p className="text-brand-text/50 font-inter text-sm tracking-widest uppercase">
                        COPYRIGHT © {new Date().getFullYear()} 96 GROUP ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}
