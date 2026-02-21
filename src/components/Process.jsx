import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSortAmountDown, FaBoxOpen, FaShip } from 'react-icons/fa';

const steps = [
    {
        icon: FaLeaf,
        title: "Sourcing",
        description: "Directly from certified farmers in Kerala."
    },
    {
        icon: FaSortAmountDown,
        title: "Sorting & Grading",
        description: "Rigorous cleaning and size grading."
    },
    {
        icon: FaBoxOpen,
        title: "Packaging",
        description: "Hygienic, moisture-proof packaging."
    },
    {
        icon: FaShip,
        title: "Export Logistics",
        description: "Efficient global shipping and documentation."
    }
];

const Process = () => {
    return (
        <section className="py-12 md:py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4B98A_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">How We Work</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">From Farm to Fork</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full flex items-center justify-center mb-4 md:mb-6 relative z-10 shadow-xl border-4 border-primary group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="text-2xl md:text-3xl text-accent" />
                                </div>
                                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-accent">{step.title}</h3>
                                <p className="text-white/70 text-sm px-2 md:px-4">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
