import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Users, TrendingUp, Play, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Accordion from '../components/ui/Accordion';
import Modal from '../components/ui/Modal';
import LeadPopup from '../components/ui/LeadPopup';
import SEO from '../components/layout/SEO';

const Home = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        { name: "Rahul Sharma", role: "Chef", dest: "Germany", text: "Europe Calling made my dream come true. The process was transparent (no hidden costs) and the team was always available." },
        { name: "Anita Desai", role: "Waitress", dest: "France", text: "I was worried about the visa interview, but their mock sessions were a lifesaver. Now working in Paris!" },
        { name: "Ahmed Al-Fayed", role: "Kitchen Helper", dest: "Romania", text: "From Dubai to Bucharest, the transition was smooth thanks to Europe Calling." },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const services = [
        { title: "Basic Package", price: "Guidance", features: ["Career Counseling", "CV Optimization", "Basic Visa Guidance"], link: "/services" },
        { title: "Premium Package", price: "Placement", features: ["Job Placement Support", "Visa Documentation", "Pre-departure Briefing"], popular: true, link: "/services" }
    ];

    return (
        <div className="w-full">
            <SEO
                title="Home"
                description="Your gateway to premium tourism and hospitality opportunities in Europe."
            />
            <LeadPopup />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-light/5 dark:bg-accent-dark/5 hidden lg:block rounded-l-[100px] transform translate-x-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark font-bold text-sm uppercase tracking-widest mb-6">
                            Premier European Consultancy
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8 text-balance">
                            Elevate Your Career in <span className="text-accent-light dark:text-accent-dark relative inline-block">
                                Europe
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-light dark:text-accent-dark opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                            </span>
                        </h1>
                        <p className="text-lg text-text-light/70 dark:text-text-dark/70 mb-10 max-w-lg leading-relaxed">
                            We specialize in placing hospitality professionals in top-tier roles across Germany, Poland, France, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-primary-dark dark:bg-white text-white dark:text-primary-dark text-lg font-bold rounded-full transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center">
                                Start Assessment
                            </Link>
                            <Link to="/destinations" className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur border border-slate-200 dark:border-slate-700 text-text-light dark:text-text-dark text-lg font-bold rounded-full transition-all hover:bg-white hover:shadow-lg flex items-center justify-center gap-2 group">
                                <Play className="w-5 h-5 fill-current text-accent-light dark:text-accent-dark group-hover:scale-110 transition-transform" />
                                Watch Success Stories
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-light/20 to-primary-dark/5 rounded-[50px] rotate-3 transform"></div>
                        <img
                            src="src/assets/hero.jpg"
                            alt="European Scenery"
                            className="w-full h-full object-cover rounded-[50px] shadow-2xl relative z-10"
                        />
                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-text-light dark:text-text-dark">98% Success Rate</p>
                                    <p className="text-xs text-text-light/60 dark:text-text-dark/60">Visa Approvals</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Users, label: "Happy Clients", value: "500+" },
                            { icon: Globe, label: "Countries", value: "15+" },
                            { icon: TrendingUp, label: "Success Rate", value: "98%" },
                            { icon: CheckCircle, label: "Opportunities", value: "1k+" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="mb-4 p-4 rounded-full bg-slate-50 dark:bg-slate-800 group-hover:bg-accent-light/10 dark:group-hover:bg-accent-dark/10 transition-colors">
                                    <stat.icon className="w-8 h-8 text-primary-dark dark:text-slate-200 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-text-light dark:text-text-dark mb-1">{stat.value}</h3>
                                <p className="text-sm font-medium uppercase tracking-wider text-text-light/50 dark:text-text-dark/50">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden" id="services">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-accent-light dark:text-accent-dark font-bold tracking-widest uppercase text-sm">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-light dark:text-text-dark mt-4">Tailored Packages for Global Careers</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className={`relative p-10 rounded-3xl transition-all duration-300 group ${service.popular ? 'bg-primary-dark text-white shadow-2xl scale-105' : 'bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800'}`}>
                                {service.popular && <div className="absolute top-6 right-6 bg-accent-light text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>}
                                <h3 className={`text-2xl font-serif font-bold mb-2 ${service.popular ? 'text-white' : 'text-text-light dark:text-text-dark'}`}>{service.title}</h3>
                                <p className={`text-sm tracking-widest uppercase mb-8 ${service.popular ? 'text-white/60' : 'text-text-light/50 dark:text-text-dark/50'}`}>{service.price}</p>
                                <ul className="space-y-4 mb-10">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className={`w-5 h-5 ${service.popular ? 'text-accent-light' : 'text-accent-light dark:text-accent-dark'}`} />
                                            <span className={service.popular ? 'text-white/90' : 'text-text-light/80 dark:text-text-dark/80'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to={service.link} className={`block w-full py-4 rounded-xl text-center font-bold tracking-wide transition-all ${service.popular ? 'bg-accent-light hover:bg-accent-dark text-white' : 'bg-slate-100 dark:bg-slate-800 text-text-light dark:text-text-dark hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                                    Get Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel */}
            <section className="py-32 bg-surface-light dark:bg-surface-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-accent-light dark:text-accent-dark font-bold tracking-widest uppercase text-sm">Success Stories</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-light dark:text-text-dark mt-4 mb-8">Voices of Success</h2>
                            <p className="text-lg text-text-light/70 dark:text-text-dark/70 mb-10">
                                Join hundreds of professionals who have successfully built their careers in Europe with our guidance.
                            </p>
                            <div className="flex gap-4">
                                <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="p-3 rounded-full border border-slate-300 dark:border-slate-700 text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <ArrowRight className="w-6 h-6 rotate-180" />
                                </button>
                                <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="p-3 rounded-full bg-primary-dark dark:bg-white text-white dark:text-primary-dark hover:opacity-90 transition-opacity">
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative h-[400px] w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTestimonial}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center"
                                >
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current text-accent-light" />)}
                                    </div>
                                    <p className="text-xl md:text-2xl font-serif italic text-text-light dark:text-text-dark mb-8 leading-relaxed">"{testimonials[activeTestimonial].text}"</p>
                                    <div>
                                        <h4 className="font-bold text-lg text-text-light dark:text-text-dark">{testimonials[activeTestimonial].name}</h4>
                                        <p className="text-sm text-text-light/60 dark:text-text-dark/60">{testimonials[activeTestimonial].role} in <span className="text-accent-light">{testimonials[activeTestimonial].dest}</span></p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
