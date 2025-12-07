import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { countries } from '../data/countries';
import SEO from '../components/layout/SEO';

const Destinations = () => {
    return (
        <div className="w-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
            <SEO title="Destinations" description="Explore premium work opportunities across Europe's top economies." />

            <section className="bg-primary-dark text-white py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-light opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl font-serif font-bold mb-6">Explore Destinations</h1>
                    <p className="text-xl text-white/70">From the historic streets of Paris to the vibrant markets of Berlin, find your place in Europe.</p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Object.entries(countries).map(([key, country]) => (
                        <Link to={`/destinations/${key}`} key={key} className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center space-x-2 text-accent-light text-sm font-bold uppercase tracking-widest mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>Europe</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{country.name}</h3>
                                    <p className="text-white/70 line-clamp-2 mb-6 font-light">{country.desc}</p>
                                    <span className="inline-flex items-center text-white font-bold uppercase tracking-wide group-hover:text-accent-light transition-colors">
                                        View Program <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Destinations;
