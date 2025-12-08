import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000); // Show after 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Premium Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
                    />

                    {/* Premium Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
                    >
                        <div className="bg-cream dark:bg-slate-900 rounded-3xl shadow-2xl premium-shadow dark:premium-shadow-dark p-10 relative border-2 border-slate-300 dark:border-slate-700">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-5 right-5 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors p-2 hover:bg-white/50 dark:hover:bg-slate-800 rounded-full"
                                aria-label="Close popup"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                                Start Your European Journey
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                                Get a free consultation and personalized roadmap to your dream job in Europe.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-5 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange dark:focus:ring-orange focus:border-orange outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-5 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange dark:focus:ring-orange focus:border-orange outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-5 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange dark:focus:ring-orange focus:border-orange outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                                    required
                                />
                                <select
                                    className="w-full px-5 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange dark:focus:ring-orange focus:border-orange outline-none transition-all text-slate-900 dark:text-white appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="">Select Destination</option>
                                    <option value="germany">Germany</option>
                                    <option value="poland">Poland</option>
                                    <option value="france">France</option>
                                    <option value="czech">Czech Republic</option>
                                    <option value="romania">Romania</option>
                                </select>
                                <button
                                    type="submit"
                                    className="w-full brand-gradient text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Get Free Consultation
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LeadPopup;
