import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Users, TrendingUp, Play, Star, MapPin, Award, Target, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Accordion from '../components/ui/Accordion';
import Modal from '../components/ui/Modal';
import LeadPopup from '../components/ui/LeadPopup';
import { VideoTestimonial, VideoTestimonialModal } from '../components/ui/VideoTestimonial';
import SEO from '../components/layout/SEO';

const Home = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const videoTestimonials = [
        {
            name: "Rahul Sharma",
            role: "Chef",
            destination: "Germany",
            thumbnail: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            name: "Anita Desai",
            role: "Waitress",
            destination: "France",
            thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            name: "Ahmed Al-Fayed",
            role: "Kitchen Helper",
            destination: "Romania",
            thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
    ];

    const services = [
        {
            icon: Target,
            title: "Career Counseling",
            description: "Expert guidance to identify the perfect European opportunity for your skills and aspirations.",
            features: ["Profile Assessment", "Market Analysis", "Career Roadmap"]
        },
        {
            icon: Briefcase,
            title: "Job Placement",
            description: "Direct connections with premium hotels and restaurants across Europe's top destinations.",
            features: ["Employer Matching", "Interview Prep", "Offer Negotiation"]
        },
        {
            icon: Award,
            title: "Visa Support",
            description: "Complete documentation and application assistance for a seamless visa approval process.",
            features: ["Document Prep", "Application Filing", "Interview Coaching"]
        }
    ];

    const journeySteps = [
        { year: "2018", title: "Inception", desc: "Started as a boutique consultancy in Mumbai with a vision to connect talent with opportunity." },
        { year: "2020", title: "Expansion", desc: "Partnered with 50+ premium hotels across Germany and France." },
        { year: "2023", title: "Milestone", desc: "Crossed 500+ successful placements, establishing trust across continents." },
        { year: "2025", title: "Going Global", desc: "Launched digital platform and expanded to 15 European countries." }
    ];

    return (
        <div className="w-full">
            <SEO
                title="Home"
                description="Your gateway to premium tourism and hospitality opportunities in Europe."
            />
            <LeadPopup />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cream/40 dark:bg-cream/5 hidden lg:block rounded-l-[100px] transform translate-x-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-cream/60 dark:bg-cream/10 text-orange dark:text-orange font-semibold text-sm uppercase tracking-widest mb-6">
                            Premier European Consultancy
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-balance text-slate-900 dark:text-white">
                            Elevate Your Career in <span className="text-orange dark:text-orange relative inline-block">
                                Europe
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-lg leading-relaxed">
                            We specialize in placing hospitality professionals in top-tier roles across Germany, Poland, France, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-4 brand-gradient text-white text-lg font-semibold rounded-full transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center">
                                Start Assessment
                            </Link>
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="px-8 py-4 bg-cream/60 dark:bg-slate-800/50 backdrop-blur border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-lg font-semibold rounded-full transition-all hover:bg-cream hover:shadow-lg flex items-center justify-center gap-2 group"
                            >
                                <Play className="w-5 h-5 fill-current text-orange group-hover:scale-110 transition-transform" />
                                Watch Success Stories
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-slate-900/5 dark:to-white/5 rounded-[50px] rotate-3 transform"></div>
                        <img
                            src="/src/assets/hero.jpg"
                            alt="European Scenery"
                            className="w-full h-full object-cover rounded-[50px] shadow-2xl relative z-10"
                        />
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-slate-900 dark:text-white">98% Success Rate</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">Visa Approvals</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-cream/40 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Users, label: "Happy Clients", value: "500+" },
                            { icon: Globe, label: "Countries", value: "15+" },
                            { icon: TrendingUp, label: "Success Rate", value: "98%" },
                            { icon: CheckCircle, label: "Opportunities", value: "1k+" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="mb-4 p-4 rounded-full bg-white dark:bg-slate-800 group-hover:bg-cream/60 dark:group-hover:bg-orange/10 transition-colors shadow-sm">
                                    <stat.icon className="w-8 h-8 text-slate-900 dark:text-slate-200 group-hover:text-orange transition-colors" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                                <p className="text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Expertise Section */}
            <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange font-semibold tracking-widest uppercase text-sm">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">Comprehensive Career Solutions</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">End-to-end support designed to make your European career transition seamless and successful.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-3xl bg-cream/30 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 hover:border-orange/30 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7 text-orange" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 brand-gradient text-white font-semibold rounded-full hover:shadow-xl transition-all group">
                            View All Services
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Testimonials Section */}
            <section className="py-32 bg-cream/40 dark:bg-slate-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange font-semibold tracking-widest uppercase text-sm">Success Stories</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">Voices of Success</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">Watch real stories from professionals who have successfully built their careers in Europe with our guidance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videoTestimonials.map((testimonial, index) => (
                            <VideoTestimonial
                                key={index}
                                {...testimonial}
                                onPlay={() => setActiveVideo(testimonial)}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/testimonials" className="inline-flex items-center gap-2 px-8 py-4 brand-gradient text-white font-semibold rounded-full hover:shadow-xl transition-all group">
                            View All Stories
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Journey Section */}
            <section className="py-32 bg-white dark:bg-slate-950">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-orange font-semibold tracking-widest uppercase text-sm">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4">The Journey</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange/30 via-orange/50 to-orange/30"></div>

                        <div className="space-y-16">
                            {journeySteps.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Year */}
                                    <div className={`${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16'} hidden md:block`}>
                                        <span className="text-6xl font-bold text-slate-200 dark:text-slate-800">{item.year}</span>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-orange ring-4 ring-white dark:ring-slate-950 md:-ml-2 z-10"></div>

                                    {/* Content */}
                                    <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                                        <span className="md:hidden text-4xl font-bold text-slate-200 dark:text-slate-800 block mb-4">{item.year}</span>
                                        <div className="bg-cream/30 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 hover:border-orange/30 transition-all">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <VideoTestimonialModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoUrl={activeVideo?.videoUrl || ''}
                name={activeVideo?.name || ''}
            />

            <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
                <div className="flex items-center justify-center h-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="Success Story"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-2xl"
                    ></iframe>
                </div>
            </Modal>
        </div>
    );
};

export default Home;
