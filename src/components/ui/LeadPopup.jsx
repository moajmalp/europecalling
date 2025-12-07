import { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Build logic to only show once per session or always after 15s? 
            // For demo, show after 15s always if not submitted
            const hasSeen = sessionStorage.getItem('hasSeenPopup');
            if (!hasSeen) {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenPopup', 'true');
            }
        }, 15000); // 15 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Logic to send data
        setTimeout(() => {
            setIsOpen(false);
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div className="bg-primary-DEFAULT p-6 text-center">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Get Your Free Consultation</h3>
                        <p className="text-white/80 text-sm">Expert guidance for your European dream career.</p>
                    </div>

                    <div className="p-8">
                        {submitted ? (
                            <div className="text-center py-8">
                                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-primary-DEFAULT mb-2">Thank You!</h4>
                                <p className="text-neutral-600">Our expert will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-secondary outline-none transition-colors" />
                                </div>
                                <div>
                                    <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-secondary outline-none transition-colors" />
                                </div>
                                <div>
                                    <input type="tel" required placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-secondary outline-none transition-colors" />
                                </div>
                                <div>
                                    <select className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-secondary outline-none transition-colors text-neutral-600">
                                        <option value="">Select Interested Country</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                        <option>Poland</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full py-3 bg-secondary hover:bg-secondary-dark text-white font-bold uppercase tracking-wide rounded-lg transition-colors shadow-md">
                                    Request Call Back
                                </button>
                                <p className="text-xs text-center text-neutral-400 mt-4">We respect your privacy. No spam.</p>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LeadPopup;
