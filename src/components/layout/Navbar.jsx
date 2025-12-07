import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Newsroom', path: '/newsroom' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-accent-light dark:bg-accent-dark rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                            E
                        </div>
                        <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-text-light dark:text-text-dark' : 'text-text-light dark:text-text-dark'}`}>
                            Europe<span className="text-accent-light dark:text-accent-dark">Calling</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium hover:text-accent-light dark:hover:text-accent-dark transition-colors relative group ${location.pathname === link.path
                                        ? 'text-accent-light dark:text-accent-dark'
                                        : 'text-text-light/80 dark:text-text-dark/80'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <Link
                            to="/contact"
                            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-dark dark:bg-surface-light text-white dark:text-primary-dark font-medium text-sm hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Contact Us</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-black/5 dark:border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block text-lg font-serif font-medium ${location.pathname === link.path
                                            ? 'text-accent-light dark:text-accent-dark'
                                            : 'text-text-light dark:text-text-dark'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="block text-center w-full py-3 mt-4 rounded-xl bg-primary-dark dark:bg-surface-light text-white dark:text-primary-dark font-bold"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
