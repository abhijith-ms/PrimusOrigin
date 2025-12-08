import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import aboutImage from '../assets/images/about-story.png';

const About = () => {
    const features = [
        "Single-origin sourcing from Kerala",
        "Stringent quality checks at every stage",
        "Global export-ready standards",
        "Sustainable and ethical farming practices"
    ];

    return (
        <section id="about" className="py-20 bg-bg">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200 group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src={aboutImage}
                                alt="About PrimusOrigin"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Rooted in Tradition, <br /> Driven by Quality
                        </h2>
                        <p className="text-text/80 text-lg mb-8 leading-relaxed">
                            PrimusOrigin stands as a bridge between the rich spice heritage of India and the global palate.
                            We specialize in sourcing the finest black pepper directly from the plantations of Kerala,
                            ensuring that every grain retains its authentic aroma and potency.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-center space-x-3"
                                >
                                    <HiCheckCircle className="text-accent text-xl flex-shrink-0" />
                                    <span className="text-text font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
