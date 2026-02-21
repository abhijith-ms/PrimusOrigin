import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Process', path: '/process' },
        { name: 'Quality', path: '/quality' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHomePage = location.pathname === '/';

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled || !isHomePage 
                    ? 'bg-white shadow-lg py-3' 
                    : 'bg-primary/95 backdrop-blur-sm py-4'
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 transition-transform hover:scale-105 duration-300"
                >
                    <img 
                        src="/logo.png" 
                        alt="PrimusOrigin Logo" 
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                        <span className={`text-lg md:text-xl font-serif font-bold tracking-wide transition-colors ${
                            scrolled || !isHomePage ? 'text-primary' : 'text-white'
                        }`}>
                            PrimusOrigin
                        </span>
                        <span className={`text-[10px] md:text-xs font-light tracking-wider transition-colors ${
                            scrolled || !isHomePage ? 'text-secondary' : 'text-accent'
                        }`}>
                            Premium Spices, Export Quality
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                location.pathname === link.path
                                    ? scrolled || !isHomePage
                                        ? 'bg-primary text-white'
                                        : 'bg-accent text-primary'
                                    : scrolled || !isHomePage
                                    ? 'text-text hover:bg-bg hover:text-primary'
                                    : 'text-white/90 hover:bg-white/10 hover:text-accent'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`lg:hidden text-3xl transition-colors p-2 rounded-lg ${
                        scrolled || !isHomePage 
                            ? 'text-primary hover:bg-bg' 
                            : 'text-white hover:bg-white/10'
                    }`}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-4 py-3 text-base font-medium rounded-lg transition-all ${
                                        location.pathname === link.path
                                            ? 'bg-primary text-white'
                                            : 'text-text hover:bg-bg hover:text-primary'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
