import { ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';

const Services = () => {
    return (
        <div className="w-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
            <SEO title="Services" description="Choose the perfect package for your career journey to Europe." />

            {/* Header */}
            <section className="bg-primary-dark text-white py-24 text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl font-serif font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-white/70">Comprehensive packages designed to ensure your seamless transition to a European career.</p>
                </div>
            </section>

            {/* Packages */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Basic */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
                        <div className="mb-8">
                            <span className="uppercase tracking-widest text-sm font-bold text-text-light/50 dark:text-text-dark/50">Starter</span>
                            <h2 className="text-4xl font-serif font-bold mt-2">Basic Package</h2>
                            <p className="mt-4 text-text-light/70 dark:text-text-dark/70 leading-relaxed">Perfect for candidates who need guidance but want to handle job hunting independently.</p>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {["Career Counseling Session", "Professional CV & Cover Letter", "LinkedIn Profile Optimization", "Basic Visa Guidance Manual"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-text-light dark:text-text-dark" />
                                    </div>
                                    <span className="opacity-80">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center">
                            Enquire Basic
                        </Link>
                    </div>

                    {/* Premium */}
                    <div className="bg-primary-dark text-white rounded-3xl p-10 shadow-2xl hover:shadow-primary-dark/50 transition-all duration-300 flex flex-col relative overflow-hidden ring-4 ring-accent-light/30">
                        <div className="absolute top-0 right-0 p-4">
                            <Star className="text-accent-light w-8 h-8 fill-current animate-pulse" />
                        </div>
                        <div className="mb-8 relative z-10">
                            <span className="uppercase tracking-widest text-sm font-bold text-accent-light">Most Popular</span>
                            <h2 className="text-4xl font-serif font-bold mt-2 text-white">Customized Package</h2>
                            <p className="mt-4 text-white/70 leading-relaxed">End-to-end support from application to landing in your dream destination.</p>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow relative z-10">
                            {["Everything in Basic", "Personalized Job Search & Placement", "Unlimited Interview Prep & Mocks", "Complete Visa Documentation & Filing", "Pre-departure flight & accommodation assistance"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-white/90">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="w-full py-4 rounded-xl bg-accent-light hover:bg-accent-dark text-white font-bold transition-colors text-center shadow-lg relative z-10">
                            Get Premium Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-16">Simple 4-Step Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consult", desc: "Free profile assessment." },
                            { step: "02", title: "Apply", desc: "We enhance your profile." },
                            { step: "03", title: "Interview", desc: "Ace the employer rounds." },
                            { step: "04", title: "Fly", desc: "Get visa and board the flight." }
                        ].map((s, i) => (
                            <div key={i} className="relative p-6 group">
                                <span className="text-6xl font-black text-slate-200 dark:text-slate-800 absolute top-0 left-1/2 -translate-x-1/2 -z-10 group-hover:text-accent-light/20 transition-colors duration-500">{s.step}</span>
                                <h3 className="text-xl font-bold mt-8 mb-2">{s.title}</h3>
                                <p className="text-sm opacity-70">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
