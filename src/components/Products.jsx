import React from 'react';
import { motion } from 'framer-motion';
import productWhole from '../assets/images/product-whole.webp';
import productGround from '../assets/images/product-ground.webp';
import productPackaging from '../assets/images/product-packaging.webp';

const products = [
    {
        id: 1,
        title: "Whole Black Pepper",
        description: "Premium grade, sun-dried black pepper corns with high piperine content.",
        tag: "Export Grade",
        image: productWhole
    },
    {
        id: 2,
        title: "Ground Black Pepper",
        description: "Finely ground pepper powder, retaining the full spectrum of flavor and heat.",
        tag: "Single-Origin",
        image: productGround
    },
    {
        id: 3,
        title: "Custom Packaging",
        description: "Tailored packaging solutions for bulk export and retail requirements.",
        tag: "B2B Solutions",
        image: productPackaging
    }
];

const Products = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Offerings</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">Premium Spice Collection</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-bg rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/30 group"
                        >
                            <div className="h-40 md:h-48 bg-white rounded-xl mb-4 md:mb-6 flex items-center justify-center overflow-hidden relative group-hover:shadow-md transition-shadow">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10"></div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {product.tag}
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-2 md:mb-3 group-hover:text-secondary transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-text/70 text-sm md:text-base leading-relaxed">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
