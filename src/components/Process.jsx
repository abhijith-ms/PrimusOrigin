import React from 'react';
import { motion } from 'framer-motion';
import { HiSearch, HiShieldCheck, HiCube, HiDocumentText, HiTruck } from 'react-icons/hi';

const steps = [
    {
        icon: HiSearch,
        title: "Sourcing & Selection",
        description: "Partner with verified suppliers and conduct quality assessment at source."
    },
    {
        icon: HiShieldCheck,
        title: "Quality Control",
        description: "Multi-stage inspection with lab testing and certification."
    },
    {
        icon: HiCube,
        title: "Processing & Packaging",
        description: "Hygienic processing facilities with custom packaging solutions."
    },
    {
        icon: HiDocumentText,
        title: "Documentation",
        description: "Complete export documentation and regulatory compliance."
    },
    {
        icon: HiTruck,
        title: "Logistics & Delivery",
        description: "Global shipping partners with real-time tracking."
    }
];

const Process = () => {
    return (
        <section className="py-16 md:py-24 bg-bg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0E3D2F_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
                        How We Work
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                        Our Export Process
                    </h2>
                    <p className="text-text/70 text-base md:text-lg max-w-2xl mx-auto">
                        Seamless journey from source to destination with complete transparency and quality assurance.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-primary/20"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center mb-4 relative z-10 shadow-lg border-2 border-primary/10 group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                                    <step.icon className="text-3xl md:text-4xl text-primary group-hover:text-accent transition-colors" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-primary">
                                    {step.title}
                                </h3>
                                <p className="text-text/70 text-sm leading-relaxed px-2">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto"
                >
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">
                        Typical Delivery Timeline
                    </h3>
                    <p className="text-text/70 text-base md:text-lg mb-4">
                        From order confirmation to delivery at your destination
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-text/70">Processing: 3-5 days</span>
                        </div>
                        <div className="text-text/40">•</div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-text/70">Shipping: 10-25 days</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
