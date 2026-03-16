
import { ArrowRight, Leaf, Users, Milk, Activity, Play, Check, Stethoscope, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';
import { useState } from 'react';
import SEO from '../components/SEO';
import JourneyModal from '../components/JourneyModal';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Home = () => {
    const { t } = useTranslation();
    const { openModal, openInfoModal } = useModal();
    const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);

    return (
        <main className="bg-stone-50 overflow-hidden">
            <SEO
                title="Indigenous Breed Conservation & Health"
                description="Expert reproductive guidance and holistic healthcare for the future of Desi Cows. Vetnmark bridges ancient wisdom with modern veterinary science."
            />
            {/* Immersive Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
                {/* Parallax Background */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                >
                    <img
                        className="w-full h-full object-cover"
                        src="/desi-cow-header.png"
                        alt="Majestic Desi Cow at Sunset"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/90"></div>
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-medium text-sm mb-8"
                    >
                        <Leaf className="w-4 h-4 mr-2 text-green-400" />
                        <span className="tracking-wide uppercase">{t('home.badge')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8"
                    >
                        {t('home.title_prefix')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
                            {t('home.title_highlight')}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        {t('home.subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <button
                            onClick={() => openModal('general')}
                            className="group relative px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center">
                                {t('home.book_btn')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </button>
                        <button
                            onClick={() => setIsJourneyModalOpen(true)}
                            className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        >
                            <Play className="w-5 h-5 mr-3 fill-current" />
                            {t('home.watch_btn')}
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Trust Section */}
            <div className="bg-stone-900 py-12 border-b border-stone-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: t('home.stats.breeders'), value: '500+' },
                            { label: t('home.stats.cows'), value: '10k+' },
                            { label: t('home.stats.gaushalas'), value: '50+' },
                            { label: t('home.stats.experience'), value: '15+' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-serif font-bold text-green-500 mb-2">{stat.value}</div>
                                <div className="text-stone-400 text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Target Audience Section - Creative Premium Redesign */}
            <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-green-900/30 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4">{t('home.audience.title')}</motion.h2>
                        <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white">{t('home.audience.heading')}</motion.h3>
                        <motion.p variants={fadeInUp} className="text-xl text-stone-400 max-w-2xl mx-auto font-light">
                            {t('home.audience.desc')}
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:h-[600px]">
                        {[
                            {
                                title: t('home.audience.prof'),
                                icon: Activity,
                                desc: t('home.audience.prof_desc'),
                                image: "audience-0.jpg",
                                color: "from-stone-900/90 via-stone-900/40 to-transparent",
                                fullDesc: "Elevate your veterinary practice with Vetnmark's specialized training and certification programs in indigenous breed reproduction and holistic healthcare. We provide access to cutting-edge research, diagnostic tools, and community-driven knowledge sharing to position you as an expert in Desi cow conservation.",
                                features: [
                                    "Advanced Reproductive Diagnostics Training",
                                    "Holistic Treatment Protocols Workshops",
                                    "Certification in Indigenous Breed Management",
                                    "Access to Exclusive Veterinary Network"
                                ]
                            },
                            {
                                title: t('home.audience.breeder'),
                                icon: Users,
                                desc: t('home.audience.breeder_desc'),
                                image: "audience-1.jpg",
                                color: "from-stone-900/90 via-stone-900/40 to-transparent",
                                fullDesc: "Protect and enhance the genetic purity of your herd. Our tailored breeding consultations utilize both ancestral wisdom and modern genetic science to ensure your Desi cows achieve optimal health, high fertility rates, and strong multi-generational resilience.",
                                features: [
                                    "Genetic Purity Assessment & Preservation Plans",
                                    "Customized Breeding & Nutrition Strategies",
                                    "Infertility Troubleshooting & Management",
                                    "Herd Health Audits & Preventative Care"
                                ]
                            },
                            {
                                title: t('home.audience.union'),
                                icon: Milk,
                                desc: t('home.audience.union_desc'),
                                image: "audience-2.jpg",
                                color: "from-stone-900/90 via-stone-900/40 to-transparent",
                                fullDesc: "Scale your Gaushala or dairy union operations without compromising on animal warfare. We offer enterprise-level consulting to optimize facility management, disease prevention, and sustainable milking practices tailored specifically for large herds of indigenous breeds.",
                                features: [
                                    "Enterprise-Scale Herd Health Programs",
                                    "Facility Design & Optimization Consulting",
                                    "Biosecurity & Disease Outbreak Prevention",
                                    "Staff Training on Compassionate Handling"
                                ]
                            },
                            {
                                title: t('home.audience.dairy'),
                                icon: Leaf,
                                desc: t('home.audience.dairy_desc'),
                                image: "audience-3.jpg",
                                color: "from-stone-900/90 via-stone-900/40 to-transparent",
                                fullDesc: "Achieve the perfect balance between commercial viability and ethical, health-first farming. Vetnmark assists commercial dairies in transitioning to or maintaining indigenous breeds, maximizing A2 milk yields through natural, stress-free environments and organic nutrition plans.",
                                features: [
                                    "A2 Milk Yield Optimization Strategies",
                                    "Transition Planning for Indigenous Breeds",
                                    "Organic Feed & Nutrition Formulation",
                                    "Stress-Reduction Environmental Design"
                                ]
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative rounded-3xl overflow-hidden h-[400px] lg:h-full flex flex-col justify-end cursor-pointer shadow-2xl"
                                onClick={() => openInfoModal({
                                    title: item.title,
                                    img: item.image,
                                    icon: item.icon,
                                    desc: item.desc,
                                    fullDesc: item.fullDesc,
                                    features: item.features
                                })}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                </div>

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} transition-all duration-500`}></div>

                                {/* Content */}
                                <div className="relative z-10 p-8 transform transition-transform duration-500 lg:translate-y-24 group-hover:translate-y-0">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-white border border-white/20 transform group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h4>

                                    <div className="lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <p className="text-stone-200 mb-8 leading-relaxed font-light">{item.desc}</p>
                                        <div className="inline-flex items-center text-sm font-bold text-white uppercase tracking-widest relative overflow-hidden group/btn bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                                            <span>
                                                {t('home.audience.learn_more')}
                                            </span>
                                            <ArrowRight className="ml-3 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Gaushala Management Section */}
            <section className="py-24 bg-green-50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 mt-12 lg:mt-0"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6">
                                <Building2 className="w-4 h-4 mr-2" />
                                <span className="uppercase tracking-wider">{t('home.gaushala_block.pre_title')}</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                                {t('home.gaushala_block.title')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                                    {t('home.gaushala_block.title_highlight')}
                                </span>
                            </h3>

                            <p className="text-xl text-stone-600 mb-10 leading-relaxed font-light">
                                {t('home.gaushala_block.desc')}
                            </p>

                            <button
                                onClick={() => openModal('gaushala')}
                                className="group inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-600/30"
                            >
                                {t('home.gaushala_block.btn')}
                                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="COEM.png"
                                    alt="Gaushala Management"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 hidden sm:flex"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-stone-900 text-lg">Sustainable</p>
                                    <p className="text-stone-500 text-sm">Self-reliant ecosystems</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section with Split Layout */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                        {/* Image Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative mb-16 lg:mb-0"
                        >
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <img
                                className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px] z-10"
                                src="emp.png"
                                alt="Vetnmark Mission - Community"
                            />
                            {/* Floating Quote Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block border border-stone-100"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-green-500"></div>)}
                                </div>
                                <p className="font-serif italic text-stone-600 text-lg">"The best care we've ever received for our herd. Vetnmark is truly a partner in our success."</p>
                                <p className="mt-4 font-bold text-stone-900">- Rajesh P., Dairy Farmer</p>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >

                            {/* Mission Block */}
                            <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">{t('home.mission.title')}</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                                {t('home.mission.heading')} <br />
                                <span className="relative inline-block">
                                    {t('home.mission.heading_highlight')}
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200/50 -z-10 transform -rotate-2"></span>
                                </span>
                            </h3>
                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                {t('home.mission.desc')}
                            </p>

                            <div className="space-y-6 mb-10">
                                {t('home.mission.list', { returnObjects: true }).map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex items-center"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 flex-shrink-0">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <span className="text-stone-700 font-medium text-lg">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Link to="/about" className="btn-primary inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-bold rounded-lg hover:bg-stone-800 transition-all hover:px-10">
                                {t('home.mission.btn')} <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision and Mission Dedicated Section */}
            <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 pb-10">
                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-stone-800/50 backdrop-blur-md p-10 rounded-3xl border border-stone-700/50 relative group hover:border-green-500/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                            <div className="w-16 h-16 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 mb-8">
                                <Leaf className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-wider">{t('home.vision.title')}</h3>
                            <p className="text-xl text-stone-300 leading-relaxed font-light italic">
                                "{t('home.vision.desc')}"
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-stone-800/50 backdrop-blur-md p-10 rounded-3xl border border-stone-700/50 relative group hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-tr-full -z-10 group-hover:scale-110 transition-transform"></div>
                            <div className="w-16 h-16 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 mb-8">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-wider">{t('home.mission.title')}</h3>
                            <p className="text-xl text-stone-300 leading-relaxed font-light">
                                {t('home.mission.desc')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-green-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2578&auto=format&fit=crop"
                        alt="Farm landscape"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-stone-900/90"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        {t('home.cta.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-green-100 mb-10"
                    >
                        {t('home.cta.desc')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <button
                            onClick={() => openModal('general')}
                            className="inline-block bg-white text-green-900 font-bold py-4 px-10 rounded-full hover:bg-green-50 transition-colors shadow-2xl"
                        >
                            {t('home.cta.btn')}
                        </button>
                    </motion.div>
                </div>
            </section>

            <JourneyModal isOpen={isJourneyModalOpen} onClose={() => setIsJourneyModalOpen(false)} />
        </main>
    );
};

export default Home;
