
import { Wheat, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white p-1.5 rounded-lg shadow-sm">
                                <img src={logo} alt="Vetnmark Logo" className="h-10 w-auto object-contain" />
                            </div>
                            <span className="font-bold text-2xl text-white">Vetnmark</span>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Dedicated to animal reproduction through stress-free management, nutritional therapies, and modern technologies.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="hover:text-green-400 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-green-400 transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-green-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 border-b-2 border-green-600 inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-green-400 transition-colors flex items-center gap-2"><span className="text-green-600">›</span> Home</Link></li>
                            <li><Link to="/about" className="hover:text-green-400 transition-colors flex items-center gap-2"><span className="text-green-600">›</span> About Us</Link></li>
                            <li><Link to="/services" className="hover:text-green-400 transition-colors flex items-center gap-2"><span className="text-green-600">›</span> Services</Link></li>
                            <li><Link to="/gaushala" className="hover:text-green-400 transition-colors flex items-center gap-2"><span className="text-green-600">›</span> Gaushala</Link></li>
                            <li><Link to="/gallery" className="hover:text-green-400 transition-colors flex items-center gap-2"><span className="text-green-600">›</span> Event Gallery</Link></li>
                            <li><Link to="/videos" className="hover:text-green-400 transition-colors flex items-center gap-2"><span className="text-green-600">›</span> Videos</Link></li>
                            <li><Link to="/contact" className="hover:text-green-400 transition-colors flex items-center gap-2"><span className="text-green-600">›</span> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Core Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 border-b-2 border-green-600 inline-block pb-1">Core Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white cursor-default">Reproductive Guidance</li>
                            <li className="hover:text-white cursor-default">Infertility Solutions</li>
                            <li className="hover:text-white cursor-default">Gaushala Advisory</li>
                            <li className="hover:text-white cursor-default">Breed Improvement</li>
                            <li className="hover:text-white cursor-default">Nutritional Therapies</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 border-b-2 border-green-600 inline-block pb-1">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                <span>At Post - XYZ, Tal- ABC, Dist- PQR, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>+91 82376 82141</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>swanitee50@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-800 mt-16 pt-8 pb-4 flex flex-col items-center justify-center text-stone-500 text-sm space-y-2">
                    <p>
                        &copy; 2026 Vetnmark. All rights reserved. | <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
                    </p>
                    <p className="text-stone-600 font-medium">
                        Designed and Developed by <a href="#" className="text-green-600/80 hover:text-green-500 transition-colors">Spidi Technology</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
