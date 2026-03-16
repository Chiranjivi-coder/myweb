import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wheat, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { useModal } from '../../context/ModalContext';
import headerLogo from '../../assets/header-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();
    const { openModal } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: t('navbar.home'), href: '/' },
        { name: t('navbar.about'), href: '/about' },
        { name: t('navbar.services'), href: '/services' },
        { name: t('navbar.gaushala'), href: '/gaushala' },
        { name: t('gallery.title'), href: '/gallery' },
        { name: t('videos.title', 'Videos'), href: '/videos' },
        { name: t('navbar.contact'), href: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-white/90 p-1.5 rounded-xl shadow-sm backdrop-blur-sm">
                            <img
                                src={headerLogo}
                                alt="Vetnmark Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-bold text-2xl tracking-tight leading-none font-serif ${scrolled ? 'text-stone-800' : 'text-white'}`}>
                                Vetnmark
                            </span>
                            <span className={`text-xs font-medium tracking-wider ${scrolled ? 'text-green-700' : 'text-green-200'}`}>
                                {t('navbar.tagline')}
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-semibold transition-all relative group ${scrolled ? 'text-stone-600 hover:text-green-700' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-green-600' : 'bg-white'
                                    }`}></span>
                            </Link>
                        ))}
                        <LanguageSwitcher scrolled={scrolled} />
                        <a
                            href="https://wa.me/918237682141?text=Hi!%20I%20would%20like%20to%20book%20a%20call."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${scrolled ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-600/20' : 'bg-white text-green-700 hover:bg-stone-50'}`}
                        >
                            <PhoneCall className="w-4 h-4" /> Book Call
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher scrolled={scrolled} />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md transition-colors ${scrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-3 py-3 rounded-md text-base font-medium text-stone-600 hover:text-green-700 hover:bg-green-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-stone-100 mt-2">
                                <a
                                    href="https://wa.me/918237682141?text=Hi!%20I%20would%20like%20to%20book%20a%20call."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 transition-colors shadow-sm"
                                >
                                    <PhoneCall className="w-5 h-5" /> Book Call
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
