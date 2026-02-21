import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTshirt, FaSeedling } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

const categories = [
    {
        id: 1,
        title: "Spices & Condiments",
        icon: FaLeaf,
        tag: "Currently Available",
        tagColor: "bg-green-100 text-green-800",
        description: "Premium grade spices sourced from Kerala's finest plantations with high purity and potency.",
        products: [
            "Black Pepper (Whole & Ground)",
            "Cardamom",
            "Turmeric",
            "Red Chili",
            "Coriander"
        ],
        features: [
            "Export grade quality",
            "Lab tested purity",
            "Moisture controlled",
            "Custom packaging"
        ]
    },
    {
        id: 2,
        title: "Textiles & Garments",
        icon: FaTshirt,
        tag: "Coming Soon",
        tagColor: "bg-blue-100 text-blue-800",
        description: "High-quality textiles and garments from India's renowned textile hubs with superior craftsmanship.",
        products: [
            "Cotton Fabrics",
            "Traditional Wear",
            "Home Textiles",
            "Sustainable Fabrics",
            "Custom Designs"
        ],
        features: [
            "Premium materials",
            "Ethical sourcing",
            "Custom branding",
            "Bulk orders"
        ]
    },
    {
        id: 3,
        title: "Grains & Cereals",
        icon: FaSeedling,
        tag: "Coming Soon",
        tagColor: "bg-amber-100 text-amber-800",
        description: "Premium rice varieties and grains from India's agricultural heartland with authentic quality.",
        products: [
            "Basmati Rice",
            "Non-Basmati Rice",
            "Organic Rice Varieties",
            "Specialty Grains",
            "Custom Blends"
        ],
        features: [
            "Premium varieties",
            "Quality grading",
            "Proper storage",
            "Global shipping"
        ]
    }
];

const Products = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
                        Our Export Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                        Premium Products from India
                    </h2>
                    <p className="text-text/70 text-base md:text-lg max-w-2xl mx-auto">
                        Discover our diverse range of export-quality products, carefully sourced and processed 
                        to meet international standards.
                    </p>
                </div>

                {/* Product Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-bg rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/30 group"
                        >
                            {/* Icon & Tag */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                                    <category.icon className="text-4xl text-primary" />
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${category.tagColor}`}>
                                    {category.tag}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-text/70 text-sm md:text-base leading-relaxed mb-6">
                                {category.description}
                            </p>

                            {/* Products List */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                                    Products Include:
                                </h4>
                                <ul className="space-y-2">
                                    {category.products.map((product, idx) => (
                                        <li key={idx} className="text-sm text-text/70 flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            {product}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Features */}
                            <div className="pt-6 border-t border-primary/10">
                                <div className="grid grid-cols-2 gap-2">
                                    {category.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-text/60">
                                            <HiCheckCircle className="text-accent mr-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10"
                >
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4 text-center">
                        Additional Services
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="text-center">
                            <div className="text-3xl mb-2">📦</div>
                            <h4 className="font-semibold text-primary text-sm mb-1">Custom Packaging</h4>
                            <p className="text-xs text-text/60">Tailored to your brand</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🏷️</div>
                            <h4 className="font-semibold text-primary text-sm mb-1">Private Labeling</h4>
                            <p className="text-xs text-text/60">Your brand, our quality</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">📊</div>
                            <h4 className="font-semibold text-primary text-sm mb-1">Bulk & Retail</h4>
                            <p className="text-xs text-text/60">Flexible quantities</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🧪</div>
                            <h4 className="font-semibold text-primary text-sm mb-1">Sample Orders</h4>
                            <p className="text-xs text-text/60">Test before you buy</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
