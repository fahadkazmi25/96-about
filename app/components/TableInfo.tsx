"use client";
import React from "react";

export default function TableInfo() {
    const tableData = [
        { label: "Game Options", value: "Baccarat, Dragon Tiger, Teen Patti, Slots, Blackjack, Roulette, Live Dealers, Andar Bahar, Poker, Sportsbook, Cricket, Football" },
        { label: "Games Provider", value: "Ezugi, Super Spade, Evolution Gaming, IDNPoker, VIVO Gaming, Bgaming, PG" },
        { label: "Payment Gateways", value: "Netbanking, Bank Transfer, UPI, AstroPay, Skrill, Crypto" },
        { label: "Live Chat", value: "The live chat button in the bottom right corner of the official site" },
        { label: "Deposit Time", value: "Immediate" },
        { label: "Withdrawal Time", value: "Instant" },
        { label: "Legality & Ownership", value: "Licensed in Anjouan" }
    ];

    return (
        <section className="py-24 px-4 w-full relative z-10" id="table-info">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-lexend font-bold text-brand-text mb-6">
                        96 is the <span className="text-gradient">perfect betting site</span> for cricket fans
                    </h2>
                </div>

                <div className="glass-panel overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-inter border-collapse">
                            <thead>
                                <tr className="bg-brand-text/5 border-b border-brand-text/10 text-brand-text">
                                    <th className="py-4 px-6 font-semibold uppercase text-sm tracking-wider w-1/3">Feature</th>
                                    <th className="py-4 px-6 font-semibold uppercase text-sm tracking-wider">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-text/10">
                                {tableData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-brand-text/5 transition-colors">
                                        <td className="py-4 px-6 font-medium text-brand-text/90">
                                            {row.label}
                                        </td>
                                        <td className="py-4 px-6 text-brand-text/80 leading-relaxed">
                                            {row.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
