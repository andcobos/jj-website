import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Circle } from 'lucide-react';

// 1. IMPORTA LAS IMÁGENES DE TUS SUEÑOS/METAS
// Puedes usar las mismas de antes para probar o subir nuevas
import img1 from '../assets/img/img1.JPG'; 
import img2 from '../assets/img/img2.JPG';
import img3 from '../assets/img/img3.jpeg';
import img4 from '../assets/img/img4.jpg';

const BucketList = () => {
    // 2. CONFIGURA TUS 4 METAS AQUÍ
    const goals = [
        { 
            id: 1, 
            title: "Ir a pescar", 
            desc: "Pescar en Iowa siuuu o aqui en algun rio o la playita", 
            src: img1,
            done: false 
        },
        { 
            id: 2, 
            title: "Ir a Iowa", 
            desc: "Uste ya fue 2394234 veces pero no invita, tons pa ir todos yyy disparar", 
            src: img2,
            done: false 
        },
        { 
            id: 3, 
            title: "Ir de camping", 
            desc: "En tiendita y con mesas, sillas, platos ranger siuuuu", 
            src: img3,
            done: false 
        },
        { 
            id: 4, 
            title: "Gshock Tough Solar", 
            desc: "Casi casi para andar con el outfit", 
            src: img4,
            done: false 
        },
    ];

    return (
        <section className="min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center relative z-10">
            {/* Título de la sección */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="font-serif text-4xl md:text-6xl text-amber-100 drop-shadow-lg mb-4">
                    Cosas que faltan
                </h2>
                <p className="text-emerald-200/80 text-lg font-light tracking-wide">
                    Ranger
                </p>
            </motion.div>

            {/* Grid de 4 Elementos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                {goals.map((goal, index) => (
                    <motion.div
                        key={goal.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-slate-800/60 backdrop-blur-sm border border-emerald-900/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-900/20 transition-all duration-300"
                    >
                        {/* Imagen de la meta */}
                        <div className="h-48 w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                            <img 
                                src={goal.src} 
                                alt={goal.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Icono de estado (Cumplido o Pendiente) */}
                            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                                {goal.done ? (
                                    <> <CheckCircle2 size={14} className="text-green-400" /> Cumplido </>
                                ) : (
                                    <> <Circle size={14} className="text-amber-400" /> Pendiente </>
                                )}
                            </div>
                        </div>

                        {/* Contenido Texto */}
                        <div className="p-6 relative z-20">
                            <div className="flex items-center gap-2 mb-2 text-rose-300/80">
                                <MapPin size={16} />
                                <span className="text-xs font-semibold tracking-widest uppercase"> #{goal.id}</span>
                            </div>
                            
                            <h3 className="font-serif text-2xl text-amber-50 font-bold mb-3 group-hover:text-amber-200 transition-colors">
                                {goal.title}
                            </h3>
                            
                            <p className="text-slate-300 font-light leading-relaxed text-sm">
                                {goal.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BucketList;