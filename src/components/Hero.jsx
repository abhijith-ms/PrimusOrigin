import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.webp';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1a4d3d] to-secondary opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            {/* Decorative Circles */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
                        Premium Export Quality
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                        PrimusOrigin <br />
                        <span className="text-accent">Finest Source</span>, First in Quality
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
                        Delivering the authentic essence of Indian spices to the world.
                        Sourced from the lush gardens of Kerala, processed with precision.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-accent text-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
                        >
                            Contact Us
                        </motion.a>
                        <motion.a
                            href="#products"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all w-full md:w-auto"
                        >
                            View Products
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-16 relative max-w-4xl mx-auto"
                >
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                        <img
                            src={heroBg}
                            alt="Premium Black Pepper from Kerala"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-8 left-8 z-20 text-left">
                            <p className="text-accent text-sm uppercase tracking-wider mb-2">Origin: Kerala, India</p>
                            <h3 className="text-2xl font-serif">World's Best Black Pepper</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
