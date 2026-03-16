import { PhoneCall, ShieldCheck, Stethoscope, ClipboardList, ArrowRight, CheckCircle2, Briefcase, Activity, Building, Users, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';
import SEO from '../components/SEO';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {
    const { t } = useTranslation();
    const { openModal } = useModal();

    const categories = [
        {
            id: 'on_call',
            icon: PhoneCall,
            color: 'text-amber-500',
            bg: 'bg-amber-50',
            border: 'border-amber-200',
            hover: 'hover:border-amber-400',
            gradient: 'from-amber-500/10 to-transparent'
        },
        {
            id: 'preventive',
            icon: ShieldCheck,
            color: 'text-green-500',
            bg: 'bg-green-50',
            border: 'border-green-200',
            hover: 'hover:border-green-400',
            gradient: 'from-green-500/10 to-transparent'
        },
        {
            id: 'clinical',
            icon: Stethoscope,
            color: 'text-blue-500',
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            hover: 'hover:border-blue-400',
            gradient: 'from-blue-500/10 to-transparent'
        },
        {
            id: 'managemental',
            icon: ClipboardList,
            color: 'text-purple-500',
            bg: 'bg-purple-50',
            border: 'border-purple-200',
            hover: 'hover:border-purple-400',
            gradient: 'from-purple-500/10 to-transparent'
        }
    ];

    return (
        <main className="bg-stone-50 min-h-screen pb-24">
            <SEO
                title={t('services.hero.title')}
                description={t('services.hero.subtitle')}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-900 border-b border-stone-800">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-600 via-stone-900 to-stone-900"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold tracking-wider uppercase mb-6 border border-green-500/30">
                            {t('services.hero.badge')}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                            {t('services.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-300 font-light max-w-3xl mx-auto leading-relaxed">
                            {t('services.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Pillars Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const data = t(`services.categories.${cat.id}`, { returnObjects: true });

                        return (
                            <motion.div
                                key={cat.id}
                                variants={itemAnim}
                                className={`group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border ${cat.border} ${cat.hover} overflow-hidden flex flex-col h-full`}
                            >
                                {/* Decorative Background Gradient */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${cat.gradient} rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-700`}></div>

                                <div className="relative z-10 flex-grow">
                                    <div className={`w-16 h-16 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-8 shadow-inner`}>
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-3xl font-serif font-bold text-stone-800 mb-4 group-hover:text-stone-900 transition-colors">
                                        {data.title}
                                    </h3>

                                    <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                        {data.desc}
                                    </p>

                                    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 mb-8">
                                        <ul className="space-y-4">
                                            {data.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-stone-700 font-medium">
                                                    <CheckCircle2 className={`w-5 h-5 ${cat.color} mr-3 flex-shrink-0 mt-0.5`} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto pt-4 border-t border-stone-100">
                                    <button
                                        onClick={() => openModal(data.title.toLowerCase())}
                                        className={`inline-flex items-center font-bold text-lg ${cat.color} hover:opacity-80 transition-opacity group/btn`}
                                    >
                                        Enquire Now
                                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Target Audiences Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4 block"
                        >
                            {t('services.audiences.title')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif font-bold text-stone-800 max-w-3xl mx-auto"
                        >
                            {t('services.audiences.subtitle')}
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: 'professionals', icon: Briefcase, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', hover: 'hover:border-indigo-400', shadow: 'hover:shadow-indigo-500/20' },
                            { id: 'breeders', icon: Activity, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', hover: 'hover:border-rose-400', shadow: 'hover:shadow-rose-500/20' },
                            { id: 'milk_unions', icon: Building, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', hover: 'hover:border-blue-400', shadow: 'hover:shadow-blue-500/20' },
                            { id: 'social_forum', icon: Users, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', hover: 'hover:border-teal-400', shadow: 'hover:shadow-teal-500/20' },
                            { id: 'dairymen', icon: Droplets, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', hover: 'hover:border-orange-400', shadow: 'hover:shadow-orange-500/20' }
                        ].map((aud, idx) => {
                            const AudIcon = aud.icon;
                            const audData = t(`services.audiences.${aud.id}`, { returnObjects: true });

                            // Center the 5th item elegantly on large screens
                            const isLastOdd = idx === 4 && (5 % 2 !== 0);
                            const lgColSpan = isLastOdd ? "lg:col-start-2 lg:col-span-1" : "";

                            return (
                                <motion.div
                                    key={aud.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className={`bg-white rounded-3xl p-8 border ${aud.border} ${aud.hover} shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${aud.shadow} transition-all duration-300 group flex flex-col ${lgColSpan}`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${aud.bg} ${aud.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                        <AudIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif text-stone-800 mb-6">{audData.title}</h3>
                                    <ul className="space-y-3 flex-grow mb-8">
                                        {audData.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-stone-600">
                                                <div className={`w-2 h-2 rounded-full ${aud.bg} border-2 border-current ${aud.color} mt-2 mr-3 flex-shrink-0`}></div>
                                                <span className="leading-relaxed font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="relative z-10 mt-auto pt-4 border-t border-stone-100">
                                        <button
                                            onClick={() => openModal(audData.title.toLowerCase())}
                                            className={`inline-flex items-center font-bold text-lg ${aud.color} hover:opacity-80 transition-opacity group/btn`}
                                        >
                                            Enquire Now
                                            <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Block */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center"
            >
                <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2673&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Need specialized care for your herd?</h2>
                        <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
                            Don't wait until conditions worsen. Get expert veterinary guidance customized to your exact requirements.
                        </p>
                        <button
                            onClick={() => openModal('general')}
                            className="inline-flex items-center px-10 py-4 bg-green-500 text-stone-900 font-bold text-lg rounded-full hover:bg-green-400 transition-colors shadow-lg hover:shadow-green-500/25 focus:ring-4 focus:ring-green-500/20"
                        >
                            Book a Consultation <ArrowRight className="ml-2 w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default Services;
