import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiCheckCircle, HiGlobeAlt, HiHeart } from 'react-icons/hi';

const Quality = () => {
    const certifications = [
        { name: "ISO 22000", subtitle: "Food Safety", color: "bg-blue-100 text-blue-800" },
        { name: "FSSAI", subtitle: "India", color: "bg-green-100 text-green-800" },
        { name: "APEDA", subtitle: "Export", color: "bg-purple-100 text-purple-800" },
        { name: "Organic", subtitle: "Certified", color: "bg-emerald-100 text-emerald-800" },
        { name: "HACCP", subtitle: "Safety", color: "bg-orange-100 text-orange-800" },
        { name: "GMP", subtitle: "Manufacturing", color: "bg-pink-100 text-pink-800" }
    ];

    const qualityPillars = [
        {
            icon: HiShieldCheck,
            title: "Purity Guaranteed",
            points: [
                "Zero adulteration policy",
                "Lab-tested products",
                "Complete traceability"
            ]
        },
        {
            icon: HiGlobeAlt,
            title: "Compliance Ready",
            points: [
                "EU, US, Middle East standards",
                "Complete documentation",
                "Regulatory expertise"
            ]
        },
        {
            icon: HiHeart,
            title: "Sustainable Practices",
            points: [
                "Ethical sourcing",
                "Eco-friendly packaging",
                "Fair trade principles"
            ]
        },
        {
            icon: HiCheckCircle,
            title: "Customer Satisfaction",
            points: [
                "Quality guarantee",
                "Responsive support",
                "Flexible solutions"
            ]
        }
    ];

    const whyChoose = [
        "Competitive pricing without compromising quality",
        "Reliable delivery schedules and tracking",
        "Dedicated account managers for personalized service",
        "Sample testing available before bulk orders",
        "Flexible payment terms for long-term partners",
        "Commitment to building lasting partnerships"
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
                        Quality Assurance
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                        Quality You Can Trust
                    </h2>
                    <p className="text-text/70 text-base md:text-lg max-w-2xl mx-auto">
                        International standards meet Indian excellence in every product we export.
                    </p>
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-6 text-center">
                        Our Certifications
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${cert.color} rounded-xl p-4 text-center hover:shadow-lg transition-shadow`}
                            >
                                <div className="font-bold text-base md:text-lg mb-1">{cert.name}</div>
                                <div className="text-xs opacity-75">{cert.subtitle}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Quality Pillars */}
                <div className="mb-12 md:mb-16">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-8 text-center">
                        Our Quality Pillars
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {qualityPillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-bg rounded-2xl p-6 hover:shadow-xl transition-shadow"
                            >
                                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                    <pillar.icon className="text-3xl text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-3">{pillar.title}</h4>
                                <ul className="space-y-2">
                                    {pillar.points.map((point, idx) => (
                                        <li key={idx} className="text-sm text-text/70 flex items-start">
                                            <span className="text-accent mr-2 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 rounded-2xl p-6 md:p-10 border border-primary/10"
                >
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 text-center">
                        Why Choose PrimusOrigin?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {whyChoose.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <HiCheckCircle className="text-accent text-xl flex-shrink-0 mt-0.5" />
                                <span className="text-text/80 text-sm md:text-base">{reason}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Quality;
