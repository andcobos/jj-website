import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeCounter = () => {
    const [timeUnits, setTimeUnits] = useState({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const startDate = new Date("2018-09-05T17:00:00");

        const calculateTime = () => {
            const now = new Date();

            // Precise calculation using Date objects
            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();

            if (days < 0) {
                months--;
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonth.getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            let weeks = Math.floor(days / 7);
            days = days % 7;

            const hours = now.getHours() - startDate.getHours();
            let h = hours;
            let m = now.getMinutes() - startDate.getMinutes();
            let s = now.getSeconds() - startDate.getSeconds();

            if (s < 0) { s += 60; m--; }
            if (m < 0) { m += 60; h--; }
            if (h < 0) {
                h += 24;
                days--;
            }
            if (days < 0) {
                days += 7;
                weeks--;
            }
            if (weeks < 0) {
                // rare edge case where subtracting day pushed back a week
                weeks = 0; // Simplified for robustness
            }

            setTimeUnits({ years, months, weeks, days, hours: h, minutes: m, seconds: s });
        };

        calculateTime();
        const interval = setInterval(calculateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2 my-4">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform duration-300">
                <span className="font-serif text-3xl md:text-4xl text-glow-yellow font-bold">
                    {value}
                </span>
            </div>
            <span className="mt-2 font-handwriting text-xl text-starlight tracking-wider">{label}</span>
        </div>
    );

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative bg-forest-green">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a2d1d] to-[#051a11] z-0" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-serif text-3xl md:text-5xl text-starlight mb-12"
                >
                    Desde hace
                </motion.h2>

                <div className="flex flex-wrap justify-center max-w-4xl">
                    <TimeUnit value={timeUnits.years} label="Años" />
                    <TimeUnit value={timeUnits.months} label="Meses" />
                    <TimeUnit value={timeUnits.weeks} label="Semanas" />
                    <TimeUnit value={timeUnits.days} label="Dias" />
                    <TimeUnit value={timeUnits.hours} label="Horas" />
                    <TimeUnit value={timeUnits.minutes} label="Mins" />
                    <TimeUnit value={timeUnits.seconds} label="Secs" />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 font-handwriting text-2xl text-love-pink opacity-80"
                >
                    ... y contando.
                </motion.p>
            </div>
        </section>
    );
};

export default TimeCounter;
