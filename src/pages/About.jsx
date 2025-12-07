import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';
import SEO from '../components/layout/SEO';

const About = () => {
    return (
        <div className="w-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
            <SEO title="About Us" description="Our journey from a small consultancy to a leading European recruitment partner." />

            {/* Hero */}
            <section className="relative py-28 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/5 dark:bg-accent-light/5 -skew-y-3 transform origin-top-left scale-110"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-balance opacity-80"
                    >
                        Driven by a passion for connecting talent with opportunity, we have built a bridge between ambitious professionals and Europe’s finest establishments.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-shadow group">
                        <div className="w-14 h-14 bg-accent-light/20 rounded-2xl flex items-center justify-center mb-6 text-accent-light group-hover:scale-110 transition-transform">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
                        <p className="text-lg opacity-70 leading-relaxed">
                            To empower skilled professionals by providing transparent, reliable, and premium pathway services to careers in Europe, ensuring every candidate finds their rightful place on the global stage.
                        </p>
                    </div>
                    <div className="p-10 rounded-3xl bg-primary-dark text-white shadow-xl hover:shadow-2xl transition-shadow group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-light opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4 relative z-10">Our Vision</h2>
                        <p className="text-lg opacity-80 leading-relaxed relative z-10">
                            To be the most trusted and sought-after consultancy for international hospitality recruitment, setting the gold standard for ethics, excellence, and success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold">The Journey</h2>
                    </div>
                    <div className="relative border-l-2 border-accent-light/30 dark:border-accent-dark/30 ml-4 md:ml-0 md:pl-0 space-y-12">
                        {[
                            { year: "2018", title: "Inception", desc: "Started as a small boutique agency in Mumbai." },
                            { year: "2020", title: "Expansion", desc: "Partnered with 50+ hotels in Germany and France." },
                            { year: "2023", title: "Milestone", desc: "Crossed 500+ successful placements." },
                            { year: "2025", title: "Going Global", desc: "Launched premium digital platform and expanded to 15 countries." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative md:grid md:grid-cols-2 gap-8 items-center"
                            >
                                <div className="md:text-right hidden md:block">
                                    <span className="text-5xl font-bold text-slate-200 dark:text-slate-800">{item.year}</span>
                                </div>
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent-light ring-4 ring-white dark:ring-slate-950 md:left-1/2 md:-ml-2"></div>
                                <div className="pl-8 md:pl-0">
                                    <span className="md:hidden text-4xl font-bold text-slate-200 dark:text-slate-800 block mb-2">{item.year}</span>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="opacity-70">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-accent-light font-bold uppercase tracking-widest text-sm">Our People</span>
                        <h2 className="text-4xl font-serif font-bold mt-2">Meet the Experts</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                                <img src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1573496359142-b8d87734a5a2' : i === 3 ? '1580489944761-15a19d654956' : '1519085360753-af0119f7cbe7'}?q=80&w=1000&auto=format&fit=crop`} alt="Team Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white font-bold text-lg">Name Placeholder</h3>
                                    <p className="text-accent-light text-sm">Position Title</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
