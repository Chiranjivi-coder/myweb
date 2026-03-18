import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Globe, Sparkles } from 'lucide-react';
import logo from '../../assets/header-logo.png';

const SplashScreen = ({ onEnter }) => {
    const canvasRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const logoX = useTransform(x, [-window.innerWidth / 2, window.innerWidth / 2], [-40, 40]);
    const logoY = useTransform(y, [-window.innerHeight / 2, window.innerHeight / 2], [-40, 40]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Particle System for "Crazy" BG
        const particles = [];
        const particleCount = 80;

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.life = Math.random() * 0.5 + 0.5;
                this.color = `hsla(${Math.random() * 60 + 120}, 70%, 50%, ${this.life})`; // Greenish hues
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const render = () => {
            ctx.fillStyle = 'rgba(10, 12, 11, 0.15)'; // Trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Connect lines
            ctx.strokeStyle = 'rgba(34, 197, 94, 0.05)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        resize();
        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mouseX, mouseY]);

    const title = "VETNMARK".split("");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0c0b] overflow-hidden p-4"
        >
            {/* Animated Canvas Background - Fixed */}
            <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

            {/* Fluid Morphing Gradients (Floating Color Effect) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
                <motion.div 
                    animate={{ 
                        x: [0, 100, -50, 0],
                        y: [0, 50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/30 blur-[120px] rounded-full"
                />
                <motion.div 
                    animate={{ 
                        x: [0, -100, 50, 0],
                        y: [0, 100, -50, 0],
                        scale: [1, 1.3, 1.1, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-green-600/20 blur-[140px] rounded-full"
                />
                <motion.div 
                    animate={{ 
                        x: [0, 80, -80, 0],
                        y: [0, -100, 80, 0],
                        scale: [1, 1.4, 0.8, 1],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-amber-500/20 blur-[100px] rounded-full"
                />
                <motion.div 
                    animate={{ 
                        x: [0, -120, 120, 0],
                        y: [0, 80, -80, 0],
                        scale: [1, 1.1, 1.3, 1],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 8 }}
                    className="absolute bottom-[20%] left-[10%] w-[45%] h-[45%] bg-lime-400/15 blur-[110px] rounded-full"
                />
            </div>

            {/* Content Container - Consolidated */}
            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
                
                {/* Minimized Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-8 md:mb-12 relative group"
                >
                    <div className="absolute inset-0 bg-green-400/20 blur-[60px] rounded-full"></div>
                    <div className="relative z-10 p-4 sm:p-6 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl">
                        <img src={logo} alt="Vetnmark Logo" className="h-12 sm:h-20 w-auto" />
                    </div>
                </motion.div>

                {/* Cyber-Organic Title - Consolidated */}
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 md:mb-8">
                    {title.map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + (i * 0.05) }}
                            className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-black text-white"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <div className="flex flex-col items-center text-center w-full">
                    <p className="text-base sm:text-xl md:text-2xl text-stone-400 font-extralight mb-8 md:mb-12 max-w-2xl px-4">
                        Transforming the future through <span className="text-white font-medium italic">Scientific Gau-Seva</span>.
                    </p>

                    <motion.button
                        onClick={onEnter}
                        whileHover="hover"
                        initial="initial"
                        className="group relative h-16 w-56 sm:h-20 sm:w-64 md:h-24 md:w-72 bg-[#0a0c0b] overflow-hidden rounded-full border border-white/20 hover:border-green-500 transition-colors z-50 mb-12 sm:mb-16"
                    >
                        <motion.div
                            variants={{ initial: { y: 0 }, hover: { y: -80 } }}
                            className="absolute inset-0 flex items-center justify-center gap-2 text-white text-lg sm:text-xl md:text-2xl font-bold"
                        >
                            PUBLISH NOW <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.div>
                        
                        <motion.div
                            variants={{ initial: { y: 80 }, hover: { y: 0 } }}
                            className="absolute inset-0 flex items-center justify-center bg-green-500 text-[#0a0c0b] text-lg sm:text-xl md:text-2xl font-black"
                        >
                            <Sparkles className="mr-2 w-6 h-6" /> LET'S BEGIN
                        </motion.div>
                    </motion.button>

                    {/* Spidi Attribution */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-stone-500 text-[10px] sm:text-xs uppercase tracking-[0.3em]">Developed and design by</span>
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5">
                            <span className="text-white font-bold tracking-widest text-sm sm:text-base">SPIDI TECHNOLOGY</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Vibe Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,12,11,0.6)_100%)] pointer-events-none" />
        </motion.div>
    );
};

export default SplashScreen;
