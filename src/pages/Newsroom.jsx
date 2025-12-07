import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';

const Newsroom = () => {
    const articles = [
        { id: 1, title: "Germany Introduces New Opportunity Card for Skilled Workers", date: "Dec 05, 2025", category: "Immigration News", image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop", excerpt: "The new 'Chancenkarte' makes it easier for non-EU citizens to look for work in Germany." },
        { id: 2, title: "Top 5 Hospitality Trends in Europe for 2026", date: "Nov 28, 2025", category: "Industry Insights", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", excerpt: "From sustainable tourism to AI in hotels, here is what to expect in the coming year." },
        { id: 3, title: "Europe Calling Partners with Accor Hotels Poland", date: "Nov 15, 2025", category: "Company News", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop", excerpt: "We are proud to announce our exclusive recruitment partnership with one of Poland's largest hotel chains." },
        { id: 4, title: "Why Chef Jobs in France are Booming", date: "Nov 10, 2025", category: "Career Guide", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", excerpt: "A shortage of skilled culinary professionals is driving salaries up across French kitchens." },
    ];

    return (
        <div className="w-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen">
            <SEO title="Newsroom" description="Latest updates and insights on European hospitality careers." />

            <section className="py-24 px-4 text-center">
                <span className="text-accent-light font-bold tracking-widest uppercase text-sm mb-4 block">Our Blog</span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Latest Updates</h1>
                <p className="text-xl opacity-70 max-w-2xl mx-auto">Stay informed about immigration policies, success stories, and industry trends.</p>
            </section>

            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map(article => (
                        <Link to="#" key={article.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-accent-light/30 transition-all duration-300">
                            <div className="h-60 overflow-hidden relative">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                                    <Tag className="w-3 h-3 text-accent-light" />
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-xs opacity-50 mb-4 space-x-2 font-medium uppercase tracking-wide">
                                    <Calendar className="h-3 w-3" />
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4 line-clamp-2 group-hover:text-accent-light transition-colors">
                                    {article.title}
                                </h3>
                                <p className="opacity-70 text-sm line-clamp-3 mb-8 leading-relaxed flex-grow">{article.excerpt}</p>
                                <div className="mt-auto flex items-center font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                                    Read More <ArrowRight className="h-4 w-4 ml-2 text-accent-light" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Newsroom;
