"use client";
import React, { useEffect, useState } from "react";

export default function DecryptedText({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayedText, setDisplayedText] = useState(text.replace(/[0-9]/g, '0'));

    useEffect(() => {
        let iterations = 0;
        const characters = '0123456789';

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText(() =>
                    text
                        .split('')
                        .map((letter, index) => {
                            if (index < Math.floor(iterations)) return text[index];
                            if (letter === '+' || letter === ',' || letter === '₹' || letter === 'M' || letter === 'K' || letter === '.') return letter;
                            return characters[Math.floor(Math.random() * 10)];
                        })
                        .join('')
                );

                if (iterations >= text.length) {
                    clearInterval(interval);
                    setDisplayedText(text);
                }

                // Slower animation speed
                iterations += 1 / 5;
            }, 40);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <>{displayedText}</>;
}
