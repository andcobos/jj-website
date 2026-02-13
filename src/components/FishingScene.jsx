import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FishingScene = () => {
    const lakeReflections = useMemo(() => {
        return [...Array(5)].map((_, i) => ({
            id: i,
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            width: Math.random() * 200 + 50 + 'px',
            duration: Math.random() * 3 + 2
        }));
    }, []);

    return (
        <section className="h-[60vh] w-full relative overflow-hidden flex items-end justify-center pb-0">
            {/* Water Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0e4d3a] to-transparent opacity-50" />

            {/* Moon */}
            <motion.div
                className="absolute top-10 right-10 w-24 h-24 bg-starlight rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Lake Reflection using CSS mask or simple divs */}
            <div className="absolute bottom-0 w-full h-32 z-10 overflow-hidden">
                {lakeReflections.map((reflection) => (
                    <motion.div
                        key={reflection.id}
                        className="absolute h-1 bg-white/10 rounded-full"
                        style={{
                            top: reflection.top,
                            left: reflection.left,
                            width: reflection.width,
                        }}
                        animate={{ x: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: reflection.duration, repeat: Infinity }}
                    />
                ))}
            </div>

            {/* Dock & Characters SVG */}
            <div className="relative z-20 w-80 md:w-96 mb-[-5px]">
                <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-lg">
                    {/* Dock Piles */}
                    <rect x="50" y="200" width="10" height="100" fill="#3d2b1f" />
                    <rect x="150" y="220" width="10" height="80" fill="#3d2b1f" />
                    <rect x="250" y="210" width="10" height="90" fill="#3d2b1f" />

                    {/* Dock Planks */}
                    <rect x="20" y="200" width="300" height="10" fill="#5d4037" />

                    {/* Characters (Minimalist Silhouettes) */}
                    <g transform="translate(180, 160)">
                        {/* Character 1 */}
                        <motion.g
                            animate={{ rotate: [0, 2, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <circle cx="0" cy="0" r="12" fill="#0a2d1d" /> {/* Head */}
                            <path d="M-10,10 Q0,45 10,40 L15,40 L15,45 L-15,45 Z" fill="#0a2d1d" /> {/* Body */}
                            {/* Fishing Rod */}
                            <line x1="10" y1="25" x2="60" y2="-10" stroke="#3d2b1f" strokeWidth="2" />
                            <motion.line
                                x1="60" y1="-10" x2="60" y2="60"
                                stroke="rgba(255,255,255,0.5)" strokeWidth="1"
                                animate={{ y2: [60, 65, 60] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.g>

                        {/* Character 2 */}
                        <motion.g
                            transform="translate(40, 5)"
                            animate={{ rotate: [0, -2, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <circle cx="0" cy="0" r="11" fill="#0a2d1d" /> {/* Head */}
                            <path d="M-10,10 Q0,45 10,40 L15,40 L15,45 L-15,45 Z" fill="#0a2d1d" /> {/* Body */}
                            {/* Fishing Rod */}
                            <line x1="10" y1="25" x2="60" y2="-15" stroke="#3d2b1f" strokeWidth="2" />
                            <motion.line
                                x1="60" y1="-15" x2="60" y2="70"
                                stroke="rgba(255,255,255,0.5)" strokeWidth="1"
                                animate={{ y2: [70, 80, 70] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            />
                        </motion.g>

                        {/* Heart Bubble */}
                        <motion.path
                            d="M20,-30 C20,-40 10,-40 10,-30 C10,-20 30,0 30,0 C30,0 50,-20 50,-30 C50,-40 40,-40 40,-30 C40,-20 30,-10 30,-10 C30,-10 20,-20 20,-30 Z"
                            fill="#ff5722"
                            transform="translate(0, 0) scale(0.5)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 0, 0], scale: [0, 0.8, 1, 0], y: -20 }}
                            transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.8, 1] }}
                        />
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default FishingScene;
