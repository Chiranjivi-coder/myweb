// Removed unused React import
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
const InfoModal = () => {
    const { isInfoModalOpen, closeInfoModal, infoModalData, openModal } = useModal();

    if (!infoModalData) return null;

    const handleEnquireClick = () => {
        closeInfoModal();
        setTimeout(() => {
            openModal(infoModalData.title.toLowerCase());
        }, 300);
    };

    return (
        <>
            {isInfoModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 mb:p-12">
                    {/* Backdrop */}
                    <div
                        onClick={closeInfoModal}
                        className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm transition-opacity duration-300"
                    />

                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300"
                    >
                        {/* Image Panel */}
                        <div className="w-full md:w-2/5 h-48 md:h-auto relative hidden sm:block">
                            <img
                                src={infoModalData.img}
                                alt={infoModalData.title}
                                className="w-full h-full object-cover grayscale-[20%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-900 via-stone-900/50 to-transparent" />

                            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-emerald-500/10 backdrop-blur-md flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                                {infoModalData.icon && <infoModalData.icon className="w-6 h-6" />}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 overflow-y-auto p-8 md:p-12 relative">
                            {/* Close Button */}
                            <button
                                onClick={closeInfoModal}
                                className="absolute top-6 right-6 p-2 rounded-full bg-stone-800/50 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
                                Detailed Solution
                            </div>

                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                                {infoModalData.title}
                            </h2>

                            <p className="text-stone-300 text-lg leading-relaxed font-light mb-8">
                                {infoModalData.fullDesc || infoModalData.desc}
                            </p>

                            {/* Features/Benefits List */}
                            {infoModalData.features && (
                                <div className="space-y-4 mb-10">
                                    <h3 className="text-stone-400 uppercase tracking-widest text-xs font-semibold mb-4">Key Benefits</h3>
                                    {infoModalData.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                            <span className="text-stone-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Action Area */}
                            <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center gap-4">
                                <button
                                    onClick={handleEnquireClick}
                                    className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 group"
                                >
                                    Enquire About This Solution
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={closeInfoModal}
                                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-700 text-stone-300 font-medium rounded-full hover:bg-stone-800 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default InfoModal;
