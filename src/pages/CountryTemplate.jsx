import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, FileText, ArrowLeft } from 'lucide-react';
import { countries } from '../data/countries';
import SEO from '../components/layout/SEO';

const CountryTemplate = () => {
    const { id } = useParams();
    const country = countries[id] || countries['germany']; // Fallback generic

    return (
        <div className="w-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
            <SEO title={`Jobs in ${country.name}`} description={`Start your career in ${country.name} with our specialized placement program.`} />

            {/* Split Screen Hero */}
            <div className="relative min-h-screen flex flex-col lg:flex-row">
                {/* Visual Side (Left on Desktop) */}
                <div className="lg:w-1/2 h-[50vh] lg:h-auto relative lg:fixed lg:top-0 lg:left-0">
                    <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8 lg:px-20 text-white">
                        <Link to="/destinations" className="absolute top-24 left-8 lg:left-20 flex items-center text-white/80 hover:text-white transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Destinations
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{country.name}</h1>
                        <p className="text-xl md:text-2xl font-light opacity-90 max-w-xl">{country.why}</p>
                    </div>
                </div>

                {/* Content Side (Right on Desktop) */}
                <div className="lg:w-1/2 lg:ml-auto bg-surface-light dark:bg-surface-dark min-h-screen relative z-10 px-6 py-12 lg:p-24">
                    <div className="max-w-xl mx-auto space-y-20">
                        {/* Process Highlights */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <Clock className="w-8 h-8 text-accent-light mb-4" />
                                <h3 className="font-bold text-lg">Timeline</h3>
                                <p className="text-sm opacity-70">3-5 Months</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <DollarSign className="w-8 h-8 text-accent-light mb-4" />
                                <h3 className="font-bold text-lg">Salary</h3>
                                <p className="text-sm opacity-70">€1200 - €2500</p>
                            </div>
                        </div>

                        {/* Eligibility */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                                <div className="w-2 h-8 bg-accent-light rounded-full"></div>
                                Eligibility
                            </h2>
                            <ul className="space-y-4">
                                {country.eligibility?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-accent-light shrink-0" />
                                        <span className="text-lg opacity-80">{item}</span>
                                    </li>
                                )) || <p>Eligibility criteria loading...</p>}
                            </ul>
                        </div>

                        {/* Process */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                                <div className="w-2 h-8 bg-accent-light rounded-full"></div>
                                Application Process
                            </h2>
                            <div className="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                                {country.process?.map((step, i) => (
                                    <div key={i} className="relative pl-8">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-950"></span>
                                        <h3 className="font-bold text-xl mb-2">Step {i + 1}</h3>
                                        <p className="opacity-70">{step}</p>
                                    </div>
                                )) || <p>Process details loading...</p>}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary-dark rounded-3xl p-10 text-white text-center shadow-xl">
                            <h3 className="text-2xl font-serif font-bold mb-4">Ready to start?</h3>
                            <p className="mb-8 text-white/70">Begin your application for {country.name} today.</p>
                            <Link to="/contact" className="inline-block w-full py-4 bg-accent-light hover:bg-accent-dark text-white font-bold rounded-xl transition-colors">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryTemplate;
