import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import TableInfo from "./components/TableInfo";
import GamesInfo from "./components/GamesInfo";
import RegisterGuide from "./components/RegisterGuide";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text font-inter selection:bg-brand-gold selection:text-brand-bg">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-brand-yellow/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[600px] bg-brand-orange/5 rounded-[100%] blur-[120px] mix-blend-screen" />

        {/* Simple CSS mesh grid instead of image */}
        <div
          className="absolute inset-0 z-[-1] opacity-5 mix-blend-screen"
          style={{
            backgroundImage: "linear-gradient(#fecd11 1px, transparent 1px), linear-gradient(90deg, #fecd11 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <Navbar />

      <div className="flex flex-col gap-y-12 pb-24">
        <Hero />

        <WhyChoose />

        <TableInfo />

        <GamesInfo />

        <RegisterGuide />

        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
