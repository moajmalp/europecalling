import { useState } from 'react';
import { Play, Star, MapPin, Quote } from 'lucide-react';
import Modal from '../components/ui/Modal';
import SEO from '../components/layout/SEO';

const Testimonials = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const filters = ["All", "India", "Azerbaijan", "Other Countries"];

    const testimonials = [
        { name: "Rahul Sharma", country: "India", dest: "Germany", role: "Chef", text: "Europe Calling made my dream come true. The process was transparent (no hidden costs) and the team was always available.", type: "video", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop" },
        { name: "Anita Desai", country: "India", dest: "France", role: "Waitress", text: "I was worried about the visa interview, but their mock sessions were a lifesaver. Now I'm working in Paris!", type: "text" },
        { name: "Elvin Mammadov", country: "Azerbaijan", dest: "Poland", role: "Hotel Manager", text: "Professional service. They matched me with a top hotel in Warsaw. Highly recommended for Azerbaijanis.", type: "text" },
        { name: "Priya Patel", country: "India", dest: "Czech Republic", role: "Housekeeping", text: "Got my visa in just 3 months. The team handled all the paperwork perfectly.", type: "text" },
        { name: "Ahmed Al-Fayed", country: "Other Countries", dest: "Romania", role: "Kitchen Helper", text: "From Dubai to Bucharest, the transition was smooth thanks to Europe Calling.", type: "video", image: "https://images.unsplash.com/photo-1544168190-79c11e66b380?q=80&w=1888&auto=format&fit=crop" },
        { name: "Leyla Aliyeva", country: "Azerbaijan", dest: "Germany", role: "Receptionist", text: "Reliable agency. They don't just promise, they deliver.", type: "text" },
    ];

    const filteredTestimonials = activeFilter === 'All'
        ? testimonials
        : testimonials.filter(t => t.country === activeFilter || (activeFilter === "Other Countries" && t.country !== "India" && t.country !== "Azerbaijan"));

    return (
        <div className="w-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen">
            <SEO title="Testimonials" description="See what our successful candidates have to say about us." />

            <section className="py-24 px-4 text-center">
                <span className="text-accent-light font-bold tracking-widest uppercase text-sm mb-4 block">Wall of Love</span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Success Stories</h1>
                <p className="text-xl opacity-70 max-w-2xl mx-auto">Hear from the hundreds of professionals we've placed across Europe.</p>
            </section>

            <section className="sticky top-20 z-30 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur border-y border-slate-200 dark:border-slate-800 py-4 mb-16 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-2 md:space-x-4 overflow-x-auto pb-2 md:pb-0">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${activeFilter === filter
                                    ? 'bg-accent-light text-white shadow-lg'
                                    : 'bg-white dark:bg-slate-800 text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredTestimonials.map((t, index) => (
                        <div key={index} className="break-inside-avoid">
                            {t.type === 'video' ? (
                                <div
                                    className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group h-96 w-full"
                                    onClick={() => setIsVideoOpen(true)}
                                >
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-md p-5 rounded-full group-hover:scale-110 transition-transform ring-1 ring-white/50">
                                            <Play className="h-8 w-8 text-white fill-current" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MapPin className="h-4 w-4 text-accent-light" />
                                            <span className="text-xs font-bold uppercase tracking-wider">{t.dest}</span>
                                        </div>
                                        <h3 className="font-serif font-bold text-xl">{t.name}</h3>
                                        <p className="text-xs opacity-80 mt-1">{t.role}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-accent-light/30 transition-all duration-300 relative">
                                    <Quote className="absolute top-8 right-8 w-10 h-10 text-accent-light/10 fill-current" />
                                    <div className="flex text-accent-light mb-6">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                                    </div>
                                    <p className="text-text-light/80 dark:text-text-dark/80 italic mb-8 leading-relaxed">"{t.text}"</p>
                                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6">
                                        <div>
                                            <h4 className="font-bold font-serif text-lg">{t.name}</h4>
                                            <p className="text-xs opacity-60">{t.role} in {t.dest}</p>
                                        </div>
                                        <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-wide">
                                            {t.country}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
                <div className="flex items-center justify-center h-full text-white">
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

export default Testimonials;
