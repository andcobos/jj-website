import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    // EDIT THE LETTER CONTENT HERE
    const title = "Para jj,";
    const message = `
    Lo quiero muchooooooo. Se que hay dias buenos y malos, pero
    enserio trataré que los dias buenos sean muuuuucho mas que los malos.

    Gracias por todo lo que hace por mi, enserio lo valoro muchisimo, 
    no crea que no. Este año si tratar de ser mejor pa estar bien con usted :)

    Uste es una gran persona, vet, futuro pescador, youtuber, drummer, sobreviviente ranger...
    Sepa que siempre lo vua apoyar en lo que haga yayudarle en lo que necesite. 
    Por si quiere un sitio web ve ya se lo hice. 
    Lo qet mucho.

    Con amor, cariño, afecto, aprecio, etcccc.,
    Andrea ♥
  `;

    // Animation variants for typewriter effect
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.03, // Speed of typing
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section className="min-h-screen w-full flex items-center justify-center p-8 md:p-16 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="bg-[#fdfbf7] text-dark-wood p-8 md:p-12 max-w-3xl w-full rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.2)] md:rotate-1 transform transition-transform hover:rotate-0 duration-500 paper-texture"
                style={{
                    backgroundImage: "linear-gradient(#e0e0e0 1px, transparent 1px)",
                    backgroundSize: "20px 20px" // Notebook lines effect
                }}
            >
                <motion.h2
                    className="font-serif text-3xl md:text-5xl mb-6 text-bonfire-orange"
                    variants={sentence}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {title.split("").map((char, index) => (
                        <motion.span key={index} variants={letter}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.div
                    className="font-handwriting text-xl md:text-3xl leading-relaxed whitespace-pre-line"
                    variants={sentence}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {message.split("").map((char, index) => (
                        <motion.span key={index} variants={letter}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

                <div className="mt-8 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="text-bonfire-orange text-4xl"
                    >
                        ♥
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Story;
