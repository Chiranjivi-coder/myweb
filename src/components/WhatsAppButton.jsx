
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
    const { t } = useTranslation();
    const phoneNumber = "918237682141";

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
        >
            <span className="bg-white text-green-600 px-3 py-1 rounded-l-full shadow-lg text-sm font-bold mr-[-10px] opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hidden md:block border border-green-100">
                {t('engagement.whatsapp')}
            </span>
            <div className="relative">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-[#20bd5a] transition-all transform hover:scale-110 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 fill-current" />
                </div>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
