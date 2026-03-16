import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, ZoomIn, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const GalleryItem = ({ event, onClick, itemVariants }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            variants={itemVariants}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
            onClick={onClick}
            whileHover={{ y: -5, scale: 1.02 }}
        >
            <div
                className="relative w-full bg-stone-100"
                style={{ aspectRatio: event.aspectRatio || '3/2' }}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-200 animate-pulse">
                        <Loader2 className="w-6 h-6 text-stone-400 animate-spin" />
                    </div>
                )}
                <img
                    src={event.image}
                    alt={event.title}
                    className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                    onLoad={() => setIsLoaded(true)}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const EventGallery = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Categories now need to be dynamic based on Drive folders
    const [categories, setCategories] = useState([
        { id: 'all', label: t('gallery.filters.all', 'All Photos') },
        { id: 'recent', label: t('gallery.filters.recent', 'Recent') },
    ]);

    useEffect(() => {
        const fetchDriveImages = async () => {
            const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
            const folderId = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;

            if (!apiKey || !folderId) {
                console.error("No Google Drive API Key or Folder ID found in .env");
                setIsLoading(false);
                return;
            }

            try {
                // Fetch all items (files and folders) in the root folder
                const rootResponse = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&key=${apiKey}&fields=files(id,name,mimeType,createdTime,thumbnailLink,imageMediaMetadata)&orderBy=createdTime+desc`);

                if (!rootResponse.ok) {
                    throw new Error("Failed to fetch from Drive root");
                }

                const rootData = await rootResponse.json();
                let allEvents = [];
                let newCategories = [{ id: 'all', label: t('gallery.filters.all', 'All Photos') }];

                if (rootData.files && rootData.files.length > 0) {
                    // 1. Separate images and child folders from the root
                    const rootImages = rootData.files.filter(f => f.mimeType.startsWith('image/'));
                    const childFolders = rootData.files.filter(f => f.mimeType === 'application/vnd.google-apps.folder');

                    // 2. Process root images (putting them in a 'recent' category)
                    if (rootImages.length > 0) {
                        newCategories.push({ id: 'recent', label: t('gallery.filters.recent', 'Recent') });

                        const processedRoot = rootImages.map(file => {
                            const gridImageUrl = file.thumbnailLink ? file.thumbnailLink.replace(/=s\d+$/, '=w400') : `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`;
                            const fullImageUrl = file.thumbnailLink ? file.thumbnailLink.replace(/=s\d+$/, '=w1000') : `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;

                            let aspectRatio = null;
                            if (file.imageMediaMetadata && file.imageMediaMetadata.width && file.imageMediaMetadata.height) {
                                aspectRatio = file.imageMediaMetadata.width / file.imageMediaMetadata.height;
                            }

                            return {
                                id: file.id,
                                title: file.name.split('.')[0] || 'Event Photo',
                                date: new Date(file.createdTime).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
                                category: 'recent',
                                image: gridImageUrl,
                                fullImage: fullImageUrl,
                                aspectRatio: aspectRatio
                            };
                        });
                        allEvents = [...allEvents, ...processedRoot];

                        // INITIAL RENDER: Show root images immediately so user doesn't stare at a spinner!
                        setCategories([...newCategories]);
                        setEvents([...allEvents]);
                        setIsLoading(false); // We have *some* data now, stop the main spinner
                    }

                    // 3. For each child folder, create a category and fetch its images
                    const folderPromises = childFolders.map(async (folder) => {
                        const catId = folder.id;
                        const catLabel = folder.name;

                        newCategories.push({ id: catId, label: catLabel });

                        // We can update the categories tabs as they are discovered
                        setCategories([...newCategories]);

                        // Fetch images inside this specific child folder
                        const subResponse = await fetch(`https://www.googleapis.com/drive/v3/files?q='${catId}'+in+parents+and+mimeType+contains+'image/'+and+trashed=false&key=${apiKey}&fields=files(id,name,createdTime,thumbnailLink,imageMediaMetadata)&orderBy=createdTime+desc`);
                        if (subResponse.ok) {
                            const subData = await subResponse.json();
                            if (subData.files) {
                                return subData.files.map(file => {
                                    const gridImageUrl = file.thumbnailLink ? file.thumbnailLink.replace(/=s\d+$/, '=w400') : `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`;
                                    const fullImageUrl = file.thumbnailLink ? file.thumbnailLink.replace(/=s\d+$/, '=w1000') : `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;

                                    let aspectRatio = null;
                                    if (file.imageMediaMetadata && file.imageMediaMetadata.width && file.imageMediaMetadata.height) {
                                        aspectRatio = file.imageMediaMetadata.width / file.imageMediaMetadata.height;
                                    }

                                    return {
                                        id: file.id,
                                        title: file.name.split('.')[0] || 'Event Photo',
                                        date: new Date(file.createdTime).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
                                        category: catId,
                                        image: gridImageUrl,
                                        fullImage: fullImageUrl,
                                        aspectRatio: aspectRatio
                                    };
                                });
                            }
                        }
                        return [];
                    });

                    // Wait for all folder fetches to complete
                    const subFolderImages = await Promise.all(folderPromises);

                    // Flatten the arrays of images from subfolders and add to our main list
                    allEvents = [...allEvents, ...subFolderImages.flat()];
                }

                // FINAL RENDER: Update state with EVERYTHING
                setCategories(newCategories);
                setEvents(allEvents);

            } catch (error) {
                console.error("Error fetching images from Drive:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDriveImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filteredEvents = filter === 'all'
        ? events
        : events.filter(event => event.category === filter);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const currentIndex = filteredEvents.findIndex(ev => ev.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredEvents.length;
        setSelectedImage(filteredEvents[nextIndex]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const currentIndex = filteredEvents.findIndex(ev => ev.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredEvents.length) % filteredEvents.length;
        setSelectedImage(filteredEvents[prevIndex]);
    };

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
                title="Event Gallery | Vetnmark"
                description="Explore glimpses of Vetnmark's recent activities, camps, and community events."
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
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                        alt="Event Gallery"
                    />
                    <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm border border-green-500/30"
                    >
                        {t('gallery.badge', 'Gallery')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        {t('gallery.title', 'Event Gallery')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-stone-200 font-light mb-8"
                    >
                        {t('gallery.subtitle', 'Glimpses of our recent activities, camps, and community events.')}
                    </motion.p>

                    {!isLoading && events.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="inline-block bg-stone-800/80 border border-stone-700/50 text-stone-300 text-sm px-6 py-3 rounded-lg shadow-sm backdrop-blur-sm"
                        >
                            <p>No photos available at the moment.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${filter === cat.id
                                ? 'bg-green-700 text-white shadow-lg shadow-green-200'
                                : 'bg-white text-stone-600 hover:bg-green-50 border border-stone-200'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Loading State or Masonry Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center min-h-[40vh]">
                        <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                    >
                        {filteredEvents.map((event) => (
                            <GalleryItem
                                key={event.id}
                                event={event}
                                onClick={() => openLightbox(event)}
                                itemVariants={itemVariants}
                            />
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation Buttons */}
                        {filteredEvents.length > 1 && (
                            <>
                                <button onClick={prevImage} className="absolute left-4 md:left-8 text-white/70 hover:text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all z-10">
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button onClick={nextImage} className="absolute right-4 md:right-8 text-white/70 hover:text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all z-10">
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </>
                        )}

                        {/* Image Container */}
                        <motion.div
                            key={selectedImage.id} // Re-animate when image changes
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.fullImage}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                crossOrigin="anonymous"
                                referrerPolicy="no-referrer"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default EventGallery;
