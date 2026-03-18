import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';
import SEO from '../components/SEO';
import {
    Award, GraduationCap, Briefcase,
    BookOpen, HeartPulse, Microscope,
    CheckCircle, Calendar, ArrowRight, Star
} from 'lucide-react';

const About = () => {
    const { t } = useTranslation();
    const { openModal } = useModal();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <main className="bg-stone-50 min-h-screen pb-24">
            <SEO
                title={t('about.hero.title')}
                description={t('about.profile.bio1')}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-900 text-white">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400 via-stone-900 to-stone-900"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.span
                                variants={fadeIn}
                                className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold tracking-wider uppercase mb-6 border border-green-500/30"
                            >
                                {t('about.hero.badge')}
                            </motion.span>
                            <motion.h1
                                variants={fadeIn}
                                className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
                            >
                                {t('about.hero.title')}
                            </motion.h1>
                            <motion.p
                                variants={fadeIn}
                                className="text-xl md:text-2xl text-stone-300 font-light mb-8"
                            >
                                {t('about.hero.subtitle')}
                            </motion.p>
                            <motion.div variants={fadeIn} className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                <p className="text-lg leading-relaxed mb-4 text-stone-200">
                                    {t('about.profile.bio1')}
                                </p>
                                <p className="text-lg leading-relaxed text-stone-200">
                                    {t('about.profile.bio2')}
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full"
                        >
                            <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            {/* Placeholder for Dr. Niteen Markandeya's actual photo */}
                            <div className="relative w-full max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl group">
                                <img
                                    src="expert.jpg"
                                    alt="Dr. Niteen Markandeya"
                                    className="w-full h-auto object-cover object-top transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-900/90 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 z-10">
                                    <div className="flex items-center gap-3 text-white">
                                        <Award className="w-8 h-8 text-amber-400" />
                                        <span className="text-xl font-bold">35+ Years of Excellence</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                {/* Expertise & Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                                <Microscope className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-stone-800">{t('about.expertise.title')}</h3>
                        </div>
                        <ul className="space-y-4">
                            {t('about.expertise.items', { returnObjects: true }).map((item, idx) => (
                                <motion.li key={idx} variants={fadeIn} className="flex items-center text-stone-600 text-lg bg-stone-50 p-4 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="bg-stone-900 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-white"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center text-amber-400">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold font-serif">{t('about.education.title')}</h3>
                        </div>
                        <ul className="space-y-4">
                            {t('about.education.items', { returnObjects: true }).map((item, idx) => (
                                <motion.li key={idx} variants={fadeIn} className="flex items-start text-stone-300 text-lg bg-stone-800/50 p-4 rounded-xl border border-stone-700/50">
                                    <Star className="w-5 h-5 text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Experience Timeline */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">{t('about.experience.title')}</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {t('about.experience.items', { returnObjects: true }).map((item, idx) => (
                                <motion.div
                                    key={idx} variants={fadeIn}
                                    className="group relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-green-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                                        <div className="flex-shrink-0 w-32">
                                            <span className="inline-flex items-center justify-center px-4 py-2 bg-stone-100 text-stone-800 font-bold rounded-xl text-lg w-full group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
                                                <Calendar className="w-5 h-5 mr-2" />
                                                {item.year}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-stone-800 mb-2">{item.role}</h4>
                                            <p className="text-lg text-stone-600">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Honours & Awards Layout */}
                <div className="space-y-24">
                    {/* Honours Section */}
                    <section>
                        <div className="mb-12">
                            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">{t('about.honours.title')}</h2>
                            <p className="text-xl text-stone-600 max-w-4xl leading-relaxed">
                                {t('about.honours.desc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { key: 'academic', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
                                { key: 'social', icon: HeartPulse, color: 'text-rose-600', bg: 'bg-rose-50' },
                                { key: 'leadership', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50' },
                                { key: 'corona', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' }
                            ].map((cat, idx) => {
                                const Icon = cat.icon;
                                const content = t(`about.honours.${cat.key}`, { returnObjects: true });
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow flex flex-col h-full"
                                    >
                                        <div className={`w-14 h-14 ${cat.bg} rounded-full flex items-center justify-center mb-6`}>
                                            <Icon className={`w-7 h-7 ${cat.color}`} />
                                        </div>
                                        <h4 className="text-xl font-bold text-stone-800 mb-4">{content.title}</h4>
                                        {content.desc ? (
                                            <p className="text-stone-600 flex-grow">{content.desc}</p>
                                        ) : (
                                            <ul className="space-y-3 text-stone-600 flex-grow">
                                                {content.items.slice(0, 3).map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm">
                                                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                                {content.items.length > 3 && (
                                                    <li className="text-sm italic text-stone-400 mt-2">+ more achievements</li>
                                                )}
                                            </ul>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Awards Section */}
                    <section className="bg-stone-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[128px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative z-10 mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('about.awards.title')}</h2>
                            <p className="text-xl text-stone-300 max-w-3xl leading-relaxed">
                                {t('about.awards.desc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                            {t('about.awards.categories', { returnObjects: true }).map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                                        <h4 className="text-xl font-bold text-white">{cat.name}</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-stone-300 text-sm leading-relaxed">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-24 text-center mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">
                        {t('contact.hero.title')}
                    </h2>
                    <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
                        {t('home.cta.desc')}
                    </p>
                    <button
                        onClick={() => openModal('general')}
                        className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transform hover:-translate-y-1"
                    >
                        {t('home.cta.btn')} <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>
        </main>
    );
};

export default About;
