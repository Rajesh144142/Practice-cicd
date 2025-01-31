import React, { useState } from 'react';
import { Home, GraduationCap, Briefcase, Code, Mail, Menu } from 'lucide-react';
import {Link} from 'react-router-dom'
const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: '', label: 'Home', icon: Home },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'expertise', label: 'Expertise', icon: Code },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    return (
        <>
            {/* Desktop Header - Top */}
            <header className="hidden lg:block fixed top-0 left-0 right-0 bg-gray-900 shadow-lg shadow-gray-900/50 border-b border-gray-800 z-50">
                <nav className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Brand */}
                        <div className="flex items-center gap-2">
                            <Code className="w-6 h-6 text-purple-500" />
                            <span className="text-white font-bold text-xl">Portfolio</span>
                        </div>

                        {/* Navigation Items */}
                        <ul className="flex items-center gap-8">
                            {navItems.map(({ id, label, icon: Icon }) => (
                                <li key={id}>
                                    <Link
                                        to={`${id}`}
                                        onClick={() => setActiveSection(id)}
                                        className={`flex items-center gap-2 transition-colors duration-300 ${
                                            activeSection === id
                                                ? 'text-purple-500'
                                                : 'text-gray-400 hover:text-purple-400'
                                        }`}
                                    >
                                        <Icon size={18} />
                                        <span className="text-sm font-medium">{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Mobile Header - Bottom */}
            <header className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 shadow-lg shadow-gray-900/50 border-t border-gray-800 z-50">
                <nav className="max-w-2xl mx-auto">
                    <ul className="flex justify-around items-center px-4 py-3">
                        {navItems.map(({ id, label, icon: Icon }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={() => setActiveSection(id)}
                                    className={`flex flex-col items-center gap-1 transition-colors duration-300 ${
                                        activeSection === id
                                            ? 'text-purple-500'
                                            : 'text-gray-400 hover:text-purple-400'
                                    }`}
                                >
                                    <Icon
                                        size={20}
                                        className={`transition-transform duration-300 ${
                                            activeSection === id ? 'scale-110' : ''
                                        }`}
                                    />
                                    <span className="text-xs font-medium">{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Spacer for desktop header */}
            <div className="hidden lg:block h-16" />
        </>
    );
};

export default Header;