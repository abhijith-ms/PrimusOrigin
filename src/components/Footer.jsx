import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white/80 py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-serif font-bold text-white mb-2">PrimusOrigin</h2>
                        <p className="text-sm">Premium Spices, Export Quality.</p>
                    </div>

                    <div className="flex space-x-8 mb-6 md:mb-0">
                        <a href="#about" className="hover:text-accent transition-colors">About</a>
                        <a href="#products" className="hover:text-accent transition-colors">Products</a>
                        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                    </div>

                    <div className="text-center md:text-right text-sm">
                        <p>&copy; {currentYear} PrimusOrigin. All rights reserved.</p>
                        <p className="text-white/40 mt-1">Based in Kerala, India</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
