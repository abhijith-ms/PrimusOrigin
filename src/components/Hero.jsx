import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.webp';

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-24 md:pt-28"
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

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center mb-6 md:mb-8"
                    >
                        <div className="relative">
                            {/* White glow layers */}
                            <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl scale-110"></div>
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-105"></div>
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl"></div>
                            <img 
                                src="/logo.png" 
                                alt="PrimusOrigin Logo" 
                                className="h-20 md:h-28 lg:h-32 w-auto object-contain relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
                            />
                        </div>
                    </motion.div>

                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 backdrop-blur-sm">
                        Premium Export Quality
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-4 md:mb-6">
                        PrimusOrigin <br />
                        <span className="text-accent">Your Global Export Partner</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 font-light px-4">
                        Connecting India's finest products to the world. Specializing in premium spices, 
                        textiles, and grains with uncompromising quality and reliable global delivery.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-accent text-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                            >
                                Contact Us
                            </motion.button>
                        </Link>
                        <Link to="/products">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto"
                            >
                                View Products
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-12 md:mt-16 relative max-w-4xl mx-auto px-4"
                >
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                        <img
                            src={heroBg}
                            alt="Premium Black Pepper from Kerala"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-20 text-left">
                            <p className="text-accent text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2">Sourced from India</p>
                            <h3 className="text-lg md:text-2xl font-serif">Premium Quality Products</h3>
                        </div>
                    </div>
                </motion.div>

                {/* Key Highlights Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
                >
                    {[
                        { number: "10+", label: "Years Experience", icon: "🏆" },
                        { number: "15+", label: "Countries Served", icon: "🌍" },
                        { number: "3", label: "Product Categories", icon: "📦" },
                        { number: "100%", label: "Quality Assured", icon: "✓" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all"
                        >
                            <div className="text-3xl md:text-4xl mb-2">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.number}</div>
                            <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-12 md:mt-16"
                >
                    <p className="text-white/60 text-xs md:text-sm mb-4 uppercase tracking-wider">Certified & Trusted</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {["ISO 22000", "FSSAI", "APEDA", "Organic", "HACCP"].map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + index * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-white/90 border border-white/20"
                            >
                                {cert}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
