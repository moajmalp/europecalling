import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SEO from '../components/layout/SEO';

const Contact = () => {
    return (
        <div className="w-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
            <SEO title="Contact Us" description="Get in touch with Europe Calling for expert career guidance." />

            <div className="relative min-h-screen flex flex-col lg:flex-row">
                {/* Info Side */}
                <div className="lg:w-1/2 bg-primary-dark text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-light opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <span className="text-accent-light font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">Let's Talk About Your Future</h1>
                        <p className="text-xl text-white/70 mb-12 max-w-md">Ready to take the leap? Our experts are here to guide you through every step of your European journey.</p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-accent-light" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-white/70">123 Business Avenue, Tech Park<br />Mumbai, India - 400001</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-accent-light" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-white/70">hello@europecalling.com<br />support@europecalling.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-accent-light" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-white/70">+91 98765 43210<br />Mon-Sat, 9am - 7pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="lg:w-1/2 p-12 lg:p-24 bg-surface-light dark:bg-surface-dark flex flex-col justify-center">
                    <form className="max-w-lg mx-auto w-full space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide opacity-70">First Name</label>
                                <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-accent-light outline-none transition-all" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide opacity-70">Last Name</label>
                                <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-accent-light outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wide opacity-70">Email Address</label>
                            <input type="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-accent-light outline-none transition-all" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wide opacity-70">Interested Destination</label>
                            <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-accent-light outline-none transition-all appearance-none cursor-pointer">
                                <option>Germany</option>
                                <option>Poland</option>
                                <option>France</option>
                                <option>Czech Republic</option>
                                <option>Romania</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wide opacity-70">Message</label>
                            <textarea rows="4" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-accent-light outline-none transition-all resize-none" placeholder="Tell us about your experience..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-5 bg-accent-light hover:bg-accent-dark text-white font-bold text-lg rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            Send Message <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
