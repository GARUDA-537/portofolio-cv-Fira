'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
    const [showCVModal, setShowCVModal] = useState(false);
    const cvLink = 'https://1drv.ms/w/c/ba2a07833bda4e64/IQBx9pa3tYZySaPPiw0kcNVrAW09n5q7wGDcvaU71CLEqeU?e=2Bxno9';

    const openCV = () => {
        window.open(cvLink, '_blank', 'noopener,noreferrer');
        setShowCVModal(false);
    };

    return (
        <>
            <section id="beranda" className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden bg-gradient-to-br from-[#fee5c8] via-[#FFF3E6] to-[#FFEFD5]">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D97706]/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0D9488]/10 to-transparent rounded-full blur-3xl" />

                {/* Decorative dots */}
                <div className="absolute top-40 right-20 w-2 h-2 bg-[#D97706] rounded-full animate-pulse"></div>
                <div className="absolute top-60 right-40 w-3 h-3 bg-[#0D9488] rounded-full animate-pulse delay-100"></div>
                <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#EA580C] rounded-full animate-pulse delay-200"></div>

                <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                    <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up">
                        <div className="inline-block">
                            <h2 className="text-[#0D9488] font-bold tracking-wider uppercase text-xs sm:text-sm bg-[#0D9488]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                Portofolio Profesional
                            </h2>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#2C2416]">
                            Nayla <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#EA580C] to-[#DC2626]">
                                Syafira
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-[#6B5844] font-medium">
                            Desain Permodelan Dan Informasi Bangunan
                        </p>

                        <p className="text-[#2C2416] text-base sm:text-lg max-w-lg leading-relaxed">
                            Mahir dalam AutoCAD &amp; SketchUp. Membuat gambar teknik gedung, furniture 2D&amp;3D, dan RAB dengan presisi dan teliti. Siap berkontribusi dalam proyek teknis dengan disiplin dan tanggung jawab.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <button
                                onClick={() => setShowCVModal(true)}
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full btn-primary font-medium text-sm sm:text-base shadow-lg hover:shadow-xl text-center transition-all duration-300 hover:scale-105"
                            >
                                📄 Lihat CV Saya
                            </button>
                            <Link href="#portofolio" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full btn-secondary font-medium text-sm sm:text-base text-center">
                                Lihat Portofolio
                            </Link>
                            <Link href="#kontak" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#0D9488] text-white hover:bg-[#0D9488]/90 font-medium text-sm sm:text-base text-center transition-all duration-300">
                                Kontak Saya
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-[350px] sm:max-w-[400px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group border-2 sm:border-4 border-white">
                        <Image
                            src="/nayla-profile-new.jpg"
                            alt="Nayla Syafira"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CV Modal */}
            {showCVModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
                    onClick={() => setShowCVModal(false)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowCVModal(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-800"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* Content */}
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D97706] to-[#EA580C] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                📄
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-[#2C2416] mb-2">
                                    Curriculum Vitae
                                </h3>
                                <p className="text-[#6B5844]">
                                    Nayla Syafira
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={openCV}
                                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#D97706] to-[#EA580C] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    Buka CV di Tab Baru
                                </button>

                                <button
                                    onClick={() => setShowCVModal(false)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Tutup
                                </button>
                            </div>

                            <p className="text-xs text-gray-400">
                                CV akan dibuka di OneDrive
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
            `}</style>
        </>
    );
}
