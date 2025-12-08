import { useState } from 'react';
import { X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoTestimonial = ({ name, role, destination, thumbnail, videoUrl, onPlay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 cursor-pointer"
            onClick={onPlay}
        >
            {/* Video Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                    src={thumbnail}
                    alt={`${name} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange/90 dark:bg-orange flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                        <Play className="w-7 h-7 text-white fill-current ml-1" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{role}</p>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-orange dark:text-orange px-3 py-1 rounded-full bg-cream/50 dark:bg-orange/10">
                    Now in {destination}
                </div>
            </div>
        </motion.div>
    );
};

const VideoTestimonialModal = ({ isOpen, onClose, videoUrl, name }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl mx-4"
                    >
                        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{name}'s Success Story</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    aria-label="Close video"
                                >
                                    <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                </button>
                            </div>

                            {/* Video Container */}
                            <div className="aspect-video bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`${videoUrl}?autoplay=1`}
                                    title={`${name} testimonial video`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export { VideoTestimonial, VideoTestimonialModal };
