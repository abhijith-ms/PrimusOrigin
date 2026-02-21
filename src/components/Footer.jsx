import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Process', path: '/process' },
        { name: 'Quality', path: '/quality' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-primary text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-4 group">
                            <img 
                                src="/logo.png" 
                                alt="PrimusOrigin Logo" 
                                className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif font-bold text-white">
                                    PrimusOrigin
                                </span>
                                <span className="text-xs text-accent tracking-wider">
                                    Premium Spices, Export Quality
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">
                            Your trusted partner for premium Indian exports. Specializing in spices, textiles, 
                            and grains with uncompromising quality and global reach.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a 
                                href="mailto:primusoriginbusiness@gmail.com" 
                                className="flex items-center gap-3 text-sm text-white/80 hover:text-accent transition-colors group"
                            >
                                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <HiMail className="text-lg" />
                                </div>
                                <span>primusoriginbusiness@gmail.com</span>
                            </a>
                            <a 
                                href="tel:+918762154637" 
                                className="flex items-center gap-3 text-sm text-white/80 hover:text-accent transition-colors group"
                            >
                                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <HiPhone className="text-lg" />
                                </div>
                                <span>+91 87621 54637</span>
                            </a>
                            <div className="flex items-center gap-3 text-sm text-white/80">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <HiLocationMarker className="text-lg" />
                                </div>
                                <span>Kerala, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path}
                                        className="text-sm text-white/80 hover:text-accent hover:translate-x-1 transition-all inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-4">Our Products</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li className="flex items-center gap-2">
                                <span className="text-accent">✓</span> Spices & Condiments
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-400">⏳</span> Textiles & Garments
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-400">⏳</span> Grains & Cereals
                            </li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-accent mb-2">Certifications</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">ISO 22000</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">FSSAI</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">APEDA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                        <p>
                            &copy; {currentYear} PrimusOrigin. All rights reserved.
                        </p>
                        <p className="flex items-center gap-2">
                            Made with <span className="text-accent">♥</span> in Kerala, India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
