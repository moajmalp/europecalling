import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-black/5 dark:border-white/5 pt-20 pb-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-accent-light dark:bg-accent-dark rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
                                E
                            </div>
                            <span className="font-serif font-bold text-xl tracking-tight text-text-light dark:text-text-dark">
                                Europe<span className="text-accent-light dark:text-accent-dark">Calling</span>
                            </span>
                        </Link>
                        <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed text-balance">
                            Premium consultancy for ambitious professionals seeking careers in Europe’s top hospitality & tourism markets.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-text-light dark:text-text-dark hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-text-light dark:text-text-dark">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Destinations', 'Newsroom'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-sm">
                                        {item === 'Home' ? 'Home' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-text-light dark:text-text-dark">Destinations</h4>
                        <ul className="space-y-4">
                            {['Germany', 'Poland', 'France', 'Czech Republic', 'Romania'].map((country) => (
                                <li key={country}>
                                    <Link to={`/destinations/${country.toLowerCase()}`} className="text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-sm">
                                        Jobs in {country}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-text-light dark:text-text-dark">Contact</h4>
                        <ul className="space-y-4 text-sm text-text-light/70 dark:text-text-dark/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent-light dark:text-accent-dark shrink-0" />
                                <span>123 Business Avenue, <br />Tech Park, Mumbai, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent-light dark:text-accent-dark shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent-light dark:text-accent-dark shrink-0" />
                                <span>hello@europecalling.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-text-light/50 dark:text-text-dark/50">
                        © {new Date().getFullYear()} Europe Calling. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-text-light/50 dark:text-text-dark/50">
                        <Link to="#" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
