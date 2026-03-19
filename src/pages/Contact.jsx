
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Contact = () => {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Format the message for WhatsApp
        const text = `*New Contact Form Submission*%0A-------------------%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
        const whatsappUrl = `https://wa.me/918237682141?text=${text}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Clear the form
        e.target.reset();
    };

    return (
        <main className="bg-stone-50 min-h-screen">
            <SEO
                title="Contact Us"
                description="Get in touch with Vetnmark for expert veterinary advice, appointments, or consultations. Available 24/7 for emergencies."
            />
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1450280624955-4621c1f7b7e8?q=80&w=2072&auto=format&fit=crop"
                        alt="Contact Us"
                    />
                    <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm border border-green-500/30"
                    >
                        {t('contact.hero.badge')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        {t('contact.hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-stone-200 font-light"
                    >
                        {t('contact.hero.subtitle')}
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-10 border border-stone-100"
                    >
                        <h3 className="text-3xl font-serif font-bold text-stone-800 mb-8">{t('contact.info.title')}</h3>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div className="ml-6">
                                    <p className="text-lg font-bold text-stone-900 mb-1">{t('contact.info.phone')}</p>
                                    <p className="text-stone-500 text-lg">+91 82376 82141</p>
                                    <p className="text-green-600 text-sm mt-1">{t('contact.info.phone_sub')}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="ml-6">
                                    <p className="text-lg font-bold text-stone-900 mb-1">{t('contact.info.email')}</p>
                                    <p className="text-stone-500 text-lg">swanitee50@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-stone-900 rounded-2xl shadow-xl p-10 text-white"
                    >
                        <h3 className="text-3xl font-serif font-bold text-white mb-2">{t('contact.form.title')}</h3>
                        <p className="text-stone-400 mb-8">{t('contact.form.subtitle')}</p>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">{t('contact.form.name')}</label>
                                <input id="name" name="name" type="text" autoComplete="name" required
                                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="Your Full Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">{t('contact.form.email')}</label>
                                <input id="email" name="email" type="email" autoComplete="email" required
                                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">{t('contact.form.message')}</label>
                                <textarea id="message" name="message" rows="4" required
                                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button type="submit"
                                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-stone-900 bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02]"
                            >
                                {t('contact.form.btn')}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
