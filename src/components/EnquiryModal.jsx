
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';

const EnquiryModal = () => {
    const { t } = useTranslation();
    const { isModalOpen, closeModal, selectedInterest } = useModal();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        interest: 'general',
        message: ''
    });

    // Sync context interest with form state when modal opens
    useEffect(() => {
        if (isModalOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData(prev => ({ ...prev, interest: selectedInterest }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalOpen, selectedInterest]);

    // Auto-open logic (only if not manually opened yet)
    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenModal = sessionStorage.getItem('hasSeenEnquiryModal');
            if (!hasSeenModal && !isModalOpen) {
                // We don't use openModal() here to avoid overriding any manual interaction flow
                // But for simplicity in this implementation, we can just check if it's already open
                // Ideally, we'd have a separate method or just let the manual trigger take precedence
            }
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const text = `*New Website Enquiry*%0A-------------------%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Interest:* ${formData.interest}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/918237682141?text=${text}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
        setTimeout(() => {
            closeModal();
            setSubmitted(false);
            setFormData({ name: '', phone: '', interest: 'general', message: '' });
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                    >
                        {/* Header Image/Gradient */}
                        <div className="h-32 bg-gradient-to-r from-green-600 to-emerald-600 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                            <div className="text-center relative z-10 px-6">
                                <h3 className="text-2xl font-serif font-bold text-white mb-1">{t('engagement.modal.title')}</h3>
                                <p className="text-green-100 text-sm">{t('engagement.modal.subtitle')}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-1 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="p-6">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-8 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animation-bounce">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold text-stone-800">Thank You!</h4>
                                    <p className="text-stone-500 mt-2">We have received your enquiry. Our team will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">{t('engagement.modal.name')}</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">{t('engagement.modal.phone')}</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="tel"
                                            required
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">{t('engagement.modal.interest')}</label>
                                        <select
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-stone-600"
                                        >
                                            <option value="general">{t('engagement.modal.interests.general')}</option>
                                            <option value="breeding">{t('engagement.modal.interests.breeding')}</option>
                                            <option value="gaushala">{t('engagement.modal.interests.gaushala')}</option>
                                            <option value="training">{t('engagement.modal.interests.training')}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">{t('engagement.modal.message')}</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="2"
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-stone-900 text-white font-bold py-3 rounded-lg hover:bg-stone-800 transition-colors shadow-lg mt-2">
                                        {t('engagement.modal.submit')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;
