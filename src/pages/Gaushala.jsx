import { Wheat, TrendingUp, Heart, Sun, ArrowRight, Droplet, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import SEO from '../components/SEO';

const Gaushala = () => {
    const { t } = useTranslation();
    const { openModal } = useModal();

    return (
        <main className="bg-stone-50 min-h-screen">
            <SEO
                title="Gaushala Management"
                description="Expert advisory services to establish and manage self-sustainable Gaushalas. We integrate modern management with traditional Gau-Seva values."
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
                        src="https://images.unsplash.com/photo-1544256608-6a56db97779d?q=80&w=2670&auto=format&fit=crop"
                        alt="Modern Gaushala Facility"
                    />
                    <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        {t('gaushala.hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-stone-200 font-light mb-8"
                    >
                        {t('gaushala.hero.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-serif font-bold text-stone-800">
                            {t('gaushala.content.heading')} <br />
                            <span className="text-green-600">{t('gaushala.content.heading_highlight')}</span>
                        </h2>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            {t('gaushala.content.desc')}
                        </p>

                        <div className="grid gap-6">
                            {[
                                { title: t('gaushala.content.advisory.title'), desc: t('gaushala.content.advisory.desc'), icon: Wheat },
                                { title: t('gaushala.content.resource.title'), desc: t('gaushala.content.resource.desc'), icon: TrendingUp },
                                { title: t('gaushala.content.breed.title'), desc: t('gaushala.content.breed.desc'), icon: Heart },
                                { title: t('gaushala.content.energy.title'), desc: t('gaushala.content.energy.desc'), icon: Sun },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-green-50 rounded-lg text-green-600 mr-4">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-900">{item.title}</h4>
                                        <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-amber-100 rounded-[2rem] transform rotate-3"></div>
                        <img
                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                            src="https://images.unsplash.com/photo-1596733430292-b7f5060cdbfd?q=80&w=2070&auto=format&fit=crop"
                            alt="Cows feeding peacefully"
                        />
                    </motion.div>
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-stone-900 rounded-3xl overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                        <div className="lg:max-w-2xl">
                            <h3 className="text-3xl font-serif font-bold text-white mb-4">{t('gaushala.cta.title')}</h3>
                            <p className="text-stone-300 text-lg">
                                {t('gaushala.cta.desc')}
                            </p>
                        </div>
                        <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
                            <button
                                onClick={() => openModal('gaushala')}
                                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-colors text-lg"
                            >
                                {t('gaushala.cta.btn')} <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default Gaushala;
