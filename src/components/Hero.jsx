import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const Hero = () => {
    // Generate random values once using useMemo to avoid "impure render" errors
    const particles = useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            id: i,
            initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            duration: Math.random() * 5 + 3,
            delay: Math.random() * 5,
            size: Math.random() * 4 + 1,
            targetY: Math.random() * -100
        }));
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-forest-green text-starlight">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#051a11] to-forest-green z-0" />

            {/* Stars Overlay (using CSS defined in index.css) */}
            <div className="absolute inset-0 stars-bg opacity-70 z-0" />

            {/* Floating Particles/Fireflies */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-glow-yellow rounded-full z-10"
                    initial={{
                        x: p.initialX,
                        y: p.initialY,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        y: [null, p.targetY],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay
                    }}
                    style={{
                        width: p.size,
                        height: p.size,
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-4 text-starlight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Cosas Ranger
                    </h1>
                    <p className="font-handwriting text-2xl md:text-4xl text-glow-yellow/90 mt-2">
                        Prendido como la fogata :D
                    </p>
                </motion.div>

                {/* Bonfire Animation */}
                <div className="relative mt-12 flex justify-center items-end">
                    {/* Logs */}
                    <div className="absolute bottom-0 w-32 h-12 bg-dark-wood rounded-full rotate-3 transform translate-y-4" />
                    <div className="absolute bottom-0 w-32 h-12 bg-dark-wood rounded-full -rotate-3 transform translate-y-4" />

                    {/* Flames */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [-1, 1, -1] }}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 text-bonfire-orange drop-shadow-[0_0_50px_rgba(255,87,34,0.6)]"
                    >
                        <Flame size={120} fill="#ff5722" strokeWidth={0} className="filter blur-[1px]" />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], y: [-5, 5, -5] }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                        className="absolute bottom-2 z-10 text-glow-yellow opacity-70 mix-blend-screen"
                    >
                        <Flame size={100} fill="#ffeb3b" strokeWidth={0} className="filter blur-[1px]" />
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-starlight/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-starlight/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
