import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import aboutImage from '../assets/images/about-story.webp';
import founder1Image from '../assets/images/founder1.jpg';
import founder2Image from '../assets/images/founder2.jpg';

const About = () => {
    const features = [
        "Multi-category export expertise",
        "Direct sourcing from verified suppliers",
        "International quality certifications",
        "End-to-end logistics management",
        "Custom packaging & branding solutions",
        "Competitive pricing & reliable delivery"
    ];

    const stats = [
        { number: "10+", label: "Years Experience" },
        { number: "15+", label: "Countries Served" },
        { number: "3", label: "Product Categories" },
        { number: "100%", label: "Quality Guarantee" }
    ];

    return (
        <section className="py-16 md:py-24 bg-bg">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                            Bridging India to the World
                        </h2>
                        <p className="text-text/80 text-base md:text-lg mb-4 leading-relaxed">
                            PrimusOrigin is a multi-category export house specializing in premium Indian products. 
                            We connect global buyers with India's finest spices, textiles, and grains, ensuring 
                            quality, compliance, and timely delivery.
                        </p>
                        <p className="text-text/80 text-base md:text-lg mb-4 leading-relaxed">
                            Our expertise spans quality sourcing, international certifications, logistics management, 
                            and building long-term partnerships. We understand the complexities of global trade and 
                            make the export process seamless for our clients.
                        </p>
                        <p className="text-text/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                            Committed to ethical sourcing, sustainability, and customer satisfaction, we're not just 
                            exporters—we're your trusted partners in global trade.
                        </p>

                        <div className="space-y-3 mb-8">
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
                                    <span className="text-text font-medium text-sm md:text-base">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-primary/10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                                    <div className="text-xs md:text-sm text-text/60 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-3xl">🎯</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-3">Our Mission</h3>
                        <p className="text-text/80 leading-relaxed">
                            To be the most trusted bridge between India's premium products and global markets, 
                            delivering excellence through quality, transparency, and sustainable practices. We aim 
                            to empower local producers while satisfying international buyers with authentic Indian products.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-3xl">🌟</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-3">Our Vision</h3>
                        <p className="text-text/80 leading-relaxed">
                            To become a leading multi-category export house recognized globally for quality, 
                            reliability, and innovation. We envision expanding our product portfolio while maintaining 
                            the highest standards and building lasting partnerships across continents.
                        </p>
                    </div>
                </motion.div>

                {/* Founders Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Leadership</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">Meet Our Founders</h2>
                        <p className="text-text/70 text-base md:text-lg mt-4 max-w-2xl mx-auto">
                            Driven by passion and expertise, our founders bring together years of experience 
                            in international trade and business development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                        {/* Founder 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-primary/10 group"
                        >
                            {/* Image */}
                            <div className="relative mb-6">
                                <div className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <img 
                                        src={founder1Image} 
                                        alt="Abhijith M Sreelan - Co-Founder" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Details */}
                            <div className="text-center">
                                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                                    Abhijith M Sreelan
                                </h3>
                                <p className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">
                                    Co-Founder
                                </p>
                                <p className="text-text/70 text-sm md:text-base leading-relaxed">
                                    Abhijith brings extensive expertise in international trade and business development. 
                                    With a keen eye for quality and a passion for connecting Indian products to global markets, 
                                    he oversees strategic partnerships and ensures operational excellence at PrimusOrigin. 
                                    His vision is to establish PrimusOrigin as a trusted name in multi-category exports, 
                                    delivering premium products with uncompromising standards.
                                </p>
                            </div>
                        </motion.div>

                        {/* Founder 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-primary/10 group"
                        >
                            {/* Image */}
                            <div className="relative mb-6">
                                <div className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <img 
                                        src={founder2Image} 
                                        alt="Sanjay P Pramod - Co-Founder" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Details */}
                            <div className="text-center">
                                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                                    Sanjay P Pramod
                                </h3>
                                <p className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">
                                    Co-Founder
                                </p>
                                <p className="text-text/70 text-sm md:text-base leading-relaxed">
                                    Sanjay specializes in supply chain management and quality assurance with a strong 
                                    background in export operations. He ensures that every product meets international 
                                    standards and maintains PrimusOrigin's commitment to excellence. His dedication to 
                                    sustainable sourcing and customer satisfaction drives the company's growth and 
                                    reputation in global markets.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">What Drives Us</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "🤝",
                                title: "Integrity",
                                description: "Transparent dealings and honest communication in every transaction."
                            },
                            {
                                icon: "⭐",
                                title: "Excellence",
                                description: "Uncompromising quality standards in products and service delivery."
                            },
                            {
                                icon: "🌱",
                                title: "Sustainability",
                                description: "Ethical sourcing and eco-friendly practices for a better tomorrow."
                            },
                            {
                                icon: "🚀",
                                title: "Innovation",
                                description: "Continuously improving processes and exploring new opportunities."
                            },
                            {
                                icon: "💼",
                                title: "Partnership",
                                description: "Building long-term relationships based on mutual growth and trust."
                            },
                            {
                                icon: "🎯",
                                title: "Reliability",
                                description: "Consistent delivery and dependable service you can count on."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-primary/10 text-center group hover:border-accent/30"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{value.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                                <p className="text-text/70 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
