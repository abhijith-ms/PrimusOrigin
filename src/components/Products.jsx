import React from 'react';
import { motion } from 'framer-motion';
import productWhole from '../assets/images/product-whole.png';
import productGround from '../assets/images/product-ground.png';
import productPackaging from '../assets/images/product-packaging.png';

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
        <section id="products" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Offerings</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Premium Spice Collection</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-bg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/30 group"
                        >
                            <div className="h-48 bg-white rounded-xl mb-6 flex items-center justify-center overflow-hidden relative group-hover:shadow-md transition-shadow">
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

                            <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-text/70 leading-relaxed">
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
