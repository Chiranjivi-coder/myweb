import { X, Calendar, Milestone, HeartHandshake, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const icons = [Calendar, Milestone, HeartHandshake, Globe2];

const JourneyModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    const timelineData = t('home.journey.timeline', { returnObjects: true }) || [];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: 'spring' } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 mb:p-12 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, type: 'spring' }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header Gradient */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-900/30 to-transparent pointer-events-none"></div>

                        {/* Top Bar / Close Button */}
                        <div className="relative z-10 flex justify-between items-center p-6 border-b border-stone-800/50">
                            <div>
                                <h2 className="text-3xl font-serif text-white">{t('home.journey.title')}</h2>
                                <p className="text-stone-400 mt-1">{t('home.journey.subtitle')}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 rounded-full bg-stone-800/50 text-stone-400 hover:text-white hover:bg-stone-700 hover:rotate-90 transition-all duration-300"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Timeline Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-12 relative scrollbar-hide">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative max-w-3xl mx-auto"
                            >
                                {/* Vertical Line */}
                                <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-green-500/50 via-emerald-500/50 to-transparent -translate-x-1/2"></div>

                                {timelineData.map((item, index) => {
                                    const Icon = icons[index % icons.length];
                                    const isEven = index % 2 === 0;

                                    return (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className={`relative flex items-center justify-between mb-16 last:mb-0 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
                                        >
                                            {/* Spacer for alternating layout on desktop */}
                                            <div className="hidden md:block w-5/12"></div>

                                            {/* Center Icon */}
                                            <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-stone-900 border-4 border-stone-800 flex items-center justify-center -translate-x-1/2 shadow-xl z-10 group hover:border-green-500 transition-colors duration-300">
                                                <Icon className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                                            </div>

                                            {/* Content Box */}
                                            <div className="w-[calc(100%-5rem)] pl-16 md:pl-0 md:w-5/12 group">
                                                <div className="bg-stone-800/30 hover:bg-stone-800/80 border border-stone-700/50 hover:border-green-500/30 p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 transform group-hover:-translate-y-2">
                                                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 font-bold tracking-wider text-sm mb-4 border border-green-500/20">
                                                        {item.year}
                                                    </span>
                                                    <h3 className="text-2xl font-serif font-bold text-white mb-3">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-stone-300 leading-relaxed font-light">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 p-6 border-t border-stone-800 flex justify-center bg-stone-900/50 backdrop-blur-md">
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-colors border border-stone-700"
                            >
                                {t('home.journey.close')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default JourneyModal;
