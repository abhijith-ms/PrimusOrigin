import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiBeaker, HiGlobeAlt } from 'react-icons/hi';

const Quality = () => {
    const certifications = [
        { name: "ISO 22000", color: "bg-blue-100 text-blue-800" },
        { name: "FSSAI", color: "bg-green-100 text-green-800" },
        { name: "Spice Board", color: "bg-orange-100 text-orange-800" },
        { name: "Organic Certified", color: "bg-emerald-100 text-emerald-800" }
    ];

    const checks = [
        {
            icon: HiShieldCheck,
            title: "Purity Guaranteed",
            description: "Zero adulteration policy with strict lab testing."
        },
        {
            icon: HiBeaker,
            title: "Moisture Control",
            description: "Advanced drying techniques to prevent mold and toxins."
        },
        {
            icon: HiGlobeAlt,
            title: "Global Standards",
            description: "Compliant with EU, US, and Asian import regulations."
        }
    ];

    return (
        <section id="quality" className="py-20 bg-bg">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Quality Assurance</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Uncompromising Standards
                        </h2>
                        <p className="text-text/80 text-lg mb-8 leading-relaxed">
                            Quality is not just a buzzword for us; it's our core promise.
                            Our state-of-the-art processing facility ensures that every batch meets international safety and hygiene standards.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {certifications.map((cert, index) => (
                                <div key={index} className={`px-4 py-2 rounded-lg font-semibold text-center ${cert.color}`}>
                                    {cert.name}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            {checks.map((check, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                                        <check.icon className="text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-primary">{check.title}</h4>
                                        <p className="text-text/70">{check.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-400">Lab Test</div>
                                <div className="h-64 bg-primary rounded-2xl shadow-lg flex items-center justify-center text-white/50">Sorting</div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 bg-secondary rounded-2xl shadow-lg flex items-center justify-center text-white/50">Inspection</div>
                                <div className="h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-400">Packaging</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Quality;
