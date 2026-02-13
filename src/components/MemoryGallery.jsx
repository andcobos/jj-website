import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORTA TUS IMÁGENES AQUÍ
// (Asegúrate de que la ruta coincida con donde guardaste las fotos en src/assets/img)
import foto1 from '../assets/img/foto1.jpeg'; 
import foto2 from '../assets/img/foto2.jpeg';
import foto3 from '../assets/img/foto3.jpeg';
import foto4 from '../assets/img/foto4.jpeg';
import foto5 from '../assets/img/foto5.jpeg';
import foto6 from '../assets/img/foto6.jpeg';
import foto7 from '../assets/img/foto7.jpeg';
import foto8 from '../assets/img/foto8.jpeg';
import foto9 from '../assets/img/foto9.jpeg';
import foto10 from '../assets/img/foto10.jpeg';
import foto11 from '../assets/img/foto11.jpeg';
import foto12 from '../assets/img/foto12.JPG';

const MemoryGallery = () => {
    // 2. ACTUALIZA EL ARRAY CON LA PROPIEDAD 'src'
    const photos = [
        { id: 1, src: foto1, rot: "rotate-2" },
        { id: 2, src: foto2, rot: "-rotate-1" },
        { id: 3, src: foto3, rot: "rotate-3" },
        { id: 4, src: foto4, rot: "-rotate-2" }, // Ejemplo repetido
        { id: 5, src: foto5, rot: "rotate-1" },
        { id: 6, src: foto6, rot: "-rotate-3" },
        { id: 7, src: foto7, rot: "rotate-2" },
        { id: 8, src: foto8, rot: "-rotate-1" },
        { id: 9, src: foto9, rot: "rotate-3" },
        { id: 10, src: foto10, rot: "-rotate-2" },
        { id: 11, src: foto11, rot: "rotate-1" },
        { id: 12, src: foto12, rot: "-rotate-3" },
    ];

    return (
        <section className="min-h-screen w-full py-20 px-4 flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-6xl text-starlight mb-16 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
                Momentos especiales UwU
            </motion.h2>

            <div className="columns-1 md:columns-3 lg:columns-4 gap-8 max-w-7xl w-full space-y-8">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        className={`relative break-inside-avoid bg-white p-3 pb-12 shadow-xl rounded-sm transform ${photo.rot} transition-all duration-300 ease-out cursor-pointer group`}
                    >
                        {/* 3. AQUÍ ESTÁ EL CAMBIO PRINCIPAL: ETIQUETA IMG */}
                        <div className="w-full h-64 overflow-hidden relative">
                            <img 
                                src={photo.src} 
                                alt={`Recuerdo ${photo.id}`} 
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            
                            {/* Número o Texto sobre la foto (Opcional, puedes borrarlo si quieres ver solo la foto) */}
                            {/* <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                                {photo.id}
                            </div> 
                            */}
                        </div>

                        {/* Tape Effect (Cinta adhesiva) */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/30 rotate-1 backdrop-blur-sm shadow-sm" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MemoryGallery;