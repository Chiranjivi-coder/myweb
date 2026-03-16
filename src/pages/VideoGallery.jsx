import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import SEO from '../components/SEO';

const VideoGallery = () => {
    const { t } = useTranslation();

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
            const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

            if (!apiKey || !channelId) {
                setError("YouTube API Key or Channel ID is missing in environment variables.");
                setIsLoading(false);
                return;
            }

            try {
                // Fetch the latest 12 videos from the specific channel
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12&type=video`
                );

                if (!response.ok) {
                    throw new Error(`YouTube API error: ${response.statusText}`);
                }

                const data = await response.json();

                const formattedVideos = data.items.map(item => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    youtubeId: item.id.videoId,
                    category: 'Video',
                    date: new Date(item.snippet.publishedAt).toLocaleDateString(),
                }));

                setVideos(formattedVideos);
            } catch (err) {
                console.error("Failed to fetch YouTube videos:", err);
                setError("Failed to load videos. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <main className="bg-stone-50 min-h-screen">
            <SEO
                title="Videos | Vetnmark"
                description="Watch our latest videos and highlights from Vetnmark activities."
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
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        src="https://images.unsplash.com/photo-1516280440502-a2f72a4c14de?q=80&w=2070&auto=format&fit=crop"
                        alt="Video Production Background"
                    />
                    <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm border border-red-500/30 flex items-center justify-center gap-2 mx-auto w-max"
                    >
                        <PlayCircle className="w-4 h-4" />
                        {t('videos.badge', 'Watch')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        {t('videos.title', 'Video Gallery')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-stone-200 font-light mb-8"
                    >
                        {t('videos.subtitle', 'Watch highlights, educational content, and glimpses of our activities.')}
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-12 bg-red-50 rounded-2xl shadow-sm border border-red-100">
                        <p className="text-lg font-medium">{error}</p>
                    </div>
                ) : videos.length === 0 ? (
                    <div className="text-center text-stone-500 py-12 bg-white rounded-2xl shadow-sm border border-stone-100">
                        <PlayCircle className="w-12 h-12 mx-auto mb-4 text-stone-300" />
                        <p className="text-lg">No videos found matching this channel.</p>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {videos.map((video) => (
                            <motion.div
                                variants={itemVariants}
                                key={video.id}
                                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white border border-stone-100 flex flex-col"
                            >
                                <div className="relative w-full aspect-video bg-stone-900 overflow-hidden">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-stone-800 mb-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: video.title }}>
                                    </h3>
                                    <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                                        <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">
                                            {video.date}
                                        </span>
                                        <a
                                            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-1 transition-colors"
                                        >
                                            Watch on YouTube <PlayCircle className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </main>
    );
};

export default VideoGallery;
