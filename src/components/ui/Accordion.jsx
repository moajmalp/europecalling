import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-neutral-200 last:border-0">
            <button
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={onClick}
            >
                <span className={`text-lg font-serif font-medium ${isOpen ? 'text-primary-DEFAULT' : 'text-neutral-800'}`}>
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-secondary" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-neutral-400" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-neutral-600 leading-relaxed">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white rounded-xl shadow-sm border border-neutral-100 px-6">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
