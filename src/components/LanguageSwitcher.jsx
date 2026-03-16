
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ scrolled }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${scrolled ? 'text-stone-600 hover:text-green-700' : 'text-white/90 hover:text-white'
                }`}>
                <Globe className="w-4 h-4" />
                <span className="uppercase">{i18n.language.split('-')[0]}</span>
            </button>

            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right z-50">
                <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-green-50 hover:text-green-700 font-medium"
                >
                    English
                </button>
                <button
                    onClick={() => changeLanguage('hi')}
                    className="block w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-green-50 hover:text-green-700 font-medium"
                >
                    हिंदी (Hindi)
                </button>
                <button
                    onClick={() => changeLanguage('mr')}
                    className="block w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-green-50 hover:text-green-700 font-medium"
                >
                    मराठी (Marathi)
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
